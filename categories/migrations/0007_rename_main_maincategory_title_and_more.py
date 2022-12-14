# Generated by Django 4.1.3 on 2022-11-18 03:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0006_alter_subcategory_main"),
    ]

    operations = [
        migrations.RenameField(
            model_name="maincategory",
            old_name="main",
            new_name="title",
        ),
        migrations.AlterField(
            model_name="subcategory",
            name="main",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="main",
                to="categories.maincategory",
            ),
        ),
    ]
