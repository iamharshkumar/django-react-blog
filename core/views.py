from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import PostSerializer
from .models import Post


# Create your views here.
class IndexView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.filter(featured=True)


class LatestBlogView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-timestamp')[0:3]
