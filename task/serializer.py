from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # fields= ('id,''title','description','done') #o se pueden elegir cuales
        model = Task
        fields = "__all__" #Todos los campos de la tabla
