from django.db import models

class Stock(models.Model):
  symbol = models.CharField(max_length=10)
  name = models.CharField(max_length=100)
  sector = models.CharField(max_length=100, blank=True)