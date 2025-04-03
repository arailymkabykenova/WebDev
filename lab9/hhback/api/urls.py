from django.urls import path
from .import views

urlpatterns=[
    path("companies/",views.company_list,),
    path("companies/<int:company_id>",views.company_by_id),
    path("vacancies/",views.vacancy_list),
    path("vacancies/<int:vacancy_id>",views.vacancy_by_id),
    path("companies/<int:company_id>/vacancies",views.vacancies_by_company),
    path("vacancies/top-ten",views.sort_vacancy_decreasing),
]