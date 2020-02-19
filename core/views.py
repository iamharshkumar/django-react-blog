from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import PostSerializer
from .models import Post
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response


# Create your views here.
class IndexView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.filter(featured=True)


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
