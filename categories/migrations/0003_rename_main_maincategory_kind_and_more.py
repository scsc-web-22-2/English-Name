# Generated by Django 4.1.3 on 2022-11-18 01:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0002_rename_kind_maincategory_main_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="maincategory",
            old_name="main",
            new_name="kind",
        ),
        migrations.RenameField(
            model_name="subcategory",
            old_name="sub",
            new_name="kind",
        ),
        migrations.AlterField(
            model_name="subcategory",
            name="main",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="categories.maincategory",
            ),
        ),
    ]