from django.db import models


class Category(models.Model):
    gender = models.CharField(max_length=5)
    question = models.CharField(max_length=5)
    degree = models.IntegerField()
