from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^iniciarSesion$', views.iniciarSesion, name='iniciarSesion' ),
    url(r'^cerrarSesion$', views.cerrarSesion, name='cerrarSesion' ),
]