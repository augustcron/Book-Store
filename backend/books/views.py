from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .models import Book, Author, Review
from .serializers import BookSerializer, AuthorSerializer, ReviewSerializer
from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly



class BookViewSet(viewsets.ModelViewSet):
	serializer_class = BookSerializer

	def get_queryset(self):
		pk = self.kwargs.get('pk')
		if not pk:
			return Book.objects.all()
		return Book.objects.filter(pk=pk)			


class AuthorViewSet(viewsets.ModelViewSet):
	serializer_class = AuthorSerializer

	def get_queryset(self):
		pk = self.kwargs.get('pk')
		if not pk:
			return Author.objects.all()[:3]
		return Author.objects.filter(pk=pk)
