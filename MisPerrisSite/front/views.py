from django.conf import settings
from django.shortcuts import redirect, render, render_to_response, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader, RequestContext

# Create your views here.


def irInicio(request):
    miPlantilla = loader.get_template("inicio/index.html")
    return HttpResponse(miPlantilla.render({}, request))


def iniciarSesion(request):
    miPlantilla = loader.get_template("inicio/index.html")
    return HttpResponse(miPlantilla.render({}, request))


def cerrarSesion(request):
    miPlantilla = loader.get_template("inicio/index.html")
    return HttpResponse(miPlantilla.render({}, request))


def registrarPersona(request):
    miPlantilla = loader.get_template("inicio/index.html")
    return HttpResponse(miPlantilla.render({}, request))