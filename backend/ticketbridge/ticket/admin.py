from django.contrib import admin
from .models import Event ,Support,Request 
# Register your models here.



@admin.register(Event)

class EventAdmin(admin.ModelAdmin):
        fields=('Eventname','Date','Location','performer','TicketPrice','EventTime','ContactInfo','image')
        list_display=('id','Eventname','Date','Location','performer','TicketPrice','EventTime','ContactInfo','image')
    

@admin.register(Support)

class SupportAdmin(admin.ModelAdmin):
        fields=('Name','Email','Message')
        list_display=('id','Name','Email','Message')



@admin.register(Request)


class RequestAdmin(admin.ModelAdmin):
        fields=('First_name','Last_name','Email','Contact','company')





