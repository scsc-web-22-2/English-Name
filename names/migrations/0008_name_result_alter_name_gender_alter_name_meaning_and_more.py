# Generated by Django 4.1.3 on 2022-11-29 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("names", "0007_alter_name_gender"),
    ]

    operations = [
        migrations.AddField(
            model_name="name",
            name="result",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="name",
            name="gender",
            field=models.CharField(
                blank=True,
                choices=[("man", "man"), ("woman", "woman"), ("etc", "etc")],
                max_length=5,
                null=True,
            ),
        ),
        migrations.AlterField(
            model_name="name",
            name="meaning",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="name",
            name="name",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
