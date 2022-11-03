from django.contrib import admin
from .models import MainCategory, SubCategory


@admin.register(MainCategory)
class MainCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = (
        "__str__",
        "main",
    )
