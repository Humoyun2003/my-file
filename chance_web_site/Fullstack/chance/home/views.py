from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import Appointment_Form
from .models import *

# Create your views here.
def index(request):
    qabul_form = Appointment_Form()
    if request.method == 'POST':
        name = request.POST.get('name', None)
        email = request.POST.get('name', None)
        phone = request.POST.get('name', None)
        qabul_form = Appointment_Form(request.POST)
        messages.success(request, "Xurmatli sayt adminstratori sizga yangi xabar keldi.")
        if qabul_form.is_valid():
            qabul_form.save()
            # Qabul.objects.create()
        print(request)

    return render(request, 'index.html', {'form': qabul_form})