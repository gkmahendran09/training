from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer


# Django REST Framework views
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# Django views
def index(request):
    return render(request, 'todoapp/index.html')
