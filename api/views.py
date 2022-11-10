from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
from names.models import Name
from names.serializers import NameSerializer

import numpy as np
from numpy import dot
from numpy.linalg import norm


class MainCategoryProcess(APIView):
    def post(self, request):
        """남녀 성별 구분"""
        gender = request.data.get("gender")

        """대분류 질문 구분"""
        nature = np.array([2, 0.7, 0.5, 0, 0.8, -2])
        wisdom_smart = np.array([0, -1, -1, -1.7, 1.8, 1])
        love_friend = np.array([-1.5, 1.8, 2, 2, -2, 0.6])

        q1 = float(request.data.get("q1"))
        q2 = float(request.data.get("q2"))
        q3 = float(request.data.get("q3"))
        q4 = float(request.data.get("q4"))
        q5 = float(request.data.get("q5"))
        q6 = float(request.data.get("q6"))
        question_vector = np.array([q1, q2, q3, q4, q5, q6])

        cos_nature = dot(question_vector, nature) / (
            norm(question_vector) * norm(nature)
        )
        cos_wisdom = dot(question_vector, wisdom_smart) / (
            norm(question_vector) * norm(wisdom_smart)
        )
        cos_love = dot(question_vector, love_friend) / (
            norm(question_vector) * norm(love_friend)
        )

        print(request.data)

        if gender == "man":
            if max(cos_nature, cos_wisdom, cos_love) == cos_nature:
                return Response("test1")
            if max(cos_nature, cos_wisdom, cos_love) == cos_wisdom:
                return Response("test2")
            if max(cos_nature, cos_wisdom, cos_love) == cos_love:
                return Response("test3")
        if gender == "woman":
            if max(cos_nature, cos_wisdom, cos_love) == cos_nature:
                return Response("test4")
            if max(cos_nature, cos_wisdom, cos_love) == cos_wisdom:
                return Response("test5")
            if max(cos_nature, cos_wisdom, cos_love) == cos_love:
                return Response("test6")


class SubcatecoryProcess(APIView):
    def get(self, request):
        man_obj = Name.objects.filter(gender="man")
        woman_obj = Name.objects.filter(gender="woman")
        man_smart = Name.objects.filter(gender="man").get(meaning="영리한 사람")
        print(man_smart)
        serializer = NameSerializer(man_smart)
        return Response(serializer.data)
