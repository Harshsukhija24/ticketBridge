from django.urls import path, include
from rest_framework import routers
from .views import EventViewset, UserRegisterViewset, UserLoginView,SupportViewset ,RequestViewset
router = routers.DefaultRouter()
router.register(r'event', EventViewset, basename='event')
router.register(r'user-register', UserRegisterViewset, basename='user-register')
router.register(r'Support',SupportViewset , basename='support')
router.register(r'Request',RequestViewset,basename='Request')
from . import views


urlpatterns = [
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('', include(router.urls)), 
    path('session-data/', views.session_data_view, name='session_data'),
]
 