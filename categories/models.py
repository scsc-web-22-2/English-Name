from django.db import models


class MainCategory(models.Model):
    title = models.CharField(
        max_length=15,
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return f"{self.kind}"


class SubCategory(models.Model):
    main = models.ForeignKey(
        "categories.MainCategory",
        related_name="sub",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    kind = models.CharField(
        max_length=15,
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return f"{self.kind}"
