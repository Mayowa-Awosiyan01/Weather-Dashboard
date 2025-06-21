from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
#A request handler

def say_hello(request):
    return render(request,"hello.html",{'name': "Tobi","age": 24})

def get_weather(request):

    
    return None