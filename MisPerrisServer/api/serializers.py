from rest_framework import serializers
from .models import Mascota, Persona, Adopcion


# Serializador para el modelo Mascota.
class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = ('id', 'nombre', 'raza', 'estado', 'descripcion')


# Serializador para el modelo Persona.
class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('__all__')


# Serializador para las adopciones.
class AdopcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adopcion
        fields = ('__all__')
