# Generated by Django 4.1.3 on 2022-11-18 01:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="maincategory",
            old_name="kind",
            new_name="main",
        ),
        migrations.RenameField(
            model_name="subcategory",
            old_name="kind",
            new_name="sub",
        ),
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
