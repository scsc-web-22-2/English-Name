# Generated by Django 4.1.3 on 2022-11-29 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("names", "0006_alter_name_category"),
    ]

    operations = [
        migrations.AlterField(
            model_name="name",
            name="gender",
            field=models.CharField(
                choices=[("man", "man"), ("woman", "woman"), ("etc", "etc")],
                max_length=5,
            ),
        ),
    ]