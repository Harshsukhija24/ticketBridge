# Generated by Django 5.0.7 on 2024-08-29 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0006_alter_event_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='TicketPrice',
        ),
        migrations.AddField(
            model_name='event',
            name='AdultTicketPrice',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='ChildTicketPrice',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='FamilyTicketPrice',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='description',
            field=models.CharField(default=0.0, max_length=5000),
            preserve_default=False,
        ),
    ]