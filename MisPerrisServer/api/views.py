from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .funciones import getMascotasSerializer, getPersonasSerializer, getAdopcionesSerializer


# Vista para mostrar las mascotas.
class MascotaView(APIView):

    # Metodo para obtener las mascotas.
    def get(self, request):
        return Response(getMascotasSerializer(None))


# Vista para mostrar las personas.
class PersonaView(APIView):

    # Obteniendo todas las personas registradas.
    def get(self, request):
        return Response(getPersonasSerializer(None))


# Vista para las adopciones.
class AdopcionView(APIView):

    # Obtener las adopciones.
    def get(self, request):
        return Response(getAdopcionesSerializer(None))

