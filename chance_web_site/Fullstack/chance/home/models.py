from django.db import models


class Appointment(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=50)

    def __str__(self):
        return '%s - %s - %s' % (self.name, self.email, self.phone)

class Footer_Appointment(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    message = models.CharField(max_length=50)

    def __str__(self):
        return '%s - %s - %s' % (self.name, self.email, self.message)