# Generated by Django 4.1.2 on 2022-11-03 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("names", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="name",
            name="gender",
            field=models.CharField(
                choices=[("man", "man"), ("woman", "woman")], max_length=5
            ),
        ),
        migrations.AlterField(
            model_name="name",
            name="name",
            field=models.CharField(max_length=30),
        ),
    ]
