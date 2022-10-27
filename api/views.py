from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer


class CategoryProcess(APIView):
    def post(self, request):
        print(request.data)
        return Response(request.data)
