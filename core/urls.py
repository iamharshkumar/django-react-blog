from django.urls import path
from .views import IndexView, LatestBlogView, PostView, PostDetailView, CategoryView, SearchView

urlpatterns = [
    path('index/', IndexView.as_view(), name='index'),
    path('latest/', LatestBlogView.as_view(), name='latest'),
    path('posts/', PostView.as_view(), name='posts'),
    path('posts/<pk>/', PostDetailView.as_view(), name='post-detail'),
    path('category/', CategoryView.as_view(), name='category'),
    path('search/', SearchView.as_view(), name='category'),
]
