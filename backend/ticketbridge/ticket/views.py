from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django_filters.rest_framework import DjangoFilterBackend
from .models import Event, Support, Request
from .serielizers import EventSerializer, UserRegisterSerializer, UserLoginSerializer, SupportSerailizer, RequestSerailizer
from .Filter import EventFilter
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


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
        response = super().create(request, *args, **kwargs)
        return response

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
            request.session['some_data'] = 'value'
            return JsonResponse({'message': 'Logged in successfully'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)

# Session data view for authenticated users
@method_decorator(login_required, name='dispatch')
def session_data_view(request):
    some_data = request.session.get('some_data', 'default_value')
    return JsonResponse({'some_data': some_data})


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Perform logout logic here
        # For example, delete the user's session or token
        request.user.auth_token.delete()
        return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)