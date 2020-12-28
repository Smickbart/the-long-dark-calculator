from bs4 import BeautifulSoup
import requests
import json

url = "https://thelongdark.fandom.com/wiki/Decay"
response = requests.get(url)
html = response.content
scraped = BeautifulSoup(html, "html.parser")

table = scraped.tbody
rows = table.find_all("tr")
rows.pop(0)

foods = []

for food in rows:
    foodName = food.td.a["title"]
    inDecayRate = float(food.td.next_sibling.next_sibling.string.strip())
    outDecayRate = float(food.td.next_sibling.next_sibling.next_sibling.next_sibling.string.strip())
    dictionary = {"food": foodName, "indoors": inDecayRate, "outdoors": outDecayRate}
    foods.append(dictionary)

with open("foodDecay.json", "w") as outfile:
    json.dump(foods, outfile)
