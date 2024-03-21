from django.db import models

class Quote(models.Model):
    quote = models.CharField(max_length=255, unique=True)