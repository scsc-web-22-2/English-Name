# Generated by Django 4.1.3 on 2022-11-29 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0009_alter_subcategory_kind"),
    ]

    operations = [
        migrations.AlterField(
            model_name="maincategory",
            name="title",
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
