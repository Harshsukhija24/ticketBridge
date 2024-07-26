# urls.py

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from ticket import views

# Create a router and register viewsets
router = routers.DefaultRouter()
router.register(r'Event', views.EventViewset, basename='event')
router.register(r'Register', views.UserRegisterViewset, basename='user-register')
router.register(r'Support', views.SupportViewset, basename='support')
router.register(r'Request', views.RequestViewset, basename='request')

# Define URL patterns
urlpatterns = [
    path('admin/', admin.site.urls),  # Admin interface
    path('Ticket/', include(router.urls)),  # API endpoints for viewsets
    path('Ticket/login/', views.UserLoginView.as_view(), name='user-login'),
    path('Ticket/auth/', include('ticket.url')),  # Custom routes for login and session data  # Custom login view
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Serve media files during development
 