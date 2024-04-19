from bs4 import BeautifulSoup
import requests


data = []
urls =[
	'https://www.bookvoed.ru/book?id=9234845',
	'https://www.bookvoed.ru/book?id=10498549',
	'https://www.bookvoed.ru/book?id=11759756',
	'https://www.bookvoed.ru/book?id=10498551',

]
for url in urls:
	html = requests.get(url).text


	soup = BeautifulSoup(html, "html.parser")

	name = (soup.find_all('h1', class_='ZG'))[0].text
	author = soup.find_all('span', class_='aH')[0].text
	description = soup.find_all('div', class_='SE')[0].text

	data.append([name, author, description])

print(data)
