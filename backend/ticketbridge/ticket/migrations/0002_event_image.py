# Generated by Django 5.0.7 on 2024-07-19 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.ImageField(default='default.jpg', upload_to='eventimage/'),
        ),
    ]
