from django.core.management.base import BaseCommand

from books.models import Book
from books.management.commands._parser import data


class Command(BaseCommand):
	help = "add_data"

	def handle(self, *args, **options):
		for book in data:
			Book.objects.create(
				name=book[0],
				author=book[1],
				description=book[2],
			)