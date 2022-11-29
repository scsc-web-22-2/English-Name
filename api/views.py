from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .services import ClassifyLogic, DataLogic
import numpy as np


class CategoryProcess(APIView):
    def get(self, request):
        """성별 데이터"""
        gender = request.GET["gender"]

        """질문 결과 벡터 만들기"""
        q1 = float(request.GET["q1"])
        q2 = float(request.GET["q2"])
        q3 = float(request.GET["q3"])
        q4 = float(request.GET["q4"])
        q5 = float(request.GET["q5"])
        q6 = float(request.GET["q6"])
        questionVector = np.array([q1, q2, q3, q4, q5, q6])

        """최댓값 로직"""
        distanceList = ClassifyLogic.distanceSimilarity(self, questionVector)
        maxLogic = ClassifyLogic.maxLogic(self, distanceList, questionVector)

        """이름 데이터 받아오기"""
        try:
            nature_serializer = DataLogic.parseName(self, gender, 0)
            love_serializer = DataLogic.parseName(self, gender, 4)
            wisdom_serializer = DataLogic.parseName(self, gender, 8)
        except:
            raise Http404("Name does not exist")

        """결과 프론트에 전송"""
        if maxLogic == 0:
            return Response(nature_serializer.data)
        if maxLogic == 1:
            return Response(love_serializer.data)
        if maxLogic == 2:
            return Response(wisdom_serializer.data)
        else:
            return Http404("Name does not exist")
