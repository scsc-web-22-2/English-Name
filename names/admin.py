from django.contrib import admin
from .models import Name


@admin.register(Name)
class NameAdmin(admin.ModelAdmin):
    def main_category(self, name):
        return name.category.main

    list_display = (
        "__str__",
        "gender",
        "category",
        "main_category",
    )
