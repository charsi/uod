#!/usr/bin/env python

import requests
from BeautifulSoup import BeautifulSoup

url = "https://www.uber.com/en-GB/cities/"
response = requests.get(url)
# parse html
page = str(BeautifulSoup(response.content))


def getURL(page):
    """

    :param page: html of web page (here: Python home page) 
    :return: urls in that page 
    """
    start_link = page.find("href=\"/en-GB/cities")
    if start_link == -1:
        return None, 0
    start_quote = page.find('"', start_link)
    end_quote = page.find('"', start_quote + 1)
    url = page[start_quote + 1: end_quote]
    return url, end_quote

while True:
    url, n = getURL(page)
    page = page[n:]
    if url:
        print "https://www.uber.com"+url
    else:
        break
