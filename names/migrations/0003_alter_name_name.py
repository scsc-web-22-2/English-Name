# Generated by Django 4.1.2 on 2022-11-03 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("names", "0002_alter_name_gender_alter_name_name"),
    ]

    operations = [
        migrations.AlterField(
            model_name="name",
            name="name",
            field=models.CharField(max_length=100),
        ),
    ]