from django.urls import path
from .views import index, TodoListCreate, TodoRetrieveUpdateDestroy

urlpatterns = [
    # Django views
    path('', index, name='index'),

    # Django REST Framework views
    path('api/tasks/', TodoListCreate.as_view(), name='task-list-create'),
    path('api/tasks/<int:pk>/', TodoRetrieveUpdateDestroy.as_view(), name='task-detail'),
]
