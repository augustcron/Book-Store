from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Author(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    photo = models.ImageField(upload_to='authors')

    def __str__(self):
        return self.name
    


class Publisher(models.Model):
    pass


class BookSeries(models.Model):
    pass


class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ManyToManyField(Author)
    rating = models.FloatField(
        default=5.0,
    )
    annotation = models.CharField(max_length=255)
    publisher = models.ForeignKey(
        Publisher,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    book_series = models.ForeignKey(
        BookSeries,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    year_published = models.IntegerField()
    cover = models.ImageField(
        upload_to='books',
    )
    price = models.IntegerField()

    def __str__(self):
        return self.title
    


class Review(models.Model):
    book = models.ForeignKey(
        Book,
        on_delete=models.CASCADE
    )
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    text = models.TextField()
    pub_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Ревью {self.author} на {self.book}'
    
