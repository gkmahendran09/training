from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.db import connection
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError

@login_required(login_url='/loginn')
def home(request):
    return render(request, 'signup.html')

def signup(request):
    if request.method == 'POST':
        fnm=request.POST.get('fnm')
        emailid=request.POST.get('emailid')
        pwd=request.POST.get('pwd')
        print(fnm,emailid,pwd)
        my_user=User.objects.create_user(fnm,emailid,pwd)
        my_user.save()
        return redirect('/loginn')
    
    return render(request, 'signup.html')
        
def loginn(request):
    if request.method == 'POST':
        fnm = request.POST.get('fnm')
        pwd = request.POST.get('pwd')
        print(fnm, pwd)
        
        try:
            user = authenticate(username=fnm, password=pwd)
            if user is not None:
                login(request, user)
                return redirect('/todopage')
            else:
                return redirect('/loginn')
        except IntegrityError as e:
            # Handle database integrity errors (e.g., duplicate entries)
            print("Error:", e)
            return redirect('/loginn')
        except Exception as e:
            # Handle other exceptions
            print("Error:", e)
            return redirect('/loginn')
    
    return render(request, 'loginn.html')

@login_required(login_url='/loginn')
def todo(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        print(title)
        
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO todo_todo (title, user_id) VALUES (%s, %s)", [title, request.user.id])
        
        res = None
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM todo_todo WHERE user_id = %s ORDER BY date DESC", [request.user.id])
            res = cursor.fetchall()
        
        return redirect('/todopage', {'res': res})
    
    res = None
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM todo_todo WHERE user_id = %s ORDER BY date DESC", [request.user.id])
        res = cursor.fetchall()
    
    return render(request, 'todo.html', {'res': res})

def delete_todo(request, srno):
    print(srno)
    
    with connection.cursor() as cursor:
        cursor.execute("DELETE FROM todo_todo WHERE srno = %s", [srno])
    
    return redirect('/todopage')

@login_required(login_url='/loginn')
def edit_todo(request, srno):
    if request.method == 'POST':
        title = request.POST.get('title')
        print(title)
        
        with connection.cursor() as cursor:
            cursor.execute("UPDATE todo_todo SET title = %s WHERE srno = %s", [title, srno])
        
        return redirect('/todopage')

    obj = None
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM todo_todo WHERE srno = %s", [srno])
        obj = cursor.fetchone()
    
    return render(request, 'edit_todo.html', {'obj': obj})

def signout(request):
    logout(request)
    return redirect('/loginn')
