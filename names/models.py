from django.db import models


class Name(models.Model):
    class GenderChoices(models.TextChoices):
        MAN = ("man", "man")
        WOMAN = ("woman", "woman")
        ETC = ("etc", "etc")

    gender = models.CharField(
        max_length=5,
        choices=GenderChoices.choices,
        blank=True,
        null=True,
    )
    name = models.CharField(
        max_length=100,
        blank=True,
        null=True,
    )
    result = models.TextField(
        blank=True,
        null=True,
    )
    meaning = models.TextField(
        blank=True,
        null=True,
    )
    category = models.ForeignKey(
        "categories.SubCategory",
        related_name="names",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return f"{self.name}"
