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
urlpatterns = [
    path('admin/', admin.site.urls),  # Admin interface
    path('Ticket/', include(router.urls)),  # API endpoints for viewsets
    path('Ticket/login/', views.UserLoginView.as_view(), name='user-login'),
    path('Ticket/logout/', views.LogoutView.as_view(), name='logout'),

    path('Ticket/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('Ticket/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('Ticket/auth/', include('ticket.url')),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
 