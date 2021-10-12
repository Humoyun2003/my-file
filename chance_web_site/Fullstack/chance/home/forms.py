from django.forms import ModelForm
from .models import Appointment


class Appointment_Form(ModelForm):
    class Meta:
        model = Appointment
        fields = '__all__'
