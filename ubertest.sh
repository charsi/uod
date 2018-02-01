#!/bin/bash

curl -H 'Authorization: Token ' \
     -H 'Accept-Language: en_US' \
     -H 'Content-Type: application/json' \
     'https://api.uber.com/v1.2/products?latitude=41.9102415&longitude=12.3959149'
