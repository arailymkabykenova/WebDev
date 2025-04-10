from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from .models import Company,Vacancy,Jobs
from django.views.decorators.http import require_POST

def company_list(request):
    companies=Company.objects.all()
    data={'companies':list(companies.values())}
    return JsonResponse(data)

def company_by_id(request,company_id):
    company=get_object_or_404(Company,id=company_id)
    data={
        'company':{
            'id':company.id,
            'name':company.name,
            'description':company.description,
            'city':company.city,
            'address':company.address
        }
    }
    return JsonResponse(data)

def vacancies_by_company(request,company_id):
    company=get_object_or_404(Company,id=company_id)
    vacancy=company.vacancies.all()
    data={'vacancy':list(vacancy.values())}
    return JsonResponse(data)

def vacancy_list(request):
    vacancies=Vacancy.objects.all()
    data={'vacancies':list(vacancies.values())}
    return JsonResponse(data)

def vacancy_by_id(request,vacancy_id):
    vacancy=get_object_or_404(Vacancy,id=vacancy_id)
    data={
        'vacancy':{
            'id':vacancy.id,
            'name':vacancy.name,
            'description':vacancy.description,
            'salary':vacancy.salary,
            'company': {
                'id': vacancy.company.id,
                'name': vacancy.company.name
            }
        }
    }
    return JsonResponse(data)

def sort_vacancy_decreasing(request):
    vacancies=Vacancy.objects.order_by('-salary')[:10]
    data={'vacancies':list(vacancies.values())}
    return JsonResponse(data)

