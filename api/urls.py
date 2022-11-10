from django.urls import path
from . import views

urlpatterns = [
    path("v1/category", views.MainCategoryProcess.as_view()),
    path("v1/result", views.SubcatecoryProcess.as_view()),
]
