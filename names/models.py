from django.db import models


class Name(models.Model):
    class GenderChoices(models.TextChoices):
        MAN = ("man", "man")
        WOMAN = ("woman", "woman")

    gender = models.CharField(
        max_length=5,
        choices=GenderChoices.choices,
    )
    name = models.CharField(max_length=100)
    meaning = models.TextField()
    category = models.ForeignKey(
        "categories.SubCategory",
        related_name="names",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return f"{self.name}"
