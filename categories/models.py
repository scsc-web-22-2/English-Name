from django.db import models


class MainCategory(models.Model):
    kind = models.CharField(max_length=15)

    def __str__(self) -> str:
        return f"{self.kind}"


class SubCategory(models.Model):
    main = models.ForeignKey(
        "categories.MainCategory",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    kind = models.CharField(max_length=15)

    def __str__(self) -> str:
        return f"{self.kind}"
