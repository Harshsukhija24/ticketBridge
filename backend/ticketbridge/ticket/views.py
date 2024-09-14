from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from rest_framework import viewsets, generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django_filters.rest_framework import DjangoFilterBackend
from .models import Event, Support, Request
from .serielizers import (
    EventSerializer,
    UserRegisterSerializer,
    UserLoginSerializer,
    SupportSerailizer,
    RequestSerailizer
)
from .Filter import EventFilter
from django.contrib.auth.models import User
import logging

logger = logging.getLogger(__name__)

# ViewSets for CRUD operations
class EventViewset(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = EventFilter

    def create(self, request, *args, **kwargs):
        logger.info(f"Request data: {request.data}")
        return super().create(request, *args, **kwargs)

class SupportViewset(viewsets.ModelViewSet):
    queryset = Support.objects.all()
    serializer_class = SupportSerailizer
    permission_classes = [AllowAny]

class RequestViewset(viewsets.ModelViewSet):
    queryset = Request.objects.all()
    serializer_class = RequestSerailizer
    permission_classes = [AllowAny]

class UserRegisterViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]

# JWT-based login view
class UserLoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })

# Session-based login view
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            request.session['username'] = user.username
            request.session['email'] = user.email
            request.session['first_name'] = user.first_name
            request.session['last_name'] = user.last_name
            logger.info(f"User {user.username} logged in successfully.")
            return JsonResponse({'message': 'Logged in successfully'})
        else:
            logger.warning("Invalid login attempt.")
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)

# Session data view for authenticated users
@login_required
def session_data_view(request):
    if request.user.is_authenticated:
        logger.info(f"Authenticated user: {request.user.username}")
        user_info = {
            'username': request.session.get('username'),
            'email': request.session.get('email'),
            'first_name': request.session.get('first_name'),
            'last_name': request.session.get('last_name'),
        }
        return JsonResponse(user_info)
    else:
        logger.warning("User not authenticated")
        return JsonResponse({'error': 'User not authenticated'}, status=401)

# Logout view for JWT-based authentication
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            request.user.auth_token.delete()
            logger.info(f"User {request.user.username} logged out successfully.")
            return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Error during logout: {e}")
            return Response({"error": "Error during logout."}, status=status.HTTP_400_BAD_REQUEST)
