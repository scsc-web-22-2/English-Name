from django.urls import path
from .views import PostListAPIView

urlpatterns = [
    path("post-list/", PostListAPIView.as_view()),
]
