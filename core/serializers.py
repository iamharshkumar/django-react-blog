from rest_framework import serializers
from .models import Post, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title')


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    categories = serializers.SerializerMethodField()
    user_profile = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            'id', 'title', 'overview', 'timestamp',
            'comment_count', 'author', 'thumbnail',
            'categories', 'featured', 'user_profile')

    def get_author(self, obj):
        return obj.author.user.username

    def get_categories(self, obj):
        c_qs = Category.objects.filter(post=obj.id)
        category = CategorySerializer(c_qs, many=True).data
        return category

    def get_user_profile(self, obj):
        return str(obj.author.profile_picture)
