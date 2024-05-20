from django.contrib import admin
from django.urls import path, include
from todoapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/tasks/', views.TodoListCreate.as_view(), name='task-list-create'),
    path('api/tasks/<int:pk>/', views.TodoRetrieveUpdateDestroy.as_view(), name='task-detail'),
]
