from django.urls import path
from . import views

urlpatterns = [
    path("v1/category/", views.CategoryProcess.as_view()),
]
