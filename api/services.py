import numpy as np
from numpy import dot
from numpy.linalg import norm
from names.models import Name
from names.serializers import NameSerializer


class ClassifyLogic:
    nature = [2, 0.7, 0.5, 0, 0.8, -2]
    love_friend = [-1.5, 1.8, 2, 2, -2, 0.6]
    wisdom_smart = [0, -1, -1, -1.7, 1.8, 1]
    compareArr = np.array([nature, love_friend, wisdom_smart])

    def distanceSimilarity(self, questionVector):
        compareArr = ClassifyLogic.compareArr
        distanceList = []
        for i in range(len(compareArr)):
            distance = np.sqrt(np.sum((questionVector - compareArr[i]) ** 2))
            distanceList.append(distance)
        return distanceList

    def cosineSimilarity(self, questionVector, processedCompareArr):
        cosineList = []
        for i in range(len(processedCompareArr)):
            cosine = dot(questionVector, processedCompareArr[i]) / (
                norm(questionVector) * norm(processedCompareArr[i])
            )
            cosineList.append(cosine)
        return cosineList

    def maxLogic(self, distanceList: list, questionVector):
        compareArr = ClassifyLogic.compareArr
        maxDistance = max(distanceList)
        order = []
        processsedCompareArr = []

        for i in range(len(distanceList)):
            if maxDistance == distanceList[i]:
                order.append(i)
                processsedCompareArr.append(compareArr[i])
        if len(order) == 1:
            return order[0]
        else:
            cosineList = ClassifyLogic.cosineSimilarity(
                self, questionVector, processsedCompareArr
            )
            maxCosine = max(cosineList)
            cosineOrder = []
            for j in range(len(cosineList)):
                if maxCosine == cosineList[j]:
                    cosineOrder.append(j)
            return order[0]


class DataLogic:
    def parseName(self, gender: str, numberForParsing: int):
        forList = [1, 2, 3, 4]
        names = []
        for i in forList:
            name_add = Name.objects.filter(gender=gender).get(
                category_id=i + numberForParsing
            )
            names.append(name_add)
        name_serializer = NameSerializer(names, many=True)
        return name_serializer
