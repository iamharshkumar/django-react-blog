from django.urls import path
from .views import IndexView, LatestBlogView, PostView, PostDetailView

urlpatterns = [
    path('index/', IndexView.as_view(), name='index'),
    path('latest/', LatestBlogView.as_view(), name='latest'),
    path('posts/', PostView.as_view(), name='posts'),
    path('posts/<pk>/', PostDetailView.as_view(), name='post-detail'),
]
