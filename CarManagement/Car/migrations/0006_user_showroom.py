# Generated by Django 2.0.5 on 2019-05-03 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0005_auto_20190503_0903'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='showroom',
            field=models.ForeignKey(blank=True, default=-1, on_delete=django.db.models.deletion.CASCADE, to='Car.ShowRoom'),
            preserve_default=False,
        ),
    ]