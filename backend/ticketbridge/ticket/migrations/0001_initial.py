# Generated by Django 5.0.7 on 2024-07-19 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Eventname', models.CharField(max_length=50)),
                ('Date', models.DateField()),
                ('Location', models.CharField(max_length=100)),
                ('performer', models.CharField(max_length=50)),
                ('TicketPrice', models.DecimalField(decimal_places=2, max_digits=10)),
                ('EventTime', models.TimeField()),
                ('ContactInfo', models.CharField(max_length=100)),
            ],
            options={
                'unique_together': {('Date', 'EventTime', 'Location')},
            },
        ),
    ]
