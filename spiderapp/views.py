from django.shortcuts import render

# Create your views here.

def login(request):
    context = {'greeting': 'Welcome to spider'}
    return render(request, 'login.html')


def page(request):
    context = {'greeting': 'Welcome to spider'}
    return render(request, 'pages.html')