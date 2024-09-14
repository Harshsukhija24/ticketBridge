from django.db import models

# Create your models here.

class Event(models.Model):
    Eventname = models.CharField(max_length=50)
    Date = models.DateField()
    Location = models.CharField(max_length=100)
    performer = models.CharField(max_length=50)
    AdultTicketPrice = models.DecimalField(max_digits=10, decimal_places=2)
    ChildTicketPrice = models.DecimalField(max_digits=10, decimal_places=2)
    FamilyTicketPrice = models.DecimalField(max_digits=10, decimal_places=2)
    EventTime = models.TimeField()
    ContactInfo = models.CharField(max_length=100)
    description = models.CharField(max_length=50000)

    image = models.ImageField(upload_to='eventimage/', blank=True, null=True)

    class Meta:
        unique_together = ('Date', 'EventTime', 'Location') 

     
 
class Support(models.Model):
    Name=models.CharField(max_length=60,null=False,unique=False)
    Email=models.CharField(max_length=60,null=False, unique=True)
    Message=models.CharField(max_length=500,null=False,unique=False)

class Request(models.Model):
    First_name=models.CharField(max_length=50,null=False,unique=False)
    Last_name=models.CharField(max_length=50,null=False,unique=False)
    Email=models.CharField(max_length=50,null=False,unique=False)
    Contact=models.DecimalField(max_digits=10,null=False,unique=False,decimal_places=0)
    company=models.CharField(max_length=50,null=False,unique=False)




