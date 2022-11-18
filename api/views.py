from rest_framework.views import APIView
from rest_framework.response import Response
from names.models import Name
from names.serializers import NameSerializer

import numpy as np
from numpy import dot
from numpy.linalg import norm


class CategoryProcess(APIView):
    def get(self, request):
        """대분류 질문 구분"""
        nature = np.array([2, 0.7, 0.5, 0, 0.8, -2])
        wisdom_smart = np.array([0, -1, -1, -1.7, 1.8, 1])
        love_friend = np.array([-1.5, 1.8, 2, 2, -2, 0.6])

        q1 = float(request.GET["q1"])
        q2 = float(request.GET["q2"])
        q3 = float(request.GET["q3"])
        q4 = float(request.GET["q4"])
        q5 = float(request.GET["q5"])
        q6 = float(request.GET["q6"])
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

        """data 저장 및 parsing"""
        nature_data = []
        for i in range(5):
            nature_man_add = Name.objects.filter(gender="man").get(category_id=i + 1)
            nature_woman_add = Name.objects.filter(gender="woman").get(
                category_id=i + 1
            )
            nature_data.append(nature_man_add)
            nature_data.append(nature_woman_add)
        nature_serializer = NameSerializer(nature_data, many=True)

        wisdom_data = []
        for j in range(3):
            wisdom_man_add = Name.objects.filter(gender="man").get(category_id=j + 6)
            wisdom_woman_add = Name.objects.filter(gender="woman").get(
                category_id=j + 6
            )
            wisdom_data.append(wisdom_man_add)
            wisdom_data.append(wisdom_woman_add)
        wisdom_serializer = NameSerializer(wisdom_data, many=True)

        love_data = []
        for j in range(4):
            love_man_add = Name.objects.filter(gender="man").get(category_id=j + 9)
            love_woman_add = Name.objects.filter(gender="woman").get(category_id=j + 9)
            love_data.append(love_man_add)
            love_data.append(love_woman_add)
        love_serializer = NameSerializer(love_data, many=True)

        """결과 프론트에 전송"""
        if max(cos_nature, cos_wisdom, cos_love) == cos_nature:
            return Response(nature_serializer.data)
        if max(cos_nature, cos_wisdom, cos_love) == cos_wisdom:
            return Response(wisdom_serializer.data)
        if max(cos_nature, cos_wisdom, cos_love) == cos_love:
            return Response(love_serializer.data)
