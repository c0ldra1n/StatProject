
import sys
import lxml.html
# from urllib.request import urlopen
import urllib
import time
import requests

def get_page_content(url, option):
	headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
	response = requests.Session().get(url, headers=headers)
	doc = lxml.html.fromstring(response.content)
	page_content = ''

	if option == "issues":
		for idx, val in enumerate(doc.cssselect('.reponav > span:nth-child(2) .Counter')):
			page_content += url + " " + val.text_content().replace(",", "").replace("\n", "") + "\n"
	if option == "commits":
		for idx, val in enumerate(doc.cssselect('.commits span')):
			page_content += url + " " + val.text_content().replace(" ", "").replace("\n", "").replace(",","") + "\n"

	return page_content

save_path = sys.argv[2]

content = get_page_content(sys.argv[1], sys.argv[2])

if save_path != "":
	save_file = open(save_path, "a+")
	save_file.write(content)
