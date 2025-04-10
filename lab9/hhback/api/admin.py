from django.contrib import admin
from .models import Company, Jobs,Vacancy
admin.site.register(Company)
admin.site.register(Vacancy)
admin.site.register(Jobs)