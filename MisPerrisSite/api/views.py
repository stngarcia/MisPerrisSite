from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import responses
from .models import Mascota
from .serializers import MascotaSerializer


# Create your views here.
class MascotaView(APIView):

    # Metodo para obtener las mascotas.
    def get(self, request):
        misMascotas = Mascota.objects.all()
        miSerializer = MascotaSerializer(misMascotas, many=True)
        return responses(miSerializer.data)
