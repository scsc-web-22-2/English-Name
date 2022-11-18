from rest_framework import serializers
from .models import Name
from categories.models import SubCategory


class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = "__all__"
