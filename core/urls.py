from django.urls import path
from .views import IndexView, LatestBlogView

urlpatterns = [
    path('index/', IndexView.as_view(), name='index'),
    path('latest/', LatestBlogView.as_view(), name='latest'),
]
