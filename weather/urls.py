from django.urls import path
from . import views

#Url configurations
urlpatterns = [
    path('hello/', views.say_hello),
    path('',views.get_weather)
]