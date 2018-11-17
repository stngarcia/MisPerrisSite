from django.conf import settings
from django.shortcuts import redirect, render, render_to_response, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader, RequestContext
from .forms import IniciarSesionForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.


def iniciarSesion(request):
    form = IniciarSesionForm(request.POST or None)
    if form.is_valid():
        data = form.cleaned_data
        user = authenticate(
            username=data.get("username"), password=data.get("password"))
        if user is not None:
            login(request, user)
            return redirect('inicio')
    return render(request, "iniciarSesion.html", {'form': form})


# cerrarSesion:  Vista para cerrar la sesion.
# Retorna: Redirecciona a la pagina de inicio.
@login_required(login_url='iniciarSesion')
def cerrarSesion(request):
    logout(request)
    return redirect('/')
