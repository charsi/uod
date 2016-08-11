// http://codepen.io/anon/pen/xOmQKO

var petrolPrices =  [
  {
    name: "Kuwait",
    costindollar: 0.21,
    country_code: "KW",
    costinlocalcurrency: 0.06,
    currency_code: "KWD"
  },
  {
    name: "Saudi Arabia",
    costindollar: 0.24,
    country_code: "SA",
    costinlocalcurrency: 0.9,
    currency_code: "SAR"
  },
  {
    name: "Turkmenistan",
    costindollar: 0.28,
    country_code: "TM",
    costinlocalcurrency: 0.95,
    currency_code: "TMT"
  },
  {
    name: "Algeria",
    costindollar: 0.28,
    country_code: "DZ",
    costinlocalcurrency: 30.75,
    currency_code: "DZD"
  },
  {
    name: "Qatar",
    costindollar: 0.39,
    country_code: "QA",
    costinlocalcurrency: 1.42,
    currency_code: "QAR"
  },
  {
    name: "Ecuador",
    costindollar: 0.39,
    country_code: "EC",
    costinlocalcurrency: 0,
    currency_code: "ECS"
  },
  {
    name: "Iran",
    costindollar: 0.39,
    country_code: "IR",
    costinlocalcurrency: 11721.84,
    currency_code: "IRR"
  },
  {
    name: "Bahrain",
    costindollar: 0.41,
    country_code: "BH",
    costinlocalcurrency: 0.15,
    currency_code: "BHD"
  },
  {
    name: "Kazakhstan",
    costindollar: 0.41,
    country_code: "KZ",
    costinlocalcurrency: 141.98,
    currency_code: "KZT"
  },
  {
    name: "Oman",
    costindollar: 0.42,
    country_code: "OM",
    costinlocalcurrency: 0.16,
    currency_code: "OMR"
  },
  {
    name: "Malaysia",
    costindollar: 0.44,
    country_code: "MY",
    costinlocalcurrency: 1.76,
    currency_code: "MYR"
  },
  {
    name: "UA Emirates",
    costindollar: 0.44,
    country_code: "AE",
    costinlocalcurrency: 1.62,
    currency_code: "AED"
  },
  {
    name: "Nigeria",
    costindollar: 0.5,
    country_code: "NG",
    costinlocalcurrency: 160,
    currency_code: "NGN"
  },
  {
    name: "Azerbaijan",
    costindollar: 0.51,
    country_code: "AZ",
    costinlocalcurrency: 0.82,
    currency_code: "AZN"
  },
  {
    name: "Bolivia",
    costindollar: 0.52,
    country_code: "BO",
    costinlocalcurrency: 3.57,
    currency_code: "BOB"
  },
  {
    name: "Tr.&Tobago",
    costindollar: 0.53,
    country_code: "TT",
    costinlocalcurrency: 3.53,
    currency_code: "TTD"
  },
  {
    name: "Afghanistan",
    costindollar: 0.54,
    country_code: "AF",
    costinlocalcurrency: 36.61,
    currency_code: "AFN"
  },
  {
    name: "Kyrgyzstan",
    costindollar: 0.57,
    country_code: "KG",
    costinlocalcurrency: 39.23,
    currency_code: "KGS"
  },
  {
    name: "Burma",
    costindollar: 0.57,
    country_code: "MM",
    costinlocalcurrency: 672.03,
    currency_code: "MMK"
  },
  {
    name: "Russia",
    costindollar: 0.58,
    country_code: "RU",
    costinlocalcurrency: 37.29,
    currency_code: "RUB"
  },
  {
    name: "Belarus",
    costindollar: 0.59,
    country_code: "BY",
    costinlocalcurrency: 11811.8,
    currency_code: "BYR"
  },
  {
    name: "Indonesia",
    costindollar: 0.59,
    country_code: "ID",
    costinlocalcurrency: 7736.67,
    currency_code: "IDR"
  },
  {
    name: "Suriname",
    costindollar: 0.59,
    country_code: "SR",
    costinlocalcurrency: 4.22,
    currency_code: "SRD"
  },
  {
    name: "Venezuela",
    costindollar: 0.6,
    country_code: "VE",
    costinlocalcurrency: 5.99,
    currency_code: "VEF"
  },
  {
    name: "Pakistan",
    costindollar: 0.61,
    country_code: "PK",
    costinlocalcurrency: 63.74,
    currency_code: "PKR"
  },
  {
    name: "Puerto Rico",
    costindollar: 0.62,
    country_code: "PR",
    costinlocalcurrency: 0.62,
    currency_code: "USD"
  },
  {
    name: "Iraq",
    costindollar: 0.62,
    country_code: "IQ",
    costinlocalcurrency: 723.54,
    currency_code: "IQD"
  },
  {
    name: "Maldives",
    costindollar: 0.63,
    country_code: "MV",
    costinlocalcurrency: 9.42,
    currency_code: "MVR"
  },
  {
    name: "Am. Samoa",
    costindollar: 0.63,
    country_code: "AS",
    costinlocalcurrency: 0.57,
    currency_code: "EUR"
  },
  {
    name: "USA",
    costindollar: 0.63,
    country_code: "US",
    costinlocalcurrency: 0.63,
    currency_code: "USD"
  },
  {
    name: "Lebanon",
    costindollar: 0.66,
    country_code: "LB",
    costinlocalcurrency: 997.92,
    currency_code: "LBP"
  },
  {
    name: "Sierra Leone",
    costindollar: 0.66,
    country_code: "SL",
    costinlocalcurrency: 3696,
    currency_code: "SLL"
  },
  {
    name: "Colombia",
    costindollar: 0.67,
    country_code: "CO",
    costinlocalcurrency: 1961.09,
    currency_code: "COP"
  },
  {
    name: "Egypt",
    costindollar: 0.69,
    country_code: "EG",
    costinlocalcurrency: 6.11,
    currency_code: "EGP"
  },
  {
    name: "Botswana",
    costindollar: 0.69,
    country_code: "BW",
    costinlocalcurrency: 7.14,
    currency_code: "BWP"
  },
  {
    name: "Vietnam",
    costindollar: 0.7,
    country_code: "VN",
    costinlocalcurrency: 15610,
    currency_code: "VND"
  },
  {
    name: "Lesotho",
    costindollar: 0.7,
    country_code: "LS",
    costinlocalcurrency: 9.39,
    currency_code: "LSL"
  },
  {
    name: "Yemen",
    costindollar: 0.71,
    country_code: "YE",
    costinlocalcurrency: 177.32,
    currency_code: "YER"
  },
  {
    name: "Panama",
    costindollar: 0.72,
    country_code: "PA",
    costinlocalcurrency: 0.72,
    currency_code: "PAB"
  },
  {
    name: "Tajikistan",
    costindollar: 0.73,
    country_code: "TJ",
    costinlocalcurrency: 5.74,
    currency_code: "TJS"
  },
  {
    name: "Tunisia",
    costindollar: 0.73,
    country_code: "TN",
    costinlocalcurrency: 1.61,
    currency_code: "TND"
  },
  {
    name: "Guatemala",
    costindollar: 0.73,
    country_code: "GT",
    costinlocalcurrency: 5.49,
    currency_code: "GTQ"
  },
  {
    name: "Mozambique",
    costindollar: 0.74,
    country_code: "MZ",
    costinlocalcurrency: 51.06,
    currency_code: "MZN"
  },
  {
    name: "Benin",
    costindollar: 0.74,
    country_code: "BJ",
    costinlocalcurrency: 435.16,
    currency_code: "XOF"
  },
  {
    name: "Ethiopia",
    costindollar: 0.74,
    country_code: "ET",
    costinlocalcurrency: 16.14,
    currency_code: "ETB"
  },
  {
    name: "Namibia",
    costindollar: 0.74,
    country_code: "NA",
    costinlocalcurrency: 9.92,
    currency_code: "NAD"
  },
  {
    name: "Swaziland",
    costindollar: 0.74,
    country_code: "SZ",
    costinlocalcurrency: 9.93,
    currency_code: "SZL"
  },
  {
    name: "Sudan",
    costindollar: 0.75,
    country_code: "SD",
    costinlocalcurrency: 4.55,
    currency_code: "SDG"
  },
  {
    name: "El Salvador",
    costindollar: 0.75,
    country_code: "SV",
    costinlocalcurrency: 6.54,
    currency_code: "SVC"
  },
  {
    name: "Taiwan",
    costindollar: 0.76,
    country_code: "TW",
    costinlocalcurrency: 23.79,
    currency_code: "TWD"
  },
  {
    name: "Georgia",
    costindollar: 0.76,
    country_code: "GE",
    costinlocalcurrency: 1.78,
    currency_code: "GEL"
  },
  {
    name: "Togo",
    costindollar: 0.76,
    country_code: "TG",
    costinlocalcurrency: 446.92,
    currency_code: "XOF"
  },
  {
    name: "Cambodia",
    costindollar: 0.76,
    country_code: "KH",
    costinlocalcurrency: 3093.2,
    currency_code: "KHR"
  },
  {
    name: "Chad",
    costindollar: 0.76,
    country_code: "TD",
    costinlocalcurrency: 447.15,
    currency_code: "XAF"
  },
  {
    name: "Moldova",
    costindollar: 0.76,
    country_code: "MD",
    costinlocalcurrency: 14.92,
    currency_code: "MDL"
  },
  {
    name: "Haiti",
    costindollar: 0.77,
    country_code: "HT",
    costinlocalcurrency: 49.06,
    currency_code: "HTG"
  },
  {
    name: "Armenia",
    costindollar: 0.79,
    country_code: "AM",
    costinlocalcurrency: 376.2,
    currency_code: "AMD"
  },
  {
    name: "Mexico",
    costindollar: 0.81,
    country_code: "MX",
    costinlocalcurrency: 14.77,
    currency_code: "MXN"
  },
  {
    name: "Guyana",
    costindollar: 0.82,
    country_code: "GY",
    costinlocalcurrency: 168.1,
    currency_code: "GYD"
  },
  {
    name: "Philippines",
    costindollar: 0.82,
    country_code: "PH",
    costinlocalcurrency: 38.25,
    currency_code: "PHP"
  },
  {
    name: "Uzbekistan",
    costindollar: 0.83,
    country_code: "UZ",
    costinlocalcurrency: 2460.95,
    currency_code: "UZS"
  },
  {
    name: "Liberia",
    costindollar: 0.83,
    country_code: "LR",
    costinlocalcurrency: 74.7,
    currency_code: "LRD"
  },
  {
    name: "Gabon",
    costindollar: 0.84,
    country_code: "GA",
    costinlocalcurrency: 494.22,
    currency_code: "XAF"
  },
  {
    name: "Tanzania",
    costindollar: 0.84,
    country_code: "TZ",
    costinlocalcurrency: 1834.56,
    currency_code: "TZS"
  },
  {
    name: "Bhutan",
    costindollar: 0.85,
    country_code: "BT",
    costinlocalcurrency: 56.75,
    currency_code: "INR"
  },
  {
    name: "Fiji",
    costindollar: 0.85,
    country_code: "FJ",
    costinlocalcurrency: 1.76,
    currency_code: "FJD"
  },
  {
    name: "St. Vincent and the Grenadines",
    costindollar: 0.86,
    country_code: "VC",
    costinlocalcurrency: 2.32,
    currency_code: "XCD"
  },
  {
    name: "Thailand",
    costindollar: 0.86,
    country_code: "TH",
    costinlocalcurrency: 29.85,
    currency_code: "THB"
  },
  {
    name: "Canada",
    costindollar: 0.86,
    country_code: "CA",
    costinlocalcurrency: 1.12,
    currency_code: "CAD"
  },
  {
    name: "Nicaragua",
    costindollar: 0.86,
    country_code: "NI",
    costinlocalcurrency: 24.75,
    currency_code: "NIO"
  },
  {
    name: "Peru",
    costindollar: 0.87,
    country_code: "PE",
    costinlocalcurrency: 2.87,
    currency_code: "PEN"
  },
  {
    name: "Sri Lanka",
    costindollar: 0.88,
    country_code: "LK",
    costinlocalcurrency: 127.78,
    currency_code: "LKR"
  },
  {
    name: "Ukraine",
    costindollar: 0.88,
    country_code: "UA",
    costinlocalcurrency: 21.91,
    currency_code: "UAH"
  },
  {
    name: "Nepal",
    costindollar: 0.88,
    country_code: "NP",
    costinlocalcurrency: 93.63,
    currency_code: "NPR"
  },
  {
    name: "Bahamas",
    costindollar: 0.88,
    country_code: "BS",
    costinlocalcurrency: 0.88,
    currency_code: "BSD"
  },
  {
    name: "Niger",
    costindollar: 0.88,
    country_code: "NE",
    costinlocalcurrency: 517.48,
    currency_code: "XOF"
  },
  {
    name: "Br. Virgin Isl.",
    costindollar: 0.89,
    country_code: "VG",
    costinlocalcurrency: 0.89,
    currency_code: "USD"
  },
  {
    name: "Ghana",
    costindollar: 0.9,
    country_code: "GH",
    costinlocalcurrency: 0
  },
  {
    name: "South Africa",
    costindollar: 0.91,
    country_code: "ZA",
    costinlocalcurrency: 12.2,
    currency_code: "ZAR"
  },
  {
    name: "Australia",
    costindollar: 0.91,
    country_code: "AU",
    costinlocalcurrency: 1.18,
    currency_code: "AUD"
  },
  {
    name: "Kenya",
    costindollar: 0.91,
    country_code: "KE",
    costinlocalcurrency: 92.23,
    currency_code: "KES"
  },
  {
    name: "R. of Congo",
    costindollar: 0.92,
    country_code: "",
    costinlocalcurrency: 0
  },
  {
    name: "China",
    costindollar: 0.92,
    country_code: "CN",
    costinlocalcurrency: 6.09,
    currency_code: "CNY"
  },
  {
    name: "Uganda",
    costindollar: 0.93,
    country_code: "UG",
    costinlocalcurrency: 3132.24,
    currency_code: "UGX"
  },
  {
    name: "Dominica",
    costindollar: 0.93,
    country_code: "DM",
    costinlocalcurrency: 2.51,
    currency_code: "XCD"
  },
  {
    name: "Honduras",
    costindollar: 0.93,
    country_code: "HN",
    costinlocalcurrency: 21.16,
    currency_code: "HNL"
  },
  {
    name: "Mongolia",
    costindollar: 0.94,
    country_code: "MN",
    costinlocalcurrency: 2002.2,
    currency_code: "MNT"
  },
  {
    name: "St. K.&Nevis",
    costindollar: 0.95,
    country_code: "KN",
    costinlocalcurrency: 2.56,
    currency_code: "XCD"
  },
  {
    name: "India",
    costindollar: 0.95,
    country_code: "IN",
    costinlocalcurrency: 63.42,
    currency_code: "INR"
  },
  {
    name: "Angola",
    costindollar: 0.95,
    country_code: "AO",
    costinlocalcurrency: 0
  },
  {
    name: "Ivory Coast",
    costindollar: 0.95,
    country_code: "",
    costinlocalcurrency: 0
  },
  {
    name: "Aruba",
    costindollar: 0.95,
    country_code: "AW",
    costinlocalcurrency: 1.68,
    currency_code: "ANG"
  },
  {
    name: "Guinea",
    costindollar: 0.97,
    country_code: "GN",
    costinlocalcurrency: 8633,
    currency_code: "GNF"
  },
  {
    name: "Jamaica",
    costindollar: 1,
    country_code: "JM",
    costinlocalcurrency: 126.34,
    currency_code: "JMD"
  },
  {
    name: "Jordan",
    costindollar: 1,
    country_code: "JO",
    costinlocalcurrency: 0.71,
    currency_code: "JOD"
  },
  {
    name: "Burkina Faso",
    costindollar: 1.01,
    country_code: "BF",
    costinlocalcurrency: 593.93,
    currency_code: "XOF"
  },
  {
    name: "Syria",
    costindollar: 1.02,
    country_code: "SY",
    costinlocalcurrency: 219.25,
    currency_code: "SYP"
  },
  {
    name: "Zambia",
    costindollar: 1.02,
    country_code: "ZM",
    costinlocalcurrency: 5259.22,
    currency_code: "ZMK"
  },
  {
    name: "Bosnia & Herz.",
    costindollar: 1.02,
    country_code: "BA",
    costinlocalcurrency: 0
  },
  {
    name: "Ant.& Barb.",
    costindollar: 1.02,
    country_code: "AG",
    costinlocalcurrency: 2.75,
    currency_code: "XCD"
  },
  {
    name: "Morocco",
    costindollar: 1.03,
    country_code: "MA",
    costinlocalcurrency: 10.04,
    currency_code: "MAD"
  },
  {
    name: "Cape Verde",
    costindollar: 1.04,
    country_code: "CV",
    costinlocalcurrency: 103.38,
    currency_code: "CVE"
  },
  {
    name: "Paraguay",
    costindollar: 1.04,
    country_code: "PY",
    costinlocalcurrency: 5732.48,
    currency_code: "PYG"
  },
  {
    name: "Mauritius",
    costindollar: 1.04,
    country_code: "MU",
    costinlocalcurrency: 36.5,
    currency_code: "MUR"
  },
  {
    name: "Costa Rica",
    costindollar: 1.04,
    country_code: "CR",
    costinlocalcurrency: 565.34,
    currency_code: "CRC"
  },
  {
    name: "Macedonia",
    costindollar: 1.05,
    country_code: "MK",
    costinlocalcurrency: 57.77,
    currency_code: "MKD"
  },
  {
    name: "Saint Lucia",
    costindollar: 1.06,
    country_code: "LC",
    costinlocalcurrency: 2.86,
    currency_code: "XCD"
  },
  {
    name: "Cameroon",
    costindollar: 1.07,
    country_code: "CM",
    costinlocalcurrency: 629.55,
    currency_code: "XAF"
  },
  {
    name: "Laos",
    costindollar: 1.08,
    country_code: "LA",
    costinlocalcurrency: 8737.2,
    currency_code: "LAK"
  },
  {
    name: "Domin. Rep.",
    costindollar: 1.08,
    country_code: "DO",
    costinlocalcurrency: 49.64,
    currency_code: "DOP"
  },
  {
    name: "Malawi",
    costindollar: 1.08,
    country_code: "MW",
    costinlocalcurrency: 768.34,
    currency_code: "MWK"
  },
  {
    name: "Bulgaria",
    costindollar: 1.09,
    country_code: "BG",
    costinlocalcurrency: 1.91,
    currency_code: "BGN"
  },
  {
    name: "Bangladesh",
    costindollar: 1.1,
    country_code: "BD",
    costinlocalcurrency: 86.16,
    currency_code: "BDT"
  },
  {
    name: "Andorra",
    costindollar: 1.11,
    country_code: "AD",
    costinlocalcurrency: 1,
    currency_code: "EUR"
  },
  {
    name: "Chile",
    costindollar: 1.11,
    country_code: "CL",
    costinlocalcurrency: 712.95,
    currency_code: "CLP"
  },
  {
    name: "Rwanda",
    costindollar: 1.12,
    country_code: "RW",
    costinlocalcurrency: 885.35,
    currency_code: "RWF"
  },
  {
    name: "Madagascar",
    costindollar: 1.13,
    country_code: "MG",
    costinlocalcurrency: 3396.78,
    currency_code: "MGA"
  },
  {
    name: "Cayman Isl.",
    costindollar: 1.13,
    country_code: "KY",
    costinlocalcurrency: 0.93,
    currency_code: "KYD"
  },
  {
    name: "Poland",
    costindollar: 1.13,
    country_code: "PL",
    costinlocalcurrency: 4.32,
    currency_code: "PLN"
  },
  {
    name: "Mali",
    costindollar: 1.14,
    country_code: "ML",
    costinlocalcurrency: 670.38,
    currency_code: "XOF"
  },
  {
    name: "Belize",
    costindollar: 1.14,
    country_code: "BZ",
    costinlocalcurrency: 2.26,
    currency_code: "BZD"
  },
  {
    name: "Grenada",
    costindollar: 1.14,
    country_code: "GD",
    costinlocalcurrency: 3.07,
    currency_code: "XCD"
  },
  {
    name: "Senegal",
    costindollar: 1.16,
    country_code: "SN",
    costinlocalcurrency: 682.14,
    currency_code: "XOF"
  },
  {
    name: "Hungary",
    costindollar: 1.16,
    country_code: "HU",
    costinlocalcurrency: 322.38,
    currency_code: "HUF"
  },
  {
    name: "Brazil",
    costindollar: 1.17,
    country_code: "BR",
    costinlocalcurrency: 3.67,
    currency_code: "BRL"
  },
  {
    name: "Lithuania",
    costindollar: 1.17,
    country_code: "LT",
    costinlocalcurrency: 3.57,
    currency_code: "LTL"
  },
  {
    name: "Japan",
    costindollar: 1.17,
    country_code: "JP",
    costinlocalcurrency: 119.3,
    currency_code: "JPY"
  },
  {
    name: "Latvia",
    costindollar: 1.17,
    country_code: "LV",
    costinlocalcurrency: 0.73,
    currency_code: "LVL"
  },
  {
    name: "Burundi",
    costindollar: 1.17,
    country_code: "BI",
    costinlocalcurrency: 1929.97,
    currency_code: "BIF"
  },
  {
    name: "Estonia",
    costindollar: 1.17,
    country_code: "EE",
    costinlocalcurrency: 16.42,
    currency_code: "EEK"
  },
  {
    name: "Romania",
    costindollar: 1.18,
    country_code: "RO",
    costinlocalcurrency: 4.72,
    currency_code: "RON"
  },
  {
    name: "Argentina",
    costindollar: 1.18,
    country_code: "AR",
    costinlocalcurrency: 17.29,
    currency_code: "ARS"
  },
  {
    name: "Luxembourg",
    costindollar: 1.19,
    country_code: "LU",
    costinlocalcurrency: 1.07,
    currency_code: "EUR"
  },
  {
    name: "Gambia",
    costindollar: 1.2,
    country_code: "GM",
    costinlocalcurrency: 50.52,
    currency_code: "GMD"
  },
  {
    name: "Serbia",
    costindollar: 1.21,
    country_code: "RS",
    costinlocalcurrency: 0
  },
  {
    name: "Czech Rep.",
    costindollar: 1.21,
    country_code: "CZ",
    costinlocalcurrency: 29.35,
    currency_code: "CZK"
  },
  {
    name: "Vanuatu",
    costindollar: 1.21,
    country_code: "VU",
    costinlocalcurrency: 126.44,
    currency_code: "VUV"
  },
  {
    name: "Montenegro",
    costindollar: 1.21,
    country_code: "ME",
    costinlocalcurrency: 0
  },
  {
    name: "Mauritania",
    costindollar: 1.23,
    country_code: "MR",
    costinlocalcurrency: 434.19,
    currency_code: "MRO"
  },
  {
    name: "Austria",
    costindollar: 1.23,
    country_code: "AT",
    costinlocalcurrency: 1.1,
    currency_code: "EUR"
  },
  {
    name: "Spain",
    costindollar: 1.25,
    country_code: "ES",
    costinlocalcurrency: 1.12,
    currency_code: "EUR"
  },
  {
    name: "Albania",
    costindollar: 1.25,
    country_code: "AL",
    costinlocalcurrency: 152.39,
    currency_code: "ALL"
  },
  {
    name: "Zimbabwe",
    costindollar: 1.27,
    country_code: "ZW",
    costinlocalcurrency: 0,
    currency_code: "ZWD"
  },
  {
    name: "Cyprus",
    costindollar: 1.27,
    country_code: "CY",
    costinlocalcurrency: 0,
    currency_code: "CYP"
  },
  {
    name: "South Korea",
    costindollar: 1.29,
    country_code: "KR",
    costinlocalcurrency: 1417.07,
    currency_code: "KRW"
  },
  {
    name: "Slovenia",
    costindollar: 1.31,
    country_code: "SI",
    costinlocalcurrency: 1.18,
    currency_code: "EUR"
  },
  {
    name: "Croatia",
    costindollar: 1.31,
    country_code: "HR",
    costinlocalcurrency: 8.77,
    currency_code: "HRK"
  },
  {
    name: "Cuba",
    costindollar: 1.33,
    country_code: "CU",
    costinlocalcurrency: 1.33,
    currency_code: "CUP"
  },
  {
    name: "Slovakia",
    costindollar: 1.34,
    country_code: "SK",
    costinlocalcurrency: 0,
    currency_code: "SKK"
  },
  {
    name: "Singapore",
    costindollar: 1.34,
    country_code: "SG",
    costinlocalcurrency: 1.8,
    currency_code: "SGD"
  },
  {
    name: "New Zealand",
    costindollar: 1.34,
    country_code: "NZ",
    costinlocalcurrency: 1.86,
    currency_code: "NZD"
  },
  {
    name: "Uruguay",
    costindollar: 1.35,
    country_code: "UY",
    costinlocalcurrency: 38.88,
    currency_code: "UYU"
  },
  {
    name: "Liechtenstein",
    costindollar: 1.38,
    country_code: "LI",
    costinlocalcurrency: 1.35,
    currency_code: "CHF"
  },
  {
    name: "Belgium",
    costindollar: 1.39,
    country_code: "BE",
    costinlocalcurrency: 1.25,
    currency_code: "EUR"
  },
  {
    name: "Barbados",
    costindollar: 1.4,
    country_code: "BB",
    costinlocalcurrency: 2.8,
    currency_code: "BBD"
  },
  {
    name: "Ireland",
    costindollar: 1.42,
    country_code: "IE",
    costinlocalcurrency: 1.27,
    currency_code: "EUR"
  },
  {
    name: "France",
    costindollar: 1.43,
    country_code: "FR",
    costinlocalcurrency: 1.28,
    currency_code: "EUR"
  },
  {
    name: "Germany",
    costindollar: 1.43,
    country_code: "DE",
    costinlocalcurrency: 1.28,
    currency_code: "EUR"
  },
  {
    name: "Malta",
    costindollar: 1.43,
    country_code: "MT",
    costinlocalcurrency: 0,
    currency_code: "MTL"
  },
  {
    name: "UK",
    costindollar: 1.43,
    country_code: "GB",
    costinlocalcurrency: 1.1,
    currency_code: "GBP"
  },
  {
    name: "Turkey",
    costindollar: 1.46,
    country_code: "TR",
    costinlocalcurrency: 4.32,
    currency_code: "TRY"
  },
  {
    name: "Switzerland",
    costindollar: 1.47,
    country_code: "CH",
    costinlocalcurrency: 1.43,
    currency_code: "CHF"
  },
  {
    name: "Finland",
    costindollar: 1.51,
    country_code: "FI",
    costinlocalcurrency: 1.36,
    currency_code: "EUR"
  },
  {
    name: "Portugal",
    costindollar: 1.51,
    country_code: "PT",
    costinlocalcurrency: 1.36,
    currency_code: "EUR"
  },
  {
    name: "Sweden",
    costindollar: 1.52,
    country_code: "SE",
    costinlocalcurrency: 12.88,
    currency_code: "SEK"
  },
  {
    name: "Mayotte",
    costindollar: 1.54,
    country_code: "YT",
    costinlocalcurrency: 1.38,
    currency_code: "EUR"
  },
  {
    name: "Israel",
    costindollar: 1.54,
    country_code: "IL",
    costinlocalcurrency: 5.87,
    currency_code: "ILS"
  },
  {
    name: "San Marino",
    costindollar: 1.57,
    country_code: "SM",
    costinlocalcurrency: 1.41,
    currency_code: "EUR"
  },
  {
    name: "Greece",
    costindollar: 1.57,
    country_code: "GR",
    costinlocalcurrency: 1.41,
    currency_code: "EUR"
  },
  {
    name: "Denmark",
    costindollar: 1.58,
    country_code: "DK",
    costinlocalcurrency: 10.55,
    currency_code: "DKK"
  },
  {
    name: "Italy",
    costindollar: 1.6,
    country_code: "IT",
    costinlocalcurrency: 1.44,
    currency_code: "EUR"
  },
  {
    name: "Iceland",
    costindollar: 1.61,
    country_code: "IS",
    costinlocalcurrency: 190.93,
    currency_code: "ISK"
  },
  {
    name: "Netherlands",
    costindollar: 1.62,
    country_code: "NL",
    costinlocalcurrency: 1.45,
    currency_code: "EUR"
  },
  {
    name: "Monaco",
    costindollar: 1.64,
    country_code: "MC",
    costinlocalcurrency: 1.47,
    currency_code: "EUR"
  },
  {
    name: "Norway",
    costindollar: 1.74,
    country_code: "NO",
    costinlocalcurrency: 14.33,
    currency_code: "NOK"
  },
  {
    name: "Hong Kong",
    costindollar: 1.83,
    country_code: "HK",
    costinlocalcurrency: 14.19,
    currency_code: "HKD"
  }
]