# filters.py
import django_filters
from .models import Event

class EventFilter(django_filters.FilterSet):
    Eventname = django_filters.CharFilter(lookup_expr='icontains')
    Date = django_filters.DateFilter(lookup_expr='exact')
    Location = django_filters.CharFilter(lookup_expr='icontains')
    performer = django_filters.CharFilter(lookup_expr='icontains')
    TicketPrice_min = django_filters.NumberFilter(field_name='TicketPrice', lookup_expr='gte')
    TicketPrice_max = django_filters.NumberFilter(field_name='TicketPrice', lookup_expr='lte')
    EventTime = django_filters.TimeFilter(lookup_expr='exact')

    class Meta:
        model = Event
        fields = ['Eventname', 'Date', 'Location', 'performer', 'TicketPrice_min', 'TicketPrice_max', 'EventTime']



 