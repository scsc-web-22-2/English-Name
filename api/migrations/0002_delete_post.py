# Generated by Django 4.1.2 on 2022-11-03 07:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Post",
        ),
    ]