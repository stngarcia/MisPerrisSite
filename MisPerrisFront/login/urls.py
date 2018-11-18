from django.urls import  include
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^iniciarSesion/$', views.iniciarSesion, name='iniciarSesion' ),
    url(r'^cerrarSesion/$', views.cerrarSesion, name='cerrarSesion' ),
    url(r'^denegarAcceso/$', views.denegarAcceso, name='denegarAcceso' ),
    url('social/', include('social_django.urls', namespace='social')),
]