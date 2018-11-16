from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.irInicio, name='irInicio' ),
    url(r'^iniciarSesion$', views.iniciarSesion, name='iniciarSesion' ),
    url(r'^cerrarSesion$', views.cerrarSesion, name='cerrarSesion' ),

    url(r'^registrarPersona$', views.registrarPersona, name='registrarPersona' ),
]