# Generated by Django 4.1.3 on 2022-11-18 03:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0007_rename_main_maincategory_title_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="subcategory",
            name="main",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="sub",
                to="categories.maincategory",
            ),
        ),
    ]
