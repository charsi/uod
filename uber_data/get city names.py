# coding=utf-8
import json


input_json = """
[{
		"id": 460,
		"slug": "abilene",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Abilene",
		"content": "Abilene"
	}, {
		"id": 196,
		"slug": "abu-dhabi",
		"region": "regions.middle-east",
		"country": {
			"name": "United Arab Emirates",
			"iso2": "AE"
		},
		"name": "Abu Dhabi",
		"content": "Abu Dhabi"
	}, {
		"id": 1081,
		"slug": "abuja",
		"region": "regions.africa",
		"country": {
			"name": "Nigeria",
			"iso2": "NG"
		},
		"name": "Abuja",
		"content": "Abuja"
	}, {
		"id": 1257,
		"slug": "accra",
		"region": "regions.africa",
		"country": {
			"name": "Ghana",
			"iso2": "GH"
		},
		"name": "Accra",
		"content": "Accra"
	}, {
		"id": 223,
		"slug": "adelaide",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Adelaide",
		"content": "Adelaide"
	}, {
		"id": 1149,
		"slug": "aguascalientes",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Aguascalientes",
		"content": "Aguascalientes"
	}, {
		"id": 475,
		"slug": "ahmedabad",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Ahmedabad",
		"content": "Ahmedabad"
	}, {
		"id": 747,
		"slug": "ajmer",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Ajmer",
		"content": "Ajmer"
	}, {
		"id": 306,
		"slug": "akron",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Akron",
		"content": "Akron"
	}, {
		"id": 185,
		"slug": "albuquerque",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Albuquerque",
		"content": "Albuquerque"
	}, {
		"id": 1007,
		"slug": "alexandria",
		"region": "regions.africa",
		"country": {
			"name": "Egypt",
			"iso2": "EG"
		},
		"name": "Alexandria",
		"content": "Alexandria"
	}, {
		"id": 1159,
		"slug": "algarve",
		"region": "regions.europe",
		"country": {
			"name": "Portugal",
			"iso2": "PT"
		},
		"name": "Algarve",
		"content": "Algarve"
	}, {
		"id": 1259,
		"slug": "almaty",
		"region": "regions.middle-east",
		"country": {
			"name": "Kazakhstan",
			"iso2": "KZ"
		},
		"name": "Almaty",
		"content": "Almaty"
	}, {
		"id": 256,
		"slug": "amarillo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Amarillo",
		"content": "Amarillo"
	}, {
		"id": 735,
		"slug": "ames",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Ames",
		"content": "Ames"
	}, {
		"id": 623,
		"slug": "amman",
		"region": "regions.middle-east",
		"country": {
			"name": "Jordan",
			"iso2": "JO"
		},
		"name": "Amman",
		"content": "Amman"
	}, {
		"id": 34,
		"slug": "amsterdam",
		"region": "regions.europe",
		"country": {
			"name": "Netherlands",
			"iso2": "NL"
		},
		"name": "Amsterdam",
		"content": "Amsterdam"
	}, {
		"id": 1394,
		"slug": "anapolis",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Anapolis",
		"content": "Anapolis"
	}, {
		"id": 237,
		"slug": "ann-arbor",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Ann Arbor",
		"content": "Ann Arbor"
	}, {
		"id": 1313,
		"slug": "aracaju",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Aracaju",
		"content": "Aracaju"
	}, {
		"id": 1409,
		"slug": "arequipa",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Peru",
			"iso2": "PE"
		},
		"name": "Arequipa",
		"content": "Arequipa"
	}, {
		"id": 1069,
		"slug": "armenia",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Armenia",
		"content": "Armenia"
	}, {
		"id": 345,
		"slug": "asheville-nc",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Asheville, NC",
		"content": "Asheville, NC"
	}, {
		"id": 1303,
		"slug": "astana",
		"region": "regions.middle-east",
		"country": {
			"name": "Kazakhstan",
			"iso2": "KZ"
		},
		"name": "Astana",
		"content": "Astana"
	}, {
		"id": 280,
		"slug": "athens",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Athens",
		"content": "Athens"
	}, {
		"id": 539,
		"slug": "athens-gr",
		"region": "regions.europe",
		"country": {
			"name": "Greece",
			"iso2": "GR"
		},
		"name": "Athens, GR",
		"content": "Athens, GR"
	}, {
		"id": 23,
		"slug": "atlanta",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Atlanta",
		"content": "Atlanta"
	}, {
		"id": 131,
		"slug": "auckland",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "New Zealand",
			"iso2": "NZ"
		},
		"name": "Auckland",
		"content": "Auckland"
	}, {
		"id": 323,
		"slug": "augusta",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Augusta",
		"content": "Augusta"
	}, {
		"id": 4,
		"slug": "austin",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Austin",
		"content": "Austin"
	}, {
		"id": 220,
		"slug": "bakersfield",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Bakersfield",
		"content": "Bakersfield"
	}, {
		"id": 631,
		"slug": "baku",
		"region": "regions.middle-east",
		"country": {
			"name": "Azerbaijan",
			"iso2": "AZ"
		},
		"name": "Baku",
		"content": "Baku"
	}, {
		"id": 582,
		"slug": "bali",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Indonesia",
			"iso2": "ID"
		},
		"name": "Bali",
		"content": "Bali"
	}, {
		"id": 35,
		"slug": "baltimore",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Baltimore",
		"content": "Baltimore"
	}, {
		"id": 737,
		"slug": "bandung",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Indonesia",
			"iso2": "ID"
		},
		"name": "Bandung",
		"content": "Bandung"
	}, {
		"id": 130,
		"slug": "bangalore",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Bangalore",
		"content": "Bangalore"
	}, {
		"id": 147,
		"slug": "bangkok",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Thailand",
			"iso2": "TH"
		},
		"name": "Bangkok",
		"content": "Bangkok"
	}, {
		"id": 609,
		"slug": "barranquilla",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Barranquilla",
		"content": "Barranquilla"
	}, {
		"id": 601,
		"slug": "basel",
		"region": "regions.europe",
		"country": {
			"name": "Switzerland",
			"iso2": "CH"
		},
		"name": "Basel",
		"content": "Basel"
	}, {
		"id": 274,
		"slug": "baton-rouge",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Baton Rouge",
		"content": "Baton Rouge"
	}, {
		"id": 622,
		"slug": "beaumont",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Beaumont",
		"content": "Beaumont"
	}, {
		"id": 346,
		"slug": "beirut",
		"region": "regions.middle-east",
		"country": {
			"name": "Lebanon",
			"iso2": "LB"
		},
		"name": "Beirut",
		"content": "Beirut"
	}, {
		"id": 1269,
		"slug": "belem",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Belem",
		"content": "Belem"
	}, {
		"id": 615,
		"slug": "belfast",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Belfast",
		"content": "Belfast"
	}, {
		"id": 432,
		"slug": "bellingham",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Bellingham",
		"content": "Bellingham"
	}, {
		"id": 493,
		"slug": "belo-horizonte",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Belo Horizonte",
		"content": "Belo Horizonte"
	}, {
		"id": 38,
		"slug": "berlin",
		"region": "regions.europe",
		"country": {
			"name": "Germany",
			"iso2": "DE"
		},
		"name": "Berlin",
		"content": "Berlin"
	}, {
		"id": 957,
		"slug": "bhopal",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Bhopal",
		"content": "Bhopal"
	}, {
		"id": 773,
		"slug": "bhubaneswar",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Bhubaneswar",
		"content": "Bhubaneswar"
	}, {
		"id": 291,
		"slug": "billings",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Billings",
		"content": "Billings"
	}, {
		"id": 284,
		"slug": "birmingham-al",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Birmingham, AL",
		"content": "Birmingham, AL"
	}, {
		"id": 244,
		"slug": "birmingham",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Birmingham, UK",
		"content": "Birmingham, UK"
	}, {
		"id": 1341,
		"slug": "bloomington",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Bloomington, IN",
		"content": "Bloomington, IN"
	}, {
		"id": 1291,
		"slug": "blumenau",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Blumenau",
		"content": "Blumenau"
	}, {
		"id": 146,
		"slug": "bogota",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Bogota",
		"content": "Bogota"
	}, {
		"id": 262,
		"slug": "boise",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Boise",
		"content": "Boise"
	}, {
		"id": 1543,
		"slug": "boone",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Boone",
		"content": "Boone"
	}, {
		"id": 264,
		"slug": "bordeaux",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Bordeaux",
		"content": "Bordeaux"
	}, {
		"id": 6,
		"slug": "boston",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Boston",
		"content": "Boston"
	}, {
		"id": 348,
		"slug": "bowling-green-ky",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Bowling Green, KY",
		"content": "Bowling Green, KY"
	}, {
		"id": 659,
		"slug": "bozeman",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Bozeman",
		"content": "Bozeman"
	}, {
		"id": 574,
		"slug": "brasilia",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Brasilia",
		"content": "Brasilia"
	}, {
		"id": 1521,
		"slug": "brasov",
		"region": "regions.europe",
		"country": {
			"name": "Romania",
			"iso2": "RO"
		},
		"name": "Brasov",
		"content": "Brasov"
	}, {
		"id": 627,
		"slug": "bratislava",
		"region": "regions.europe",
		"country": {
			"name": "Slovakia",
			"iso2": "SK"
		},
		"name": "Bratislava",
		"content": "Bratislava"
	}, {
		"id": 1459,
		"slug": "brighton-and-sussex",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Brighton and Sussex",
		"content": "Brighton and Sussex"
	}, {
		"id": 221,
		"slug": "brisbane",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Brisbane",
		"content": "Brisbane"
	}, {
		"id": 1536,
		"slug": "brno",
		"region": "regions.europe",
		"country": {
			"name": "Czech Republic",
			"iso2": "CZ"
		},
		"name": "Brno",
		"content": "Brno"
	}, {
		"id": 37,
		"slug": "brussels",
		"region": "regions.europe",
		"country": {
			"name": "Belgium",
			"iso2": "BE"
		},
		"name": "Brussels",
		"content": "Brussels"
	}, {
		"id": 1013,
		"slug": "bucaramanga",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Bucaramanga",
		"content": "Bucaramanga"
	}, {
		"id": 603,
		"slug": "bucharest",
		"region": "regions.europe",
		"country": {
			"name": "Romania",
			"iso2": "RO"
		},
		"name": "Bucharest",
		"content": "Bucharest"
	}, {
		"id": 537,
		"slug": "budapest",
		"region": "regions.europe",
		"country": {
			"name": "Hungary",
			"iso2": "HU"
		},
		"name": "Budapest",
		"content": "Budapest"
	}, {
		"id": 805,
		"slug": "buenos-aires",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Argentina",
			"iso2": "AR"
		},
		"name": "Buenos Aires",
		"content": "Buenos Aires"
	}, {
		"id": 813,
		"slug": "byron-bay",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Byron Bay",
		"content": "Byron Bay"
	}, {
		"id": 1379,
		"slug": "cabo-frio",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Cabo Frio",
		"content": "Cabo Frio"
	}, {
		"id": 531,
		"slug": "cairo",
		"region": "regions.africa",
		"country": {
			"name": "Egypt",
			"iso2": "EG"
		},
		"name": "Cairo",
		"content": "Cairo"
	}, {
		"id": 192,
		"slug": "calgary",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Calgary",
		"content": "Calgary"
	}, {
		"id": 201,
		"slug": "cali",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Cali - Colombia",
		"content": "Cali - Colombia"
	}, {
		"id": 1430,
		"slug": "campeche",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Campeche",
		"content": "Campeche"
	}, {
		"id": 793,
		"slug": "campinas",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Campinas",
		"content": "Campinas"
	}, {
		"id": 1327,
		"slug": "campo-grande",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Campo Grande",
		"content": "Campo Grande"
	}, {
		"id": 1396,
		"slug": "campos-dos-goytacazes",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Campos dos Goytacazes",
		"content": "Campos dos Goytacazes"
	}, {
		"id": 301,
		"slug": "canberra",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Canberra",
		"content": "Canberra"
	}, {
		"id": 1434,
		"slug": "cancun",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Cancun",
		"content": "Cancun"
	}, {
		"id": 137,
		"slug": "cape-town",
		"region": "regions.africa",
		"country": {
			"name": "South Africa",
			"iso2": "ZA"
		},
		"name": "Cape Town",
		"content": "Cape Town"
	}, {
		"id": 618,
		"slug": "cardiff",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Cardiff",
		"content": "Cardiff"
	}, {
		"id": 1017,
		"slug": "cartagena",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Cartagena",
		"content": "Cartagena"
	}, {
		"id": 604,
		"slug": "casablanca",
		"region": "regions.africa",
		"country": {
			"name": "Morocco",
			"iso2": "MA"
		},
		"name": "Casablanca",
		"content": "Casablanca"
	}, {
		"id": 1395,
		"slug": "caxias-do-sul",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Caxias do Sul",
		"content": "Caxias do Sul"
	}, {
		"id": 581,
		"slug": "cebu",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Philippines",
			"iso2": "PH"
		},
		"name": "Cebu",
		"content": "Cebu"
	}, {
		"id": 1265,
		"slug": "cedar-rapids",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Cedar Rapids",
		"content": "Cedar Rapids"
	}, {
		"id": 1462,
		"slug": "celaya",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Celaya",
		"content": "Celaya"
	}, {
		"id": 333,
		"slug": "daytona-beach",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Central Atlantic Coast, FL",
		"content": "Central Atlantic Coast, FL"
	}, {
		"id": 371,
		"slug": "champaign",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Champaign",
		"content": "Champaign"
	}, {
		"id": 473,
		"slug": "chandigarh",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Chandigarh",
		"content": "Chandigarh"
	}, {
		"id": 234,
		"slug": "charleston",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Charleston, SC",
		"content": "Charleston, SC"
	}, {
		"id": 316,
		"slug": "charleston-wv",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Charleston, WV",
		"content": "Charleston, WV"
	}, {
		"id": 22,
		"slug": "charlotte",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Charlotte",
		"content": "Charlotte"
	}, {
		"id": 441,
		"slug": "charlottesville-va",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Charlottesville-Harrisonburg",
		"content": "Charlottesville-Harrisonburg"
	}, {
		"id": 279,
		"slug": "chattanooga",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Chattanooga",
		"content": "Chattanooga"
	}, {
		"id": 1123,
		"slug": "chelyabinsk",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Chelyabinsk",
		"content": "Chelyabinsk"
	}, {
		"id": 209,
		"slug": "chennai",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Chennai",
		"content": "Chennai"
	}, {
		"id": 1507,
		"slug": "chiang-mai",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Thailand",
			"iso2": "TH"
		},
		"name": "Chiang Mai",
		"content": "Chiang Mai"
	}, {
		"id": 7,
		"slug": "chicago",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Chicago",
		"content": "Chicago"
	}, {
		"id": 1384,
		"slug": "chihuahua",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Chihuahua",
		"content": "Chihuahua"
	}, {
		"id": 300,
		"slug": "christchurch",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "New Zealand",
			"iso2": "NZ"
		},
		"name": "Christchurch",
		"content": "Christchurch"
	}, {
		"id": 141,
		"slug": "cincinnati",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Cincinnati",
		"content": "Cincinnati"
	}, {
		"id": 1383,
		"slug": "ciudad-juarez",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Ciudad Juarez",
		"content": "Ciudad Juarez"
	}, {
		"id": 142,
		"slug": "cleveland",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Cleveland",
		"content": "Cleveland"
	}, {
		"id": 1097,
		"slug": "cluj",
		"region": "regions.europe",
		"country": {
			"name": "Romania",
			"iso2": "RO"
		},
		"name": "Cluj",
		"content": "Cluj"
	}, {
		"id": 649,
		"slug": "georgia-coast",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Coastal Georgia",
		"content": "Coastal Georgia"
	}, {
		"id": 657,
		"slug": "coeur-dalene",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Coeur D'Alene",
		"content": "Coeur D'Alene"
	}, {
		"id": 777,
		"slug": "coimbatore",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Coimbatore",
		"content": "Coimbatore"
	}, {
		"id": 255,
		"slug": "college-station",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "College Station",
		"content": "College Station"
	}, {
		"id": 478,
		"slug": "colombo",
		"region": "regions.south-asia",
		"country": {
			"name": "Sri Lanka",
			"iso2": "LK"
		},
		"name": "Colombo",
		"content": "Colombo"
	}, {
		"id": 1413,
		"slug": "colorado-springs",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Colorado Springs",
		"content": "Colorado Springs"
	}, {
		"id": 380,
		"slug": "columbia-mo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Columbia, MO",
		"content": "Columbia, MO"
	}, {
		"id": 272,
		"slug": "columbia",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Columbia, SC",
		"content": "Columbia, SC"
	}, {
		"id": 139,
		"slug": "columbus",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Columbus",
		"content": "Columbus"
	}, {
		"id": 1357,
		"slug": "concepcion",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "Concepcion",
		"content": "Concepcion"
	}, {
		"id": 227,
		"slug": "connecticut",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Connecticut",
		"content": "Connecticut"
	}, {
		"id": 536,
		"slug": "copenhagen",
		"region": "regions.europe",
		"country": {
			"name": "Denmark",
			"iso2": "DK"
		},
		"name": "Copenhagen",
		"content": "Copenhagen"
	}, {
		"id": 1263,
		"slug": "split",
		"region": "regions.europe",
		"country": {
			"name": "Croatia",
			"iso2": "HR"
		},
		"name": "Croatian Coast",
		"content": "Croatian Coast"
	}, {
		"id": 1041,
		"slug": "cucuta",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Cucuta",
		"content": "Cucuta"
	}, {
		"id": 1127,
		"slug": "cuernavaca",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Cuernavaca",
		"content": "Cuernavaca"
	}, {
		"id": 1325,
		"slug": "cuiaba",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Cuiaba",
		"content": "Cuiaba"
	}, {
		"id": 1441,
		"slug": "culiacan",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Culiacan",
		"content": "Culiacan"
	}, {
		"id": 789,
		"slug": "curitiba",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Curitiba",
		"content": "Curitiba"
	}, {
		"id": 25,
		"slug": "dallas",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Dallas-Fort Worth",
		"content": "Dallas-Fort Worth"
	}, {
		"id": 1253,
		"slug": "dar-es-salaam",
		"region": "regions.africa",
		"country": {
			"name": "Tanzania",
			"iso2": "TZ"
		},
		"name": "Dar Es Salaam",
		"content": "Dar Es Salaam"
	}, {
		"id": 297,
		"slug": "dayton",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Dayton",
		"content": "Dayton"
	}, {
		"id": 310,
		"slug": "wilmington-de",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Delaware",
		"content": "Delaware"
	}, {
		"id": 24,
		"slug": "denver",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Denver",
		"content": "Denver"
	}, {
		"id": 303,
		"slug": "des-moines",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Des Moines",
		"content": "Des Moines"
	}, {
		"id": 50,
		"slug": "detroit",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Detroit",
		"content": "Detroit"
	}, {
		"id": 1107,
		"slug": "dhaka",
		"region": "regions.south-asia",
		"country": {
			"name": "Bangladesh",
			"iso2": "BD"
		},
		"name": "Dhaka",
		"content": "Dhaka"
	}, {
		"id": 202,
		"slug": "doha",
		"region": "regions.middle-east",
		"country": {
			"name": "Qatar",
			"iso2": "QA"
		},
		"name": "Doha",
		"content": "Doha"
	}, {
		"id": 138,
		"slug": "dubai",
		"region": "regions.middle-east",
		"country": {
			"name": "United Arab Emirates",
			"iso2": "AE"
		},
		"name": "Dubai",
		"content": "Dubai"
	}, {
		"id": 210,
		"slug": "dublin",
		"region": "regions.europe",
		"country": {
			"name": "Ireland",
			"iso2": "IE"
		},
		"name": "Dublin",
		"content": "Dublin"
	}, {
		"id": 1447,
		"slug": "dubois",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "DuBois",
		"content": "DuBois"
	}, {
		"id": 193,
		"slug": "durban",
		"region": "regions.africa",
		"country": {
			"name": "South Africa",
			"iso2": "ZA"
		},
		"name": "Durban",
		"content": "Durban"
	}, {
		"id": 654,
		"slug": "eastern-idaho",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Eastern Idaho",
		"content": "Eastern Idaho"
	}, {
		"id": 652,
		"slug": "eastern-north-carolina",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Eastern North Carolina",
		"content": "Eastern North Carolina"
	}, {
		"id": 599,
		"slug": "dammam",
		"region": "regions.middle-east",
		"country": {
			"name": "Saudi Arabia",
			"iso2": "SA"
		},
		"name": "Eastern Province, KSA",
		"content": "Eastern Province, KSA"
	}, {
		"id": 1033,
		"slug": "tricities-wa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Eastern Washington",
		"content": "Eastern Washington"
	}, {
		"id": 607,
		"slug": "edinburgh",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Edinburgh",
		"content": "Edinburgh"
	}, {
		"id": 339,
		"slug": "edmonton",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Edmonton",
		"content": "Edmonton"
	}, {
		"id": 650,
		"slug": "yekaterinburg",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Ekaterinburg",
		"content": "Ekaterinburg"
	}, {
		"id": 254,
		"slug": "el-paso",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "El Paso",
		"content": "El Paso"
	}, {
		"id": 322,
		"slug": "erie",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Erie",
		"content": "Erie"
	}, {
		"id": 369,
		"slug": "evansville-in",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Evansville, IN",
		"content": "Evansville, IN"
	}, {
		"id": 351,
		"slug": "fargo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fargo - Moorhead",
		"content": "Fargo - Moorhead"
	}, {
		"id": 436,
		"slug": "fayetteville-ar",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fayetteville, AR",
		"content": "Fayetteville, AR"
	}, {
		"id": 293,
		"slug": "fayetteville",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fayetteville, NC",
		"content": "Fayetteville, NC"
	}, {
		"id": 431,
		"slug": "flagstaff",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Flagstaff",
		"content": "Flagstaff"
	}, {
		"id": 349,
		"slug": "flint",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Flint",
		"content": "Flint"
	}, {
		"id": 95,
		"slug": "florence",
		"region": "regions.europe",
		"country": {
			"name": "Italy",
			"iso2": "IT"
		},
		"name": "Florence",
		"content": "Florence"
	}, {
		"id": 797,
		"slug": "florianopolis",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Florianopolis",
		"content": "Florianopolis"
	}, {
		"id": 597,
		"slug": "florida-keys",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Florida Keys",
		"content": "Florida Keys"
	}, {
		"id": 1414,
		"slug": "fort-collins",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fort Collins",
		"content": "Fort Collins"
	}, {
		"id": 275,
		"slug": "fort-myers",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fort Myers-Naples",
		"content": "Fort Myers-Naples"
	}, {
		"id": 370,
		"slug": "fort-wayne",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fort Wayne",
		"content": "Fort Wayne"
	}, {
		"id": 801,
		"slug": "fortaleza",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Fortaleza",
		"content": "Fortaleza"
	}, {
		"id": 212,
		"slug": "fresno",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Fresno",
		"content": "Fresno"
	}, {
		"id": 315,
		"slug": "gainesville",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Gainesville",
		"content": "Gainesville"
	}, {
		"id": 997,
		"slug": "gallup",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Gallup",
		"content": "Gallup"
	}, {
		"id": 1473,
		"slug": "gatineau",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Gatineau",
		"content": "Gatineau"
	}, {
		"id": 456,
		"slug": "geelong",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Geelong",
		"content": "Geelong"
	}, {
		"id": 266,
		"slug": "geneva",
		"region": "regions.europe",
		"country": {
			"name": "Switzerland",
			"iso2": "CH"
		},
		"name": "Geneva",
		"content": "Geneva"
	}, {
		"id": 450,
		"slug": "glasgow-uk",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Glasgow",
		"content": "Glasgow"
	}, {
		"id": 803,
		"slug": "goiania",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Goiania",
		"content": "Goiania"
	}, {
		"id": 243,
		"slug": "gold-coast",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Gold Coast",
		"content": "Gold Coast"
	}, {
		"id": 467,
		"slug": "gothenburg",
		"region": "regions.europe",
		"country": {
			"name": "Sweden",
			"iso2": "SE"
		},
		"name": "Gothenburg",
		"content": "Gothenburg"
	}, {
		"id": 285,
		"slug": "grand-rapids",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Grand Rapids",
		"content": "Grand Rapids"
	}, {
		"id": 651,
		"slug": "maine",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Greater Maine",
		"content": "Greater Maine"
	}, {
		"id": 305,
		"slug": "annapolis",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Greater Maryland",
		"content": "Greater Maryland"
	}, {
		"id": 1448,
		"slug": "greater-williamsport",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Greater Williamsport",
		"content": "Greater Williamsport"
	}, {
		"id": 382,
		"slug": "green-bay",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Green Bay",
		"content": "Green Bay"
	}, {
		"id": 344,
		"slug": "greenville-sc",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Greenville, SC",
		"content": "Greenville, SC"
	}, {
		"id": 204,
		"slug": "guadalajara",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Guadalajara",
		"content": "Guadalajara"
	}, {
		"id": 1461,
		"slug": "guanajuato",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Guanajuato",
		"content": "Guanajuato"
	}, {
		"id": 1031,
		"slug": "guatemala-city",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Guatemala",
			"iso2": "GT"
		},
		"name": "Guatemala City",
		"content": "Guatemala City"
	}, {
		"id": 444,
		"slug": "gulfportbiloxi",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Gulfport-Biloxi",
		"content": "Gulfport-Biloxi"
	}, {
		"id": 755,
		"slug": "guwahati",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Guwahati",
		"content": "Guwahati"
	}, {
		"id": 337,
		"slug": "hamilton",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Hamilton",
		"content": "Hamilton"
	}, {
		"id": 235,
		"slug": "virginia-beach",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Hampton Roads",
		"content": "Hampton Roads"
	}, {
		"id": 429,
		"slug": "hanoi",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Vietnam",
			"iso2": "VN"
		},
		"name": "Hanoi",
		"content": "Hanoi"
	}, {
		"id": 283,
		"slug": "harrisburg",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Harrisburg",
		"content": "Harrisburg"
	}, {
		"id": 447,
		"slug": "hattiesburg-ms",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Hattiesburg, MS",
		"content": "Hattiesburg, MS"
	}, {
		"id": 46,
		"slug": "helsinki",
		"region": "regions.europe",
		"country": {
			"name": "Finland",
			"iso2": "FI"
		},
		"name": "Helsinki",
		"content": "Helsinki"
	}, {
		"id": 1151,
		"slug": "hermosillo",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Hermosillo",
		"content": "Hermosillo"
	}, {
		"id": 387,
		"slug": "ho-chi-minh-city",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Vietnam",
			"iso2": "VN"
		},
		"name": "Ho Chi Minh City",
		"content": "Ho Chi Minh City"
	}, {
		"id": 468,
		"slug": "hobart",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Hobart",
		"content": "Hobart"
	}, {
		"id": 143,
		"slug": "hong-kong",
		"region": "regions.east-asia",
		"country": {
			"name": "Hong Kong",
			"iso2": "HK"
		},
		"name": "Hong Kong",
		"content": "Hong Kong"
	}, {
		"id": 133,
		"slug": "honolulu",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Honolulu",
		"content": "Honolulu"
	}, {
		"id": 134,
		"slug": "houston",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Houston",
		"content": "Houston"
	}, {
		"id": 438,
		"slug": "huntsville-al",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Huntsville, AL",
		"content": "Huntsville, AL"
	}, {
		"id": 1299,
		"slug": "hz-mixc",
		"region": "regions.china",
		"country": {
			"name": "China, People's Republic of",
			"iso2": "CN"
		},
		"name": "Huzhou",
		"content": "Huzhou"
	}, {
		"id": 203,
		"slug": "hyderabad",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Hyderabad",
		"content": "Hyderabad"
	}, {
		"id": 1047,
		"slug": "ibague",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Ibague",
		"content": "Ibague"
	}, {
		"id": 617,
		"slug": "incheon",
		"region": "regions.east-asia",
		"country": {
			"name": "Korea, Republic of (South Korea)",
			"iso2": "KR"
		},
		"name": "Incheon",
		"content": "Incheon"
	}, {
		"id": 93,
		"slug": "indianapolis",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Indianapolis",
		"content": "Indianapolis"
	}, {
		"id": 763,
		"slug": "indore",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Indore",
		"content": "Indore"
	}, {
		"id": 228,
		"slug": "inland-empire",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Inland Empire",
		"content": "Inland Empire"
	}, {
		"id": 377,
		"slug": "iowa-city",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Iowa City",
		"content": "Iowa City"
	}, {
		"id": 1053,
		"slug": "ipoh",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Ipoh",
		"content": "Ipoh"
	}, {
		"id": 1501,
		"slug": "iquique",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "Iquique",
		"content": "Iquique"
	}, {
		"id": 1419,
		"slug": "irapuato",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Irapuato",
		"content": "Irapuato"
	}, {
		"id": 268,
		"slug": "istanbul",
		"region": "regions.europe",
		"country": {
			"name": "Turkey",
			"iso2": "TR"
		},
		"name": "Istanbul",
		"content": "Istanbul"
	}, {
		"id": 1359,
		"slug": "itajai",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Itajai",
		"content": "Itajai"
	}, {
		"id": 311,
		"slug": "jackson",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Jackson",
		"content": "Jackson"
	}, {
		"id": 187,
		"slug": "jacksonville",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Jacksonville",
		"content": "Jacksonville"
	}, {
		"id": 474,
		"slug": "jaipur",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Jaipur",
		"content": "Jaipur"
	}, {
		"id": 328,
		"slug": "jakarta",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Indonesia",
			"iso2": "ID"
		},
		"name": "Jakarta",
		"content": "Jakarta"
	}, {
		"id": 240,
		"slug": "jeddah",
		"region": "regions.middle-east",
		"country": {
			"name": "Saudi Arabia",
			"iso2": "SA"
		},
		"name": "Jeddah",
		"content": "Jeddah"
	}, {
		"id": 1311,
		"slug": "joao-pessoa",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Joao Pessoa",
		"content": "Joao Pessoa"
	}, {
		"id": 945,
		"slug": "jodhpur",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Jodhpur",
		"content": "Jodhpur"
	}, {
		"id": 135,
		"slug": "johannesburg",
		"region": "regions.africa",
		"country": {
			"name": "South Africa",
			"iso2": "ZA"
		},
		"name": "Johannesburg and Pretoria",
		"content": "Johannesburg and Pretoria"
	}, {
		"id": 1454,
		"slug": "johnstownaltoona",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Johnstown-Altoona",
		"content": "Johnstown-Altoona"
	}, {
		"id": 433,
		"slug": "johor-bahru",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Johor Bahru",
		"content": "Johor Bahru"
	}, {
		"id": 1275,
		"slug": "joinville",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Joinville",
		"content": "Joinville"
	}, {
		"id": 1333,
		"slug": "juiz-de-fora",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Juiz de Fora",
		"content": "Juiz de Fora"
	}, {
		"id": 388,
		"slug": "kalamazoo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Kalamazoo",
		"content": "Kalamazoo"
	}, {
		"id": 1255,
		"slug": "kampala",
		"region": "regions.africa",
		"country": {
			"name": "Uganda",
			"iso2": "UG"
		},
		"name": "Kampala",
		"content": "Kampala"
	}, {
		"id": 88,
		"slug": "kansas-city",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Kansas City",
		"content": "Kansas City"
	}, {
		"id": 1077,
		"slug": "kaohsiung",
		"region": "regions.east-asia",
		"country": {
			"name": "Taiwan (ROC)",
			"iso2": "TW"
		},
		"name": "Kaohsiung",
		"content": "Kaohsiung"
	}, {
		"id": 1472,
		"slug": "karachi",
		"region": "regions.south-asia",
		"country": {
			"name": "Pakistan",
			"iso2": "PK"
		},
		"name": "Karachi",
		"content": "Karachi"
	}, {
		"id": 837,
		"slug": "kazan",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Kazan",
		"content": "Kazan"
	}, {
		"id": 354,
		"slug": "killeen",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Killeen",
		"content": "Killeen"
	}, {
		"id": 402,
		"slug": "kingston",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Kingston",
		"content": "Kingston"
	}, {
		"id": 341,
		"slug": "kitchenerwaterloo",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Kitchener-Waterloo",
		"content": "Kitchener-Waterloo"
	}, {
		"id": 277,
		"slug": "knoxville",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Knoxville",
		"content": "Knoxville"
	}, {
		"id": 586,
		"slug": "kochi",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Kochi",
		"content": "Kochi"
	}, {
		"id": 476,
		"slug": "kolkata",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Kolkata",
		"content": "Kolkata"
	}, {
		"id": 1301,
		"slug": "kota-kinabalu",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Kota Kinabalu",
		"content": "Kota Kinabalu"
	}, {
		"id": 495,
		"slug": "krakow",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Krakow",
		"content": "Krakow"
	}, {
		"id": 1003,
		"slug": "krasnodar",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Krasnodar",
		"content": "Krasnodar"
	}, {
		"id": 1115,
		"slug": "krasnoyarsk",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Krasnoyarsk",
		"content": "Krasnoyarsk"
	}, {
		"id": 182,
		"slug": "kuala-lumpur",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Kuala Lumpur",
		"content": "Kuala Lumpur"
	}, {
		"id": 1545,
		"slug": "kuantan",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Kuantan",
		"content": "Kuantan"
	}, {
		"id": 1480,
		"slug": "kuching",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Kuching",
		"content": "Kuching"
	}, {
		"id": 943,
		"slug": "kyiv",
		"region": "regions.europe",
		"country": {
			"name": "Ukraine",
			"iso2": "UA"
		},
		"name": "Kyiv",
		"content": "Kyiv"
	}, {
		"id": 1039,
		"slug": "kyotango",
		"region": "regions.east-asia",
		"country": {
			"name": "Japan",
			"iso2": "JP"
		},
		"name": "Kyotango",
		"content": "Kyotango"
	}, {
		"id": 1496,
		"slug": "la-serena",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "La Serena",
		"content": "La Serena"
	}, {
		"id": 443,
		"slug": "lafayette-la",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lafayette, LA",
		"content": "Lafayette, LA"
	}, {
		"id": 389,
		"slug": "lagos",
		"region": "regions.africa",
		"country": {
			"name": "Nigeria",
			"iso2": "NG"
		},
		"name": "Lagos",
		"content": "Lagos"
	}, {
		"id": 1005,
		"slug": "lahore",
		"region": "regions.south-asia",
		"country": {
			"name": "Pakistan",
			"iso2": "PK"
		},
		"name": "Lahore",
		"content": "Lahore"
	}, {
		"id": 440,
		"slug": "lancaster-pa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lancaster, PA",
		"content": "Lancaster, PA"
	}, {
		"id": 347,
		"slug": "lansing",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lansing",
		"content": "Lansing"
	}, {
		"id": 488,
		"slug": "las-cruces",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Las Cruces",
		"content": "Las Cruces"
	}, {
		"id": 15,
		"slug": "las-vegas",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Las Vegas",
		"content": "Las Vegas"
	}, {
		"id": 541,
		"slug": "lausanne",
		"region": "regions.europe",
		"country": {
			"name": "Switzerland",
			"iso2": "CH"
		},
		"name": "Lausanne",
		"content": "Lausanne"
	}, {
		"id": 359,
		"slug": "lawrence",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lawrence",
		"content": "Lawrence"
	}, {
		"id": 245,
		"slug": "leeds",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Leeds",
		"content": "Leeds"
	}, {
		"id": 317,
		"slug": "allentown",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lehigh Valley",
		"content": "Lehigh Valley"
	}, {
		"id": 1101,
		"slug": "leicester",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Leicester",
		"content": "Leicester"
	}, {
		"id": 929,
		"slug": "leon",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Leon",
		"content": "Leon"
	}, {
		"id": 259,
		"slug": "lexington",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lexington",
		"content": "Lexington"
	}, {
		"id": 263,
		"slug": "lille",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Lille",
		"content": "Lille"
	}, {
		"id": 144,
		"slug": "lima",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Peru",
			"iso2": "PE"
		},
		"name": "Lima",
		"content": "Lima"
	}, {
		"id": 260,
		"slug": "lincoln",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lincoln",
		"content": "Lincoln"
	}, {
		"id": 52,
		"slug": "lisbon",
		"region": "regions.europe",
		"country": {
			"name": "Portugal",
			"iso2": "PT"
		},
		"name": "Lisbon",
		"content": "Lisbon"
	}, {
		"id": 273,
		"slug": "little-rock",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Little Rock",
		"content": "Little Rock"
	}, {
		"id": 1061,
		"slug": "lodz",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Lodz",
		"content": "Lodz"
	}, {
		"id": 18,
		"slug": "london",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "London",
		"content": "London"
	}, {
		"id": 338,
		"slug": "london-ont",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "London, Ont",
		"content": "London, Ont"
	}, {
		"id": 1277,
		"slug": "londrina",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Londrina",
		"content": "Londrina"
	}, {
		"id": 12,
		"slug": "los-angeles",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Los Angeles",
		"content": "Los Angeles"
	}, {
		"id": 1443,
		"slug": "los-mochis",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Los Mochis",
		"content": "Los Mochis"
	}, {
		"id": 236,
		"slug": "louisville",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Louisville",
		"content": "Louisville"
	}, {
		"id": 253,
		"slug": "lubbock",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Lubbock",
		"content": "Lubbock"
	}, {
		"id": 1481,
		"slug": "lucknow",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Lucknow",
		"content": "Lucknow"
	}, {
		"id": 751,
		"slug": "ludhiana",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Ludhiana",
		"content": "Ludhiana"
	}, {
		"id": 51,
		"slug": "lyon",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Lyon",
		"content": "Lyon"
	}, {
		"id": 534,
		"slug": "macau",
		"region": "regions.east-asia",
		"country": {
			"name": "Macao",
			"iso2": "MO"
		},
		"name": "Macau",
		"content": "Macau"
	}, {
		"id": 1309,
		"slug": "maceio",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Maceio",
		"content": "Maceio"
	}, {
		"id": 219,
		"slug": "madison",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Madison",
		"content": "Madison"
	}, {
		"id": 16,
		"slug": "madrid",
		"region": "regions.europe",
		"country": {
			"name": "Spain",
			"iso2": "ES"
		},
		"name": "Madrid",
		"content": "Madrid"
	}, {
		"id": 1059,
		"slug": "malmo",
		"region": "regions.europe",
		"country": {
			"name": "Sweden",
			"iso2": "SE"
		},
		"name": "Malmö",
		"content": "Malmö"
	}, {
		"id": 598,
		"slug": "manama",
		"region": "regions.middle-east",
		"country": {
			"name": "Bahrain",
			"iso2": "BH"
		},
		"name": "Manama",
		"content": "Manama"
	}, {
		"id": 211,
		"slug": "manchester",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Manchester",
		"content": "Manchester"
	}, {
		"id": 955,
		"slug": "mangalore",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Mangalore",
		"content": "Mangalore"
	}, {
		"id": 486,
		"slug": "manhattan",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Manhattan",
		"content": "Manhattan"
	}, {
		"id": 200,
		"slug": "manila",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Philippines",
			"iso2": "PH"
		},
		"name": "Manila",
		"content": "Manila"
	}, {
		"id": 1067,
		"slug": "manizales",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Manizales",
		"content": "Manizales"
	}, {
		"id": 1297,
		"slug": "maringa",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Maringa",
		"content": "Maringa"
	}, {
		"id": 267,
		"slug": "marseille",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Marseille",
		"content": "Marseille"
	}, {
		"id": 594,
		"slug": "maui",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Maui",
		"content": "Maui"
	}, {
		"id": 1527,
		"slug": "mayaguez",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Mayaguez",
		"content": "Mayaguez"
	}, {
		"id": 1442,
		"slug": "mazatlan",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Mazatlan",
		"content": "Mazatlan"
	}, {
		"id": 588,
		"slug": "medellin",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Medellin",
		"content": "Medellin"
	}, {
		"id": 1514,
		"slug": "melaka",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Melaka",
		"content": "Melaka"
	}, {
		"id": 39,
		"slug": "melbourne",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Melbourne",
		"content": "Melbourne"
	}, {
		"id": 186,
		"slug": "memphis",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Memphis",
		"content": "Memphis"
	}, {
		"id": 1129,
		"slug": "merida",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Merida",
		"content": "Merida"
	}, {
		"id": 453,
		"slug": "liverpool",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Merseyside",
		"content": "Merseyside"
	}, {
		"id": 1135,
		"slug": "mexicali",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Mexicali",
		"content": "Mexicali"
	}, {
		"id": 90,
		"slug": "mexico-city",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Mexico City",
		"content": "Mexico City"
	}, {
		"id": 14,
		"slug": "miami",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Miami",
		"content": "Miami"
	}, {
		"id": 831,
		"slug": "midland",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Midland-Odessa",
		"content": "Midland-Odessa"
	}, {
		"id": 32,
		"slug": "milano",
		"region": "regions.europe",
		"country": {
			"name": "Italy",
			"iso2": "IT"
		},
		"name": "Milan",
		"content": "Milan"
	}, {
		"id": 49,
		"slug": "milwaukee",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Milwaukee",
		"content": "Milwaukee"
	}, {
		"id": 28,
		"slug": "minneapolis",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Minneapolis - St. Paul",
		"content": "Minneapolis - St. Paul"
	}, {
		"id": 807,
		"slug": "minsk",
		"region": "regions.europe",
		"country": {
			"name": "Belarus",
			"iso2": "BY"
		},
		"name": "Minsk",
		"content": "Minsk"
	}, {
		"id": 658,
		"slug": "missoula",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Missoula",
		"content": "Missoula"
	}, {
		"id": 437,
		"slug": "mobile-al",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Mobile, AL",
		"content": "Mobile, AL"
	}, {
		"id": 229,
		"slug": "modesto",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Modesto",
		"content": "Modesto"
	}, {
		"id": 1085,
		"slug": "mombasa",
		"region": "regions.africa",
		"country": {
			"name": "Kenya",
			"iso2": "KE"
		},
		"name": "Mombasa",
		"content": "Mombasa"
	}, {
		"id": 1043,
		"slug": "monteria",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Monteria",
		"content": "Monteria"
	}, {
		"id": 533,
		"slug": "monterrey",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Monterrey",
		"content": "Monterrey"
	}, {
		"id": 1335,
		"slug": "montes-claros",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Montes Claros",
		"content": "Montes Claros"
	}, {
		"id": 205,
		"slug": "montevideo",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Uruguay",
			"iso2": "UY"
		},
		"name": "Montevideo",
		"content": "Montevideo"
	}, {
		"id": 294,
		"slug": "montgomery",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Montgomery, AL",
		"content": "Montgomery, AL"
	}, {
		"id": 140,
		"slug": "montreal",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Montreal",
		"content": "Montreal"
	}, {
		"id": 448,
		"slug": "morgantown-wv",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Morgantown, WV",
		"content": "Morgantown, WV"
	}, {
		"id": 461,
		"slug": "mornington-peninsula",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Mornington Peninsula",
		"content": "Mornington Peninsula"
	}, {
		"id": 145,
		"slug": "moscow",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Moscow",
		"content": "Moscow"
	}, {
		"id": 215,
		"slug": "mumbai",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Mumbai",
		"content": "Mumbai"
	}, {
		"id": 53,
		"slug": "munich",
		"region": "regions.europe",
		"country": {
			"name": "Germany",
			"iso2": "DE"
		},
		"name": "Munich",
		"content": "Munich"
	}, {
		"id": 327,
		"slug": "myrtle-beach",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Myrtle Beach",
		"content": "Myrtle Beach"
	}, {
		"id": 769,
		"slug": "mysore",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Mysore",
		"content": "Mysore"
	}, {
		"id": 759,
		"slug": "nagpur",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Nagpur",
		"content": "Nagpur"
	}, {
		"id": 540,
		"slug": "nairobi",
		"region": "regions.africa",
		"country": {
			"name": "Kenya",
			"iso2": "KE"
		},
		"name": "Nairobi",
		"content": "Nairobi"
	}, {
		"id": 480,
		"slug": "nantes",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Nantes",
		"content": "Nantes"
	}, {
		"id": 767,
		"slug": "nashik",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Nashik",
		"content": "Nashik"
	}, {
		"id": 188,
		"slug": "nashville",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Nashville",
		"content": "Nashville"
	}, {
		"id": 787,
		"slug": "natal",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Natal",
		"content": "Natal"
	}, {
		"id": 1073,
		"slug": "neiva",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Neiva",
		"content": "Neiva"
	}, {
		"id": 197,
		"slug": "new-delhi",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "New Delhi",
		"content": "New Delhi"
	}, {
		"id": 313,
		"slug": "manchester-nh",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "New Hampshire",
		"content": "New Hampshire"
	}, {
		"id": 198,
		"slug": "new-jersey",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "New Jersey",
		"content": "New Jersey"
	}, {
		"id": 289,
		"slug": "new-jersey-shore",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "New Jersey (Shore)",
		"content": "New Jersey (Shore)"
	}, {
		"id": 190,
		"slug": "new-orleans",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "New Orleans",
		"content": "New Orleans"
	}, {
		"id": 5,
		"slug": "new-york",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "New York City",
		"content": "New York City"
	}, {
		"id": 302,
		"slug": "newcastle",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Newcastle",
		"content": "Newcastle"
	}, {
		"id": 393,
		"slug": "niagara-region",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Niagara Region",
		"content": "Niagara Region"
	}, {
		"id": 92,
		"slug": "cannes",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Nice",
		"content": "Nice"
	}, {
		"id": 919,
		"slug": "nizhny-novgorod",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Nizhny Novgorod",
		"content": "Nizhny Novgorod"
	}, {
		"id": 451,
		"slug": "newcastle-uk",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "North East, UK",
		"content": "North East, UK"
	}, {
		"id": 660,
		"slug": "northern-montana",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Northern Montana",
		"content": "Northern Montana"
	}, {
		"id": 1103,
		"slug": "nottingham",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Nottingham",
		"content": "Nottingham"
	}, {
		"id": 915,
		"slug": "novosibirsk",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Novosibirsk",
		"content": "Novosibirsk"
	}, {
		"id": 630,
		"slug": "nw-indiana",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "NW Indiana",
		"content": "NW Indiana"
	}, {
		"id": 1541,
		"slug": "nyc-suburbs",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "NYC Suburbs",
		"content": "NYC Suburbs"
	}, {
		"id": 445,
		"slug": "ocala-fl",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Ocala, FL",
		"content": "Ocala, FL"
	}, {
		"id": 184,
		"slug": "oklahoma-city",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Oklahoma City",
		"content": "Oklahoma City"
	}, {
		"id": 1035,
		"slug": "olympia",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Olympia",
		"content": "Olympia"
	}, {
		"id": 246,
		"slug": "omaha",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Omaha",
		"content": "Omaha"
	}, {
		"id": 1113,
		"slug": "omsk",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Omsk",
		"content": "Omsk"
	}, {
		"id": 30,
		"slug": "orange-county",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Orange County",
		"content": "Orange County"
	}, {
		"id": 208,
		"slug": "orlando",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Orlando",
		"content": "Orlando"
	}, {
		"id": 529,
		"slug": "oslo",
		"region": "regions.europe",
		"country": {
			"name": "Norway",
			"iso2": "NO"
		},
		"name": "Oslo",
		"content": "Oslo"
	}, {
		"id": 335,
		"slug": "ottawa",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Ottawa",
		"content": "Ottawa"
	}, {
		"id": 635,
		"slug": "outer-banks-nc",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Outer Banks, NC",
		"content": "Outer Banks, NC"
	}, {
		"id": 489,
		"slug": "oxford",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Oxford",
		"content": "Oxford"
	}, {
		"id": 29,
		"slug": "palm-springs",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Palm Springs",
		"content": "Palm Springs"
	}, {
		"id": 206,
		"slug": "panama-city",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Panama",
			"iso2": "PA"
		},
		"name": "Panama, Panama",
		"content": "Panama, Panama"
	}, {
		"id": 3,
		"slug": "paris",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Paris",
		"content": "Paris"
	}, {
		"id": 1155,
		"slug": "pasto",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Pasto",
		"content": "Pasto"
	}, {
		"id": 583,
		"slug": "penang",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Malaysia",
			"iso2": "MY"
		},
		"name": "Penang",
		"content": "Penang"
	}, {
		"id": 1131,
		"slug": "peninsulasw-wa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Peninsula and SW WA",
		"content": "Peninsula and SW WA"
	}, {
		"id": 435,
		"slug": "pensacola-fl",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Pensacola, FL",
		"content": "Pensacola, FL"
	}, {
		"id": 373,
		"slug": "peoria-il",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Peoria, IL",
		"content": "Peoria, IL"
	}, {
		"id": 1065,
		"slug": "pereira",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Pereira",
		"content": "Pereira"
	}, {
		"id": 1119,
		"slug": "perm",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Perm",
		"content": "Perm"
	}, {
		"id": 222,
		"slug": "perth",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Perth",
		"content": "Perth"
	}, {
		"id": 20,
		"slug": "philadelphia",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Philadelphia",
		"content": "Philadelphia"
	}, {
		"id": 26,
		"slug": "phoenix",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Phoenix",
		"content": "Phoenix"
	}, {
		"id": 276,
		"slug": "greensboro",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Piedmont Triad",
		"content": "Piedmont Triad"
	}, {
		"id": 1402,
		"slug": "piracicaba",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Piracicaba",
		"content": "Piracicaba"
	}, {
		"id": 45,
		"slug": "pittsburgh",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Pittsburgh",
		"content": "Pittsburgh"
	}, {
		"id": 1526,
		"slug": "ponce",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Ponce",
		"content": "Ponce"
	}, {
		"id": 1293,
		"slug": "ponta-grossa",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Ponta Grossa",
		"content": "Ponta Grossa"
	}, {
		"id": 1075,
		"slug": "popayan",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Popayan",
		"content": "Popayan"
	}, {
		"id": 995,
		"slug": "port-elizabeth",
		"region": "regions.africa",
		"country": {
			"name": "South Africa",
			"iso2": "ZA"
		},
		"name": "Port Elizabeth",
		"content": "Port Elizabeth"
	}, {
		"id": 1421,
		"slug": "port-of-spain",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Trinidad and Tobago",
			"iso2": "TT"
		},
		"name": "Port of Spain",
		"content": "Port of Spain"
	}, {
		"id": 40,
		"slug": "portland",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Portland",
		"content": "Portland"
	}, {
		"id": 271,
		"slug": "portland-me",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Portland, ME",
		"content": "Portland, ME"
	}, {
		"id": 576,
		"slug": "porto",
		"region": "regions.europe",
		"country": {
			"name": "Portugal",
			"iso2": "PT"
		},
		"name": "Porto",
		"content": "Porto"
	}, {
		"id": 791,
		"slug": "porto-alegre",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Porto Alegre",
		"content": "Porto Alegre"
	}, {
		"id": 939,
		"slug": "poznan",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Poznan",
		"content": "Poznan"
	}, {
		"id": 55,
		"slug": "prague",
		"region": "regions.europe",
		"country": {
			"name": "Czech Republic",
			"iso2": "CZ"
		},
		"name": "Prague",
		"content": "Prague"
	}, {
		"id": 739,
		"slug": "puebla",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Puebla",
		"content": "Puebla"
	}, {
		"id": 1519,
		"slug": "puerto-montt",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "Puerto Montt",
		"content": "Puerto Montt"
	}, {
		"id": 342,
		"slug": "pune",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Pune",
		"content": "Pune"
	}, {
		"id": 538,
		"slug": "quad-cities",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Quad Cities",
		"content": "Quad Cities"
	}, {
		"id": 391,
		"slug": "quebec-city",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Quebec City",
		"content": "Quebec City"
	}, {
		"id": 741,
		"slug": "queretaro",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Queretaro",
		"content": "Queretaro"
	}, {
		"id": 233,
		"slug": "raleigh",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Raleigh-Durham",
		"content": "Raleigh-Durham"
	}, {
		"id": 343,
		"slug": "reading-pa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Reading, PA",
		"content": "Reading, PA"
	}, {
		"id": 799,
		"slug": "recife",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Recife",
		"content": "Recife"
	}, {
		"id": 248,
		"slug": "reno",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Reno",
		"content": "Reno"
	}, {
		"id": 136,
		"slug": "providence",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Rhode Island",
		"content": "Rhode Island"
	}, {
		"id": 1317,
		"slug": "ribeirao-preto",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Ribeirao Preto",
		"content": "Ribeirao Preto"
	}, {
		"id": 270,
		"slug": "richmond",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Richmond",
		"content": "Richmond"
	}, {
		"id": 296,
		"slug": "rio-de-janeiro",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Rio De Janeiro",
		"content": "Rio De Janeiro"
	}, {
		"id": 214,
		"slug": "riyadh",
		"region": "regions.middle-east",
		"country": {
			"name": "Saudi Arabia",
			"iso2": "SA"
		},
		"name": "Riyadh",
		"content": "Riyadh"
	}, {
		"id": 320,
		"slug": "roanoke",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Roanoke-Blacksburg",
		"content": "Roanoke-Blacksburg"
	}, {
		"id": 385,
		"slug": "rockford",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Rockford",
		"content": "Rockford"
	}, {
		"id": 1416,
		"slug": "rockies",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Rockies",
		"content": "Rockies"
	}, {
		"id": 54,
		"slug": "rome",
		"region": "regions.europe",
		"country": {
			"name": "Italy",
			"iso2": "IT"
		},
		"name": "Rome",
		"content": "Rome"
	}, {
		"id": 917,
		"slug": "rostovondon",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Rostov-On-Don",
		"content": "Rostov-On-Don"
	}, {
		"id": 216,
		"slug": "rotterdam",
		"region": "regions.europe",
		"country": {
			"name": "Netherlands",
			"iso2": "NL"
		},
		"name": "Rotterdam",
		"content": "Rotterdam"
	}, {
		"id": 41,
		"slug": "sacramento",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Sacramento",
		"content": "Sacramento"
	}, {
		"id": 242,
		"slug": "saint-petersburg",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Saint Petersburg",
		"content": "Saint Petersburg"
	}, {
		"id": 1463,
		"slug": "salamanca",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Salamanca",
		"content": "Salamanca"
	}, {
		"id": 247,
		"slug": "salt-lake-city",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Salt Lake City",
		"content": "Salt Lake City"
	}, {
		"id": 1424,
		"slug": "saltillo",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Saltillo",
		"content": "Saltillo"
	}, {
		"id": 795,
		"slug": "salvador",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Salvador",
		"content": "Salvador"
	}, {
		"id": 1125,
		"slug": "samara",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Samara",
		"content": "Samara"
	}, {
		"id": 207,
		"slug": "san-antonio",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "San Antonio",
		"content": "San Antonio"
	}, {
		"id": 21,
		"slug": "san-diego",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "San Diego",
		"content": "San Diego"
	}, {
		"id": 1518,
		"slug": "san-fernando",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Trinidad and Tobago",
			"iso2": "TT"
		},
		"name": "San Fernando",
		"content": "San Fernando"
	}, {
		"id": 1,
		"slug": "san-francisco",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "San Francisco Bay Area",
		"content": "San Francisco Bay Area"
	}, {
		"id": 781,
		"slug": "san-jose",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Costa Rica",
			"iso2": "CR"
		},
		"name": "San Jose, Costa Rica",
		"content": "San Jose, Costa Rica"
	}, {
		"id": 592,
		"slug": "san-juan-pr",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "San Juan, PR",
		"content": "San Juan, PR"
	}, {
		"id": 191,
		"slug": "san-luis-obispo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "San Luis Obispo",
		"content": "San Luis Obispo"
	}, {
		"id": 1137,
		"slug": "san-luis-potosi",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "San Luis Potosi",
		"content": "San Luis Potosi"
	}, {
		"id": 1418,
		"slug": "san-miguel-de-allende",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "San Miguel de Allende",
		"content": "San Miguel de Allende"
	}, {
		"id": 181,
		"slug": "santa-barbara",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Santa Barbara",
		"content": "Santa Barbara"
	}, {
		"id": 1025,
		"slug": "santa-cruz",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Bolivia",
			"iso2": "BO"
		},
		"name": "Santa Cruz, BO",
		"content": "Santa Cruz, BO"
	}, {
		"id": 449,
		"slug": "santa-fe",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Santa Fe",
		"content": "Santa Fe"
	}, {
		"id": 1153,
		"slug": "santa-marta",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Santa Marta",
		"content": "Santa Marta"
	}, {
		"id": 148,
		"slug": "santiago",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "Santiago",
		"content": "Santiago"
	}, {
		"id": 1175,
		"slug": "santiago-rd",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Dominican Republic",
			"iso2": "DO"
		},
		"name": "Santiago de los Caballeros",
		"content": "Santiago de los Caballeros"
	}, {
		"id": 827,
		"slug": "santo-domingo",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Dominican Republic",
			"iso2": "DO"
		},
		"name": "Santo Domingo",
		"content": "Santo Domingo"
	}, {
		"id": 1449,
		"slug": "santos",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Santos",
		"content": "Santos"
	}, {
		"id": 1400,
		"slug": "sao-jose-do-rio-preto",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Sao Jose do Rio Preto",
		"content": "Sao Jose do Rio Preto"
	}, {
		"id": 1321,
		"slug": "sao-jose-dos-campos",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Sao Jose dos Campos",
		"content": "Sao Jose dos Campos"
	}, {
		"id": 1315,
		"slug": "sao-luis",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Sao Luis",
		"content": "Sao Luis"
	}, {
		"id": 458,
		"slug": "sao-paulo",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "São Paulo",
		"content": "São Paulo"
	}, {
		"id": 331,
		"slug": "sarasota",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Sarasota",
		"content": "Sarasota"
	}, {
		"id": 238,
		"slug": "savannah",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Savannah-Hilton Head",
		"content": "Savannah-Hilton Head"
	}, {
		"id": 10,
		"slug": "seattle",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Seattle",
		"content": "Seattle"
	}, {
		"id": 89,
		"slug": "seoul",
		"region": "regions.east-asia",
		"country": {
			"name": "Korea, Republic of (South Korea)",
			"iso2": "KR"
		},
		"name": "Seoul",
		"content": "Seoul"
	}, {
		"id": 452,
		"slug": "sheffield",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Sheffield",
		"content": "Sheffield"
	}, {
		"id": 1091,
		"slug": "silesia",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Silesia",
		"content": "Silesia"
	}, {
		"id": 1045,
		"slug": "sincelejo",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Sincelejo",
		"content": "Sincelejo"
	}, {
		"id": 44,
		"slug": "singapore",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Singapore",
			"iso2": "SG"
		},
		"name": "Singapore",
		"content": "Singapore"
	}, {
		"id": 999,
		"slug": "sochi",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Sochi",
		"content": "Sochi"
	}, {
		"id": 1319,
		"slug": "sorocaba",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Sorocaba",
		"content": "Sorocaba"
	}, {
		"id": 368,
		"slug": "south-bend",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "South Bend",
		"content": "South Bend"
	}, {
		"id": 454,
		"slug": "portsmouth",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "South Coast, UK",
		"content": "South Coast, UK"
	}, {
		"id": 608,
		"slug": "bristol",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "South West, UK",
		"content": "South West, UK"
	}, {
		"id": 1351,
		"slug": "st-george",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Southern Utah",
		"content": "Southern Utah"
	}, {
		"id": 269,
		"slug": "spokane",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Spokane",
		"content": "Spokane"
	}, {
		"id": 374,
		"slug": "springfield-il",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Springfield, IL",
		"content": "Springfield, IL"
	}, {
		"id": 378,
		"slug": "springfield-mo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Springfield, Mo",
		"content": "Springfield, Mo"
	}, {
		"id": 189,
		"slug": "st-louis",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "St Louis",
		"content": "St Louis"
	}, {
		"id": 278,
		"slug": "state-college",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "State College",
		"content": "State College"
	}, {
		"id": 352,
		"slug": "stillwater",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Stillwater",
		"content": "Stillwater"
	}, {
		"id": 36,
		"slug": "stockholm",
		"region": "regions.europe",
		"country": {
			"name": "Sweden",
			"iso2": "SE"
		},
		"name": "Stockholm",
		"content": "Stockholm"
	}, {
		"id": 1143,
		"slug": "stoke",
		"region": "regions.europe",
		"country": {
			"name": "United Kingdom",
			"iso2": "GB"
		},
		"name": "Stoke",
		"content": "Stoke"
	}, {
		"id": 479,
		"slug": "strasbourg",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Strasbourg",
		"content": "Strasbourg"
	}, {
		"id": 639,
		"slug": "sunshine-coast",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Sunshine Coast",
		"content": "Sunshine Coast"
	}, {
		"id": 637,
		"slug": "surabaya",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Indonesia",
			"iso2": "ID"
		},
		"name": "Surabaya",
		"content": "Surabaya"
	}, {
		"id": 761,
		"slug": "surat",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Surat",
		"content": "Surat"
	}, {
		"id": 31,
		"slug": "sydney",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Sydney",
		"content": "Sydney"
	}, {
		"id": 232,
		"slug": "tacoma",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tacoma",
		"content": "Tacoma"
	}, {
		"id": 965,
		"slug": "taichung",
		"region": "regions.east-asia",
		"country": {
			"name": "Taiwan (ROC)",
			"iso2": "TW"
		},
		"name": "Taichung",
		"content": "Taichung"
	}, {
		"id": 94,
		"slug": "taipei",
		"region": "regions.east-asia",
		"country": {
			"name": "Taiwan (ROC)",
			"iso2": "TW"
		},
		"name": "Taipei",
		"content": "Taipei"
	}, {
		"id": 312,
		"slug": "tallahassee",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tallahassee",
		"content": "Tallahassee"
	}, {
		"id": 636,
		"slug": "tallinn",
		"region": "regions.europe",
		"country": {
			"name": "Estonia",
			"iso2": "EE"
		},
		"name": "Tallinn",
		"content": "Tallinn"
	}, {
		"id": 27,
		"slug": "tampa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tampa Bay",
		"content": "Tampa Bay"
	}, {
		"id": 991,
		"slug": "taos",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Taos",
		"content": "Taos"
	}, {
		"id": 309,
		"slug": "tel-aviv",
		"region": "regions.middle-east",
		"country": {
			"name": "Israel",
			"iso2": "IL"
		},
		"name": "Tel Aviv",
		"content": "Tel Aviv"
	}, {
		"id": 1495,
		"slug": "temuco",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "Temuco",
		"content": "Temuco"
	}, {
		"id": 1399,
		"slug": "teresina",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Teresina",
		"content": "Teresina"
	}, {
		"id": 11,
		"slug": "hamptons",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "the Hamptons",
		"content": "the Hamptons"
	}, {
		"id": 749,
		"slug": "thiruvananthapuram",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Thiruvananthapuram",
		"content": "Thiruvananthapuram"
	}, {
		"id": 218,
		"slug": "tijuana",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Tijuana",
		"content": "Tijuana"
	}, {
		"id": 1520,
		"slug": "timisoara",
		"region": "regions.europe",
		"country": {
			"name": "Romania",
			"iso2": "RO"
		},
		"name": "Timisoara",
		"content": "Timisoara"
	}, {
		"id": 129,
		"slug": "tokyo",
		"region": "regions.east-asia",
		"country": {
			"name": "Japan",
			"iso2": "JP"
		},
		"name": "Tokyo",
		"content": "Tokyo"
	}, {
		"id": 298,
		"slug": "toledo",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Toledo",
		"content": "Toledo"
	}, {
		"id": 961,
		"slug": "toluca",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Toluca",
		"content": "Toluca"
	}, {
		"id": 641,
		"slug": "toowoomba",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "Australia",
			"iso2": "AU"
		},
		"name": "Toowoomba",
		"content": "Toowoomba"
	}, {
		"id": 357,
		"slug": "topeka",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Topeka",
		"content": "Topeka"
	}, {
		"id": 13,
		"slug": "toronto",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Toronto",
		"content": "Toronto"
	}, {
		"id": 1423,
		"slug": "torreon",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Torreon",
		"content": "Torreon"
	}, {
		"id": 265,
		"slug": "toulouse",
		"region": "regions.europe",
		"country": {
			"name": "France",
			"iso2": "FR"
		},
		"name": "Toulouse",
		"content": "Toulouse"
	}, {
		"id": 1001,
		"slug": "tricities",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tri-Cities",
		"content": "Tri-Cities"
	}, {
		"id": 653,
		"slug": "gdansk",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Trojmiasto",
		"content": "Trojmiasto"
	}, {
		"id": 48,
		"slug": "tucson",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tucson",
		"content": "Tucson"
	}, {
		"id": 183,
		"slug": "tulsa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tulsa",
		"content": "Tulsa"
	}, {
		"id": 325,
		"slug": "tuscaloosa",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tuscaloosa",
		"content": "Tuscaloosa"
	}, {
		"id": 833,
		"slug": "tyler",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Tyler",
		"content": "Tyler"
	}, {
		"id": 1331,
		"slug": "uberaba",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Uberaba",
		"content": "Uberaba"
	}, {
		"id": 1329,
		"slug": "uberlandia",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Uberlandia",
		"content": "Uberlandia"
	}, {
		"id": 757,
		"slug": "udaipur",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Udaipur",
		"content": "Udaipur"
	}, {
		"id": 907,
		"slug": "ufa",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Ufa",
		"content": "Ufa"
	}, {
		"id": 1542,
		"slug": "upstate-ny",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Upstate NY",
		"content": "Upstate NY"
	}, {
		"id": 775,
		"slug": "vadodara",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Vadodara",
		"content": "Vadodara"
	}, {
		"id": 1071,
		"slug": "valledupar",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Valledupar",
		"content": "Valledupar"
	}, {
		"id": 1356,
		"slug": "valparaiso",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Chile",
			"iso2": "CL"
		},
		"name": "Valparaiso",
		"content": "Valparaiso"
	}, {
		"id": 241,
		"slug": "ventura",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Ventura",
		"content": "Ventura"
	}, {
		"id": 282,
		"slug": "burlington",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Vermont",
		"content": "Vermont"
	}, {
		"id": 224,
		"slug": "vienna",
		"region": "regions.europe",
		"country": {
			"name": "Austria",
			"iso2": "AT"
		},
		"name": "Vienna",
		"content": "Vienna"
	}, {
		"id": 1422,
		"slug": "villahermosa",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Villahermosa",
		"content": "Villahermosa"
	}, {
		"id": 1049,
		"slug": "villavicencio",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Colombia",
			"iso2": "CO"
		},
		"name": "Villavicencio",
		"content": "Villavicencio"
	}, {
		"id": 606,
		"slug": "vilnius",
		"region": "regions.europe",
		"country": {
			"name": "Lithuania",
			"iso2": "LT"
		},
		"name": "Vilnius",
		"content": "Vilnius"
	}, {
		"id": 771,
		"slug": "visakhapatnam",
		"region": "regions.south-asia",
		"country": {
			"name": "India",
			"iso2": "IN"
		},
		"name": "Visakhapatnam",
		"content": "Visakhapatnam"
	}, {
		"id": 933,
		"slug": "vitoria",
		"region": "regions.central-and-south-america",
		"country": {
			"name": "Brazil",
			"iso2": "BR"
		},
		"name": "Vitoria",
		"content": "Vitoria"
	}, {
		"id": 1117,
		"slug": "voronezh",
		"region": "regions.europe",
		"country": {
			"name": "Russia",
			"iso2": "RU"
		},
		"name": "Voronezh",
		"content": "Voronezh"
	}, {
		"id": 257,
		"slug": "waco",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Waco",
		"content": "Waco"
	}, {
		"id": 459,
		"slug": "warsaw",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Warsaw",
		"content": "Warsaw"
	}, {
		"id": 8,
		"slug": "washington-DC",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Washington D.C.",
		"content": "Washington D.C."
	}, {
		"id": 299,
		"slug": "wellington",
		"region": "regions.australia-and-new-zealand",
		"country": {
			"name": "New Zealand",
			"iso2": "NZ"
		},
		"name": "Wellington",
		"content": "Wellington"
	}, {
		"id": 1343,
		"slug": "west-lafayette",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "West Lafayette",
		"content": "West Lafayette"
	}, {
		"id": 989,
		"slug": "western-arizona",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Western Arizona",
		"content": "Western Arizona"
	}, {
		"id": 446,
		"slug": "springfield-ma",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Western MA",
		"content": "Western MA"
	}, {
		"id": 304,
		"slug": "wichita",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Wichita",
		"content": "Wichita"
	}, {
		"id": 332,
		"slug": "wilkesbarre-scranton",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Wilkes-Barre Scranton",
		"content": "Wilkes-Barre Scranton"
	}, {
		"id": 321,
		"slug": "wilmington-nc",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Wilmington, NC",
		"content": "Wilmington, NC"
	}, {
		"id": 396,
		"slug": "windsor",
		"region": "regions.north-america",
		"country": {
			"name": "Canada",
			"iso2": "CA"
		},
		"name": "Windsor",
		"content": "Windsor"
	}, {
		"id": 286,
		"slug": "worcester",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Worcester",
		"content": "Worcester"
	}, {
		"id": 937,
		"slug": "wroclaw",
		"region": "regions.europe",
		"country": {
			"name": "Poland",
			"iso2": "PL"
		},
		"name": "Wroclaw",
		"content": "Wroclaw"
	}, {
		"id": 1525,
		"slug": "yogyakarta",
		"region": "regions.southeast-asia",
		"country": {
			"name": "Indonesia",
			"iso2": "ID"
		},
		"name": "Yogyakarta",
		"content": "Yogyakarta"
	}, {
		"id": 1455,
		"slug": "yorkgettysburg",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "York-Gettysburg",
		"content": "York-Gettysburg"
	}, {
		"id": 1339,
		"slug": "youngstown",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Youngstown",
		"content": "Youngstown"
	}, {
		"id": 600,
		"slug": "yuma",
		"region": "regions.north-america",
		"country": {
			"name": "United States",
			"iso2": "US"
		},
		"name": "Yuma",
		"content": "Yuma"
	}, {
		"id": 1435,
		"slug": "zacatecas",
		"region": "regions.north-america",
		"country": {
			"name": "Mexico",
			"iso2": "MX"
		},
		"name": "Zacatecas",
		"content": "Zacatecas"
	}, {
		"id": 913,
		"slug": "zagreb",
		"region": "regions.europe",
		"country": {
			"name": "Croatia",
			"iso2": "HR"
		},
		"name": "Zagreb",
		"content": "Zagreb"
	}, {
		"id": 47,
		"slug": "zurich",
		"region": "regions.europe",
		"country": {
			"name": "Switzerland",
			"iso2": "CH"
		},
		"name": "Zurich",
		"content": "Zurich"
	}]
"""
json_obj = json.loads(input_json);
for x in json_obj:
	print x['name'].encode('utf-8').strip()
