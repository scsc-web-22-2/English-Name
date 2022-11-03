from rest_framework.views import APIView
from rest_framework.response import Response
from names.models import Name

import numpy as np
from numpy import dot
from numpy.linalg import norm


class MainCategoryProcess(APIView):
    def post(self, request):
        """남녀 성별 구분"""
        if request.data.get("gender") == "man":
            man_obj = Name.objects.filter(gender="man")
        if request.data.get("gender") == "woman":
            woman_obj = Name.objects.filter(gender="woman")

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

        if max(cos_nature, cos_wisdom, cos_love) == cos_nature:
            nature_page = "자연 질문 페이지"
            return Response(nature_page)
        if max(cos_nature, cos_wisdom, cos_love) == cos_wisdom:
            wisdom_page = "지혜,영리 질문 페이지"
            return Response(wisdom_page)
        if max(cos_nature, cos_wisdom, cos_love) == cos_love:
            love_page = "사랑,친구 질문 페이지"
            return Response(love_page)
