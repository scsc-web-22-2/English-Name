# Generated by Django 4.1.3 on 2022-11-18 02:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0004_rename_kind_maincategory_main"),
    ]

    operations = [
        migrations.AlterField(
            model_name="subcategory",
            name="main",
            field=models.ForeignKey(
                blank=True,
                db_column="main",
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="categories.maincategory",
            ),
        ),
    ]