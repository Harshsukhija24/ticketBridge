# Generated by Django 5.0.7 on 2024-08-29 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0007_remove_event_ticketprice_event_adultticketprice_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.CharField(max_length=50),
        ),
    ]