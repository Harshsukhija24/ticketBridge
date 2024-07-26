# Generated by Django 5.0.7 on 2024-07-24 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0003_support'),
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('First_name', models.CharField(max_length=50)),
                ('Last_name', models.CharField(max_length=50)),
                ('Email', models.CharField(max_length=50)),
                ('Contact', models.DecimalField(decimal_places=0, max_digits=10)),
                ('company', models.CharField(max_length=50)),
            ],
        ),
    ]
