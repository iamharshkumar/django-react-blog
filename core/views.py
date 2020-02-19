from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import PostSerializer, CategorySerializer
from .models import Post
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from django.db.models import Count, Q


# Create your views here.
class SearchView(APIView):
    serializer_class = PostSerializer

    def get(self, request):
        queryset = Post.objects.all()
        query = request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(title__icontains=query) |
                Q(overview__icontains=query)
            )
        serializer = self.serializer_class(queryset, many=True).data
        return Response({"data": serializer}, status=HTTP_200_OK)


class IndexView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.filter(featured=True)


class CategoryView(APIView):
    def get(self, request):
        category_count = Post.objects.values('categories__title').annotate(Count('categories'))
        return Response({"data": category_count}, status=HTTP_200_OK)


class LatestBlogView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-timestamp')[0:3]


class PostView(APIView):
    serializer_class = PostSerializer

    def get(self, request):
        posts = Post.objects.all()
        page = request.GET.get('page')
        paginator = Paginator(posts, 4)
        try:
            paginated_queryset = paginator.page(page)
        except PageNotAnInteger:
            paginated_queryset = paginator.page(1)
        except EmptyPage:
            paginated_queryset = paginator.page(paginator.num_pages)

        serializer = self.serializer_class(paginated_queryset, many=True).data
        return Response({"data": serializer}, status=HTTP_200_OK)


class PostDetailView(RetrieveAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
