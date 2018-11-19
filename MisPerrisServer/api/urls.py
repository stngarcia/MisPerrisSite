from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^mascotas/$', views.MascotaView.as_view(), name='vistaMascotas'),
    url(r'^personas/$', views.PersonaView.as_view(), name='vistaPersonas'),
    url(r'^adopciones/$', views.AdopcionView.as_view(), name='vistaAdopciones'),

]
