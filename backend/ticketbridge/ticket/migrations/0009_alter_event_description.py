# Generated by Django 5.0.7 on 2024-08-30 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0008_alter_event_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.CharField(max_length=50000),
        ),
    ]
