from django.db import models

class MemberRequest(models.Model):
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected')
    ]
    office = models.ForeignKey('management.Office', on_delete=models.CASCADE, related_name='member_requests')
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
    
    class Meta:
        db_table = 'member_requests'
        ordering = ['-created_at']

    def approve(self):
        self.status = 'approved'
        self.save()
    
    def reject(self):
        self.status = 'rejected'
        self.save()