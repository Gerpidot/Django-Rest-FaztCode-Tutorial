from django.db import models

#Una vez que se crea una tabla, hay que crear la table en codigo ORM
### comando python3 manage.py makemigrations [opcional nombre de la app/tabla a crear] 

#Una vez que se crea una tabla hay que crear la table en la base de datos
### comando python3 manage.py migrate [opcional nombre de la app/tabla a crear] 

##ORM es como será la config de las columnas luego
class Task(models.Model):
    title=models.CharField(max_length=200) #son caracteres
    description=models.TextField(blank=True) #Por defecto es vacio
    done=models.BooleanField(default=False) #Por defecto es false
    
    #Este metodo es para mostrar el titulo en el admin, cuando se accede a la lista de Task
    def __str__(self):
        return self.title 