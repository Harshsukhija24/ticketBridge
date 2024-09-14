# urls.py

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from ticket import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Create a router and register viewsets
router = routers.DefaultRouter()
router.register(r'Event', views.EventViewset, basename='event')
router.register(r'Register', views.UserRegisterViewset, basename='user-register')
router.register(r'Support', views.SupportViewset, basename='support')
router.register(r'Request', views.RequestViewset, basename='request')

# Define URL patterns

# Main urls.py
urlpatterns = [
    path('admin/', admin.site.urls),
    path('Ticket/', include('ticket.url')),  # Ensure 'ticket.urls' is correctly included
    path('Ticket/login/', views.UserLoginView.as_view(), name='user-login'),
    path('Ticket/jwt-login/', views.UserLoginView.as_view(), name='jwt-login'),

    path('Ticket/logout/', views.LogoutView.as_view(), name='logout'),
    path('Ticket/session/', views.session_data_view, name='session_data'),  # Correct URL pattern
    path('Ticket/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('Ticket/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
