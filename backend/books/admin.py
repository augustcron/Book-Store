from django.contrib import admin

from .models import Book, Author, Publisher, BookSeries, Review


admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Publisher)
admin.site.register(BookSeries)
admin.site.register(Review)