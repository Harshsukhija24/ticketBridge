from rest_framework import serializers
from .models import Event , Support ,Request
from django.contrib.auth.models import User
from django.contrib.auth import authenticate



class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'Eventname', 'Date', 'Location', 'performer', 'AdultTicketPrice','ChildTicketPrice','FamilyTicketPrice', 'EventTime', 'ContactInfo','description', 'image')

 
class SupportSerailizer(serializers.ModelSerializer):
    class Meta:
        model=Support
        fields=('id','Name','Email','Message')


class RequestSerailizer(serializers.ModelSerializer):
    class Meta:
        model=Request
        fields=('id','First_name','Last_name','Email','Contact','company')     



class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        ) 
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        user = authenticate(**attrs)
        if user is None:
            raise serializers.ValidationError("Invalid username or password.")
        return user
