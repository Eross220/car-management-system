# Generated by Django 2.0.5 on 2019-05-16 04:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0027_remove_car_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carimage',
            name='car',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='image', to='Car.Car'),
        ),
    ]