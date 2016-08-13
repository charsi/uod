
// prices in USD from -- http://www.globalpetrolprices.com/gasoline_prices/

// drop data into google spreadsheet, convert to csv. convert csv to json with

// Get country codes and relate them back to country names -- http://codepen.io/anon/pen/LkrgpP

// Get exchange rates and calculate price in local currency -- http://codepen.io/anon/pen/xOmQKO


 var priceList = {
    "Kuwait": 0.21,
    "Saudi Arabia": 0.24,
    "Turkmenistan": 0.28,
    "Algeria": 0.28,
    "Qatar": 0.39,
    "Ecuador": 0.39,
    "Iran": 0.39,
    "Bahrain": 0.41,
    "Kazakhstan": 0.41,
    "Oman": 0.42,
    "Malaysia": 0.44,
    "UA Emirates": 0.44,
    "Nigeria": 0.5,
    "Azerbaijan": 0.51,
    "Bolivia": 0.52,
    "Tr.&Tobago": 0.53,
    "Afghanistan": 0.54,
    "Kyrgyzstan": 0.57,
    "Burma": 0.57,
    "Russia": 0.58,
    "Belarus": 0.59,
    "Indonesia": 0.59,
    "Suriname": 0.59,
    "Venezuela": 0.6,
    "Pakistan": 0.61,
    "Puerto Rico": 0.62,
    "Iraq": 0.62,
    "Maldives": 0.63,
    "Am. Samoa": 0.63,
    "USA": 0.63,
    "Lebanon": 0.66,
    "Sierra Leone": 0.66,
    "Colombia": 0.67,
    "Egypt": 0.69,
    "Botswana": 0.69,
    "Vietnam": 0.7,
    "Lesotho": 0.7,
    "Yemen": 0.71,
    "Panama": 0.72,
    "Tajikistan": 0.73,
    "Tunisia": 0.73,
    "Guatemala": 0.73,
    "Mozambique": 0.74,
    "Benin": 0.74,
    "Ethiopia": 0.74,
    "Namibia": 0.74,
    "Swaziland": 0.74,
    "Sudan": 0.75,
    "El Salvador": 0.75,
    "Taiwan": 0.76,
    "Georgia": 0.76,
    "Togo": 0.76,
    "Cambodia": 0.76,
    "Chad": 0.76,
    "Moldova": 0.76,
    "Haiti": 0.77,
    "Armenia": 0.79,
    "Mexico": 0.81,
    "Guyana": 0.82,
    "Philippines": 0.82,
    "Uzbekistan": 0.83,
    "Liberia": 0.83,
    "Gabon": 0.84,
    "Tanzania": 0.84,
    "Bhutan": 0.85,
    "Fiji": 0.85,
    "St. Vincent and the Grenadines": 0.86,
    "Thailand": 0.86,
    "Canada": 0.86,
    "Nicaragua": 0.86,
    "Peru": 0.87,
    "Sri Lanka": 0.88,
    "Ukraine": 0.88,
    "Nepal": 0.88,
    "Bahamas": 0.88,
    "Niger": 0.88,
    "Br. Virgin Isl.": 0.89,
    "Ghana": 0.9,
    "South Africa": 0.91,
    "Australia": 0.91,
    "Kenya": 0.91,
    "R. of Congo": 0.92,
    "China": 0.92,
    "Uganda": 0.93,
    "Dominica": 0.93,
    "Honduras": 0.93,
    "Mongolia": 0.94,
    "St. K.&Nevis": 0.95,
    "India": 0.95,
    "Angola": 0.95,
    "Ivory Coast": 0.95,
    "Aruba": 0.95,
    "Guinea": 0.97,
    "Jamaica": 1,
    "Jordan": 1,
    "Burkina Faso": 1.01,
    "Syria": 1.02,
    "Zambia": 1.02,
    "Bosnia & Herz.": 1.02,
    "Ant.& Barb.": 1.02,
    "Morocco": 1.03,
    "Cape Verde": 1.04,
    "Paraguay": 1.04,
    "Mauritius": 1.04,
    "Costa Rica": 1.04,
    "Macedonia": 1.05,
    "Saint Lucia": 1.06,
    "Cameroon": 1.07,
    "Laos": 1.08,
    "Domin. Rep.": 1.08,
    "Malawi": 1.08,
    "Bulgaria": 1.09,
    "Bangladesh": 1.1,
    "Andorra": 1.11,
    "Chile": 1.11,
    "Rwanda": 1.12,
    "Madagascar": 1.13,
    "Cayman Isl.": 1.13,
    "Poland": 1.13,
    "Mali": 1.14,
    "Belize": 1.14,
    "Grenada": 1.14,
    "Senegal": 1.16,
    "Hungary": 1.16,
    "Brazil": 1.17,
    "Lithuania": 1.17,
    "Japan": 1.17,
    "Latvia": 1.17,
    "Burundi": 1.17,
    "Estonia": 1.17,
    "Romania": 1.18,
    "Argentina": 1.18,
    "Luxembourg": 1.19,
    "Gambia": 1.2,
    "Serbia": 1.21,
    "Czech Rep.": 1.21,
    "Vanuatu": 1.21,
    "Montenegro": 1.21,
    "Mauritania": 1.23,
    "Austria": 1.23,
    "Spain": 1.25,
    "Albania": 1.25,
    "Zimbabwe": 1.27,
    "Cyprus": 1.27,
    "South Korea": 1.29,
    "Slovenia": 1.31,
    "Croatia": 1.31,
    "Cuba": 1.33,
    "Slovakia": 1.34,
    "Singapore": 1.34,
    "New Zealand": 1.34,
    "Uruguay": 1.35,
    "Liechtenstein": 1.38,
    "Belgium": 1.39,
    "Barbados": 1.4,
    "Ireland": 1.42,
    "France": 1.43,
    "Germany": 1.43,
    "Malta": 1.43,
    "UK": 1.43,
    "Turkey": 1.46,
    "Switzerland": 1.47,
    "Finland": 1.51,
    "Portugal": 1.51,
    "Sweden": 1.52,
    "Mayotte": 1.54,
    "Israel": 1.54,
    "San Marino": 1.57,
    "Greece": 1.57,
    "Denmark": 1.58,
    "Italy": 1.6,
    "Iceland": 1.61,
    "Netherlands": 1.62,
    "Monaco": 1.64,
    "Norway": 1.74,
    "Hong Kong": 1.83
  }
 
 var isoCountries = {
  'AF' : {
    name: 'Afghanistan',
  },
  'AX' : {
    name: 'Aland Islands',
  },
  'AL' : {
    name: 'Albania',
  },
  'DZ' : {
    name: 'Algeria',
  },
  'AS' : {
    name: 'American Samoa',
  },
  'AD' : {
    name: 'Andorra',
  },
  'AO' : {
    name: 'Angola',
  },
  'AI' : {
    name: 'Anguilla',
  },
  'AQ' : {
    name: 'Antarctica',
  },
  'AG' : {
    name: 'Antigua And Barbuda',
  },
  'AR' : {
    name: 'Argentina',
  },
  'AM' : {
    name: 'Armenia',
  },
  'AW' : {
    name: 'Aruba',
  },
  'AU' : {
    name: 'Australia',
  },
  'AT' : {
    name: 'Austria',
  },
  'AZ' : {
    name: 'Azerbaijan',
  },
  'BS' : {
    name: 'Bahamas',
  },
  'BH' : {
    name: 'Bahrain',
  },
  'BD' : {
    name: 'Bangladesh',
  },
  'BB' : {
    name: 'Barbados',
  },
  'BY' : {
    name: 'Belarus',
  },
  'BE' : {
    name: 'Belgium',
  },
  'BZ' : {
    name: 'Belize',
  },
  'BJ' : {
    name: 'Benin',
  },
  'BM' : {
    name: 'Bermuda',
  },
  'BT' : {
    name: 'Bhutan',
  },
  'BO' : {
    name: 'Bolivia',
  },
  'BA' : {
    name: 'Bosnia And Herzegovina',
  },
  'BW' : {
    name: 'Botswana',
  },
  'BV' : {
    name: 'Bouvet Island',
  },
  'BR' : {
    name: 'Brazil',
  },
  'IO' : {
    name: 'British Indian Ocean Territory',
  },
  'BN' : {
    name: 'Brunei Darussalam',
  },
  'BG' : {
    name: 'Bulgaria',
  },
  'BF' : {
    name: 'Burkina Faso',
  },
  'BI' : {
    name: 'Burundi',
  },
  'KH' : {
    name: 'Cambodia',
  },
  'CM' : {
    name: 'Cameroon',
  },
  'CA' : {
    name: 'Canada',
  },
  'CV' : {
    name: 'Cape Verde',
  },
  'KY' : {
    name: 'Cayman Islands',
  },
  'CF' : {
    name: 'Central African Republic',
  },
  'TD' : {
    name: 'Chad',
  },
  'CL' : {
    name: 'Chile',
  },
  'CN' : {
    name: 'China',
  },
  'CX' : {
    name: 'Christmas Island',
  },
  'CC' : {
    name: 'Cocos (Keeling) Islands',
  },
  'CO' : {
    name: 'Colombia',
  },
  'KM' : {
    name: 'Comoros',
  },
  'CG' : {
    name: 'Congo',
  },
  'CD' : {
    name: 'Congo, Democratic Republic',
  },
  'CK' : {
    name: 'Cook Islands',
  },
  'CR' : {
    name: 'Costa Rica',
  },
  'CI' : {
    name: 'Cote D\'Ivoire',
  },
  'HR' : {
    name: 'Croatia',
  },
  'CU' : {
    name: 'Cuba',
  },
  'CY' : {
    name: 'Cyprus',
  },
  'CZ' : {
    name: 'Czech Republic',
  },
  'DK' : {
    name: 'Denmark',
  },
  'DJ' : {
    name: 'Djibouti',
  },
  'DM' : {
    name: 'Dominica',
  },
  'DO' : {
    name: 'Dominican Republic',
  },
  'EC' : {
    name: 'Ecuador',
  },
  'EG' : {
    name: 'Egypt',
  },
  'SV' : {
    name: 'El Salvador',
  },
  'GQ' : {
    name: 'Equatorial Guinea',
  },
  'ER' : {
    name: 'Eritrea',
  },
  'EE' : {
    name: 'Estonia',
  },
  'ET' : {
    name: 'Ethiopia',
  },
  'FK' : {
    name: 'Falkland Islands (Malvinas)',
  },
  'FO' : {
    name: 'Faroe Islands',
  },
  'FJ' : {
    name: 'Fiji',
  },
  'FI' : {
    name: 'Finland',
  },
  'FR' : {
    name: 'France',
  },
  'GF' : {
    name: 'French Guiana',
  },
  'PF' : {
    name: 'French Polynesia',
  },
  'TF' : {
    name: 'French Southern Territories',
  },
  'GA' : {
    name: 'Gabon',
  },
  'GM' : {
    name: 'Gambia',
  },
  'GE' : {
    name: 'Georgia',
  },
  'DE' : {
    name: 'Germany',
  },
  'GH' : {
    name: 'Ghana',
  },
  'GI' : {
    name: 'Gibraltar',
  },
  'GR' : {
    name: 'Greece',
  },
  'GL' : {
    name: 'Greenland',
  },
  'GD' : {
    name: 'Grenada',
  },
  'GP' : {
    name: 'Guadeloupe',
  },
  'GU' : {
    name: 'Guam',
  },
  'GT' : {
    name: 'Guatemala',
  },
  'GG' : {
    name: 'Guernsey',
  },
  'GN' : {
    name: 'Guinea',
  },
  'GW' : {
    name: 'Guinea-Bissau',
  },
  'GY' : {
    name: 'Guyana',
  },
  'HT' : {
    name: 'Haiti',
  },
  'HM' : {
    name: 'Heard Island & Mcdonald Islands',
  },
  'VA' : {
    name: 'Holy See (Vatican City State)',
  },
  'HN' : {
    name: 'Honduras',
  },
  'HK' : {
    name: 'Hong Kong',
  },
  'HU' : {
    name: 'Hungary',
  },
  'IS' : {
    name: 'Iceland',
  },
  'IN' : {
    name: 'India',
  },
  'ID' : {
    name: 'Indonesia',
  },
  'IR' : {
    name: 'Iran, Islamic Republic Of',
  },
  'IQ' : {
    name: 'Iraq',
  },
  'IE' : {
    name: 'Ireland',
  },
  'IM' : {
    name: 'Isle Of Man',
  },
  'IL' : {
    name: 'Israel',
  },
  'IT' : {
    name: 'Italy',
  },
  'JM' : {
    name: 'Jamaica',
  },
  'JP' : {
    name: 'Japan',
  },
  'JE' : {
    name: 'Jersey',
  },
  'JO' : {
    name: 'Jordan',
  },
  'KZ' : {
    name: 'Kazakhstan',
  },
  'KE' : {
    name: 'Kenya',
  },
  'KI' : {
    name: 'Kiribati',
  },
  'KR' : {
    name: 'Korea',
  },
  'KW' : {
    name: 'Kuwait',
  },
  'KG' : {
    name: 'Kyrgyzstan',
  },
  'LA' : {
    name: 'Lao People\'s Democratic Republic',
  },
  'LV' : {
    name: 'Latvia',
  },
  'LB' : {
    name: 'Lebanon',
  },
  'LS' : {
    name: 'Lesotho',
  },
  'LR' : {
    name: 'Liberia',
  },
  'LY' : {
    name: 'Libyan Arab Jamahiriya',
  },
  'LI' : {
    name: 'Liechtenstein',
  },
  'LT' : {
    name: 'Lithuania',
  },
  'LU' : {
    name: 'Luxembourg',
  },
  'MO' : {
    name: 'Macao',
  },
  'MK' : {
    name: 'Macedonia',
  },
  'MG' : {
    name: 'Madagascar',
  },
  'MW' : {
    name: 'Malawi',
  },
  'MY' : {
    name: 'Malaysia',
  },
  'MV' : {
    name: 'Maldives',
  },
  'ML' : {
    name: 'Mali',
  },
  'MT' : {
    name: 'Malta',
  },
  'MH' : {
    name: 'Marshall Islands',
  },
  'MQ' : {
    name: 'Martinique',
  },
  'MR' : {
    name: 'Mauritania',
  },
  'MU' : {
    name: 'Mauritius',
  },
  'YT' : {
    name: 'Mayotte',
  },
  'MX' : {
    name: 'Mexico',
  },
  'FM' : {
    name: 'Micronesia, Federated States Of',
  },
  'MD' : {
    name: 'Moldova',
  },
  'MC' : {
    name: 'Monaco',
  },
  'MN' : {
    name: 'Mongolia',
  },
  'ME' : {
    name: 'Montenegro',
  },
  'MS' : {
    name: 'Montserrat',
  },
  'MA' : {
    name: 'Morocco',
  },
  'MZ' : {
    name: 'Mozambique',
  },
  'MM' : {
    name: 'Myanmar',
  },
  'NA' : {
    name: 'Namibia',
  },
  'NR' : {
    name: 'Nauru',
  },
  'NP' : {
    name: 'Nepal',
  },
  'NL' : {
    name: 'Netherlands',
  },
  'AN' : {
    name: 'Netherlands Antilles',
  },
  'NC' : {
    name: 'New Caledonia',
  },
  'NZ' : {
    name: 'New Zealand',
  },
  'NI' : {
    name: 'Nicaragua',
  },
  'NE' : {
    name: 'Niger',
  },
  'NG' : {
    name: 'Nigeria',
  },
  'NU' : {
    name: 'Niue',
  },
  'NF' : {
    name: 'Norfolk Island',
  },
  'MP' : {
    name: 'Northern Mariana Islands',
  },
  'NO' : {
    name: 'Norway',
  },
  'OM' : {
    name: 'Oman',
  },
  'PK' : {
    name: 'Pakistan',
  },
  'PW' : {
    name: 'Palau',
  },
  'PS' : {
    name: 'Palestinian Territory, Occupied',
  },
  'PA' : {
    name: 'Panama',
  },
  'PG' : {
    name: 'Papua New Guinea',
  },
  'PY' : {
    name: 'Paraguay',
  },
  'PE' : {
    name: 'Peru',
  },
  'PH' : {
    name: 'Philippines',
  },
  'PN' : {
    name: 'Pitcairn',
  },
  'PL' : {
    name: 'Poland',
  },
  'PT' : {
    name: 'Portugal',
  },
  'PR' : {
    name: 'Puerto Rico',
  },
  'QA' : {
    name: 'Qatar',
  },
  'RE' : {
    name: 'Reunion',
  },
  'RO' : {
    name: 'Romania',
  },
  'RU' : {
    name: 'Russian Federation',
  },
  'RW' : {
    name: 'Rwanda',
  },
  'BL' : {
    name: 'Saint Barthelemy',
  },
  'SH' : {
    name: 'Saint Helena',
  },
  'KN' : {
    name: 'Saint Kitts And Nevis',
  },
  'LC' : {
    name: 'Saint Lucia',
  },
  'MF' : {
    name: 'Saint Martin',
  },
  'PM' : {
    name: 'Saint Pierre And Miquelon',
  },
  'VC' : {
    name: 'Saint Vincent And Grenadines',
  },
  'WS' : {
    name: 'Samoa',
  },
  'SM' : {
    name: 'San Marino',
  },
  'ST' : {
    name: 'Sao Tome And Principe',
  },
  'SA' : {
    name: 'Saudi Arabia',
  },
  'SN' : {
    name: 'Senegal',
  },
  'RS' : {
    name: 'Serbia',
  },
  'SC' : {
    name: 'Seychelles',
  },
  'SL' : {
    name: 'Sierra Leone',
  },
  'SG' : {
    name: 'Singapore',
  },
  'SK' : {
    name: 'Slovakia',
  },
  'SI' : {
    name: 'Slovenia',
  },
  'SB' : {
    name: 'Solomon Islands',
  },
  'SO' : {
    name: 'Somalia',
  },
  'ZA' : {
    name: 'South Africa',
  },
  'GS' : {
    name: 'South Georgia And Sandwich Isl.',
  },
  'ES' : {
    name: 'Spain',
  },
  'LK' : {
    name: 'Sri Lanka',
  },
  'SD' : {
    name: 'Sudan',
  },
  'SR' : {
    name: 'Suriname',
  },
  'SJ' : {
    name: 'Svalbard And Jan Mayen',
  },
  'SZ' : {
    name: 'Swaziland',
  },
  'SE' : {
    name: 'Sweden',
  },
  'CH' : {
    name: 'Switzerland',
  },
  'SY' : {
    name: 'Syrian Arab Republic',
  },
  'TW' : {
    name: 'Taiwan',
  },
  'TJ' : {
    name: 'Tajikistan',
  },
  'TZ' : {
    name: 'Tanzania',
  },
  'TH' : {
    name: 'Thailand',
  },
  'TL' : {
    name: 'Timor-Leste',
  },
  'TG' : {
    name: 'Togo',
  },
  'TK' : {
    name: 'Tokelau',
  },
  'TO' : {
    name: 'Tonga',
  },
  'TT' : {
    name: 'Trinidad And Tobago',
  },
  'TN' : {
    name: 'Tunisia',
  },
  'TR' : {
    name: 'Turkey',
  },
  'TM' : {
    name: 'Turkmenistan',
  },
  'TC' : {
    name: 'Turks And Caicos Islands',
  },
  'TV' : {
    name: 'Tuvalu',
  },
  'UG' : {
    name: 'Uganda',
  },
  'UA' : {
    name: 'Ukraine',
  },
  'AE' : {
    name: 'United Arab Emirates',
  },
  'GB' : {
    name: 'United Kingdom',
  },
  'US' : {
    name: 'United States',
  },
  'UM' : {
    name: 'United States Outlying Islands',
  },
  'UY' : {
    name: 'Uruguay',
  },
  'UZ' : {
    name: 'Uzbekistan',
  },
  'VU' : {
    name: 'Vanuatu',
  },
  'VE' : {
    name: 'Venezuela',
  },
  'VN' : {
    name: 'Viet Nam',
  },
  'VG' : {
    name: 'Virgin Islands, British',
  },
  'VI' : {
    name: 'Virgin Islands, U.S.',
  },
  'WF' : {
    name: 'Wallis And Futuna',
  },
  'EH' : {
    name: 'Western Sahara',
  },
  'YE' : {
    name: 'Yemen',
  },
  'ZM' : {
    name: 'Zambia',
  },
  'ZW' : {
    name: 'Zimbabwe'
  },
};

var countries = {};
$.each(isoCountries,function(key,value){
  var a = value.name;
  countries[a] = key;
});

console.log(countries);


var priceArray = [];
$.each(priceList, function(key,value){
  var p = {name : key, costindollar:value, country_code : '', costinlocalcurrency:0};
  priceArray.push(p)        
});

$.each(priceArray, function(){
 if(countries.hasOwnProperty(this.name)){
   var e =this.name;
    this.country_code = countries[e];
    }       
});

console.log(JSON.stringify(priceArray));









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////		SECOND CODEPEN BELOW THIS				////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var petrolPrices =  [{
    name: "Kuwait",
    costindollar: 0.21,
    country_code: "KW",
    costinlocalcurrency: 0
  },
  {
    name: "Saudi Arabia",
    costindollar: 0.24,
    country_code: "SA",
    costinlocalcurrency: 0
  },
  {
    name: "Turkmenistan",
    costindollar: 0.28,
    country_code: "TM",
    costinlocalcurrency: 0
  },
  {
    name: "Algeria",
    costindollar: 0.28,
    country_code: "DZ",
    costinlocalcurrency: 0
  },
  {
    name: "Qatar",
    costindollar: 0.39,
    country_code: "QA",
    costinlocalcurrency: 0
  },
  {
    name: "Ecuador",
    costindollar: 0.39,
    country_code: "EC",
    costinlocalcurrency: 0
  },
  {
    name: "Iran",
    costindollar: 0.39,
    country_code: "IR",
    costinlocalcurrency: 0
  },
  {
    name: "Bahrain",
    costindollar: 0.41,
    country_code: "BH",
    costinlocalcurrency: 0
  },
  {
    name: "Kazakhstan",
    costindollar: 0.41,
    country_code: "KZ",
    costinlocalcurrency: 0
  },
  {
    name: "Oman",
    costindollar: 0.42,
    country_code: "OM",
    costinlocalcurrency: 0
  },
  {
    name: "Malaysia",
    costindollar: 0.44,
    country_code: "MY",
    costinlocalcurrency: 0
  },
  {
    name: "UA Emirates",
    costindollar: 0.44,
    country_code: "AE",
    costinlocalcurrency: 0
  },
  {
    name: "Nigeria",
    costindollar: 0.5,
    country_code: "NG",
    costinlocalcurrency: 0
  },
  {
    name: "Azerbaijan",
    costindollar: 0.51,
    country_code: "AZ",
    costinlocalcurrency: 0
  },
  {
    name: "Bolivia",
    costindollar: 0.52,
    country_code: "BO",
    costinlocalcurrency: 0
  },
  {
    name: "Tr.&Tobago",
    costindollar: 0.53,
    country_code: "TT",
    costinlocalcurrency: 0
  },
  {
    name: "Afghanistan",
    costindollar: 0.54,
    country_code: "AF",
    costinlocalcurrency: 0
  },
  {
    name: "Kyrgyzstan",
    costindollar: 0.57,
    country_code: "KG",
    costinlocalcurrency: 0
  },
  {
    name: "Burma",
    costindollar: 0.57,
    country_code: "MM",
    costinlocalcurrency: 0
  },
  {
    name: "Russia",
    costindollar: 0.58,
    country_code: "RU",
    costinlocalcurrency: 0
  },
  {
    name: "Belarus",
    costindollar: 0.59,
    country_code: "BY",
    costinlocalcurrency: 0
  },
  {
    name: "Indonesia",
    costindollar: 0.59,
    country_code: "ID",
    costinlocalcurrency: 0
  },
  {
    name: "Suriname",
    costindollar: 0.59,
    country_code: "SR",
    costinlocalcurrency: 0
  },
  {
    name: "Venezuela",
    costindollar: 0.6,
    country_code: "VE",
    costinlocalcurrency: 0
  },
  {
    name: "Pakistan",
    costindollar: 0.61,
    country_code: "PK",
    costinlocalcurrency: 0
  },
  {
    name: "Puerto Rico",
    costindollar: 0.62,
    country_code: "PR",
    costinlocalcurrency: 0
  },
  {
    name: "Iraq",
    costindollar: 0.62,
    country_code: "IQ",
    costinlocalcurrency: 0
  },
  {
    name: "Maldives",
    costindollar: 0.63,
    country_code: "MV",
    costinlocalcurrency: 0
  },
  {
    name: "Am. Samoa",
    costindollar: 0.63,
    country_code: "AS",
    costinlocalcurrency: 0
  },
  {
    name: "USA",
    costindollar: 0.63,
    country_code: "US",
    costinlocalcurrency: 0
  },
  {
    name: "Lebanon",
    costindollar: 0.66,
    country_code: "LB",
    costinlocalcurrency: 0
  },
  {
    name: "Sierra Leone",
    costindollar: 0.66,
    country_code: "SL",
    costinlocalcurrency: 0
  },
  {
    name: "Colombia",
    costindollar: 0.67,
    country_code: "CO",
    costinlocalcurrency: 0
  },
  {
    name: "Egypt",
    costindollar: 0.69,
    country_code: "EG",
    costinlocalcurrency: 0
  },
  {
    name: "Botswana",
    costindollar: 0.69,
    country_code: "BW",
    costinlocalcurrency: 0
  },
  {
    name: "Vietnam",
    costindollar: 0.7,
    country_code: "VN",
    costinlocalcurrency: 0
  },
  {
    name: "Lesotho",
    costindollar: 0.7,
    country_code: "LS",
    costinlocalcurrency: 0
  },
  {
    name: "Yemen",
    costindollar: 0.71,
    country_code: "YE",
    costinlocalcurrency: 0
  },
  {
    name: "Panama",
    costindollar: 0.72,
    country_code: "PA",
    costinlocalcurrency: 0
  },
  {
    name: "Tajikistan",
    costindollar: 0.73,
    country_code: "TJ",
    costinlocalcurrency: 0
  },
  {
    name: "Tunisia",
    costindollar: 0.73,
    country_code: "TN",
    costinlocalcurrency: 0
  },
  {
    name: "Guatemala",
    costindollar: 0.73,
    country_code: "GT",
    costinlocalcurrency: 0
  },
  {
    name: "Mozambique",
    costindollar: 0.74,
    country_code: "MZ",
    costinlocalcurrency: 0
  },
  {
    name: "Benin",
    costindollar: 0.74,
    country_code: "BJ",
    costinlocalcurrency: 0
  },
  {
    name: "Ethiopia",
    costindollar: 0.74,
    country_code: "ET",
    costinlocalcurrency: 0
  },
  {
    name: "Namibia",
    costindollar: 0.74,
    country_code: "NA",
    costinlocalcurrency: 0
  },
  {
    name: "Swaziland",
    costindollar: 0.74,
    country_code: "SZ",
    costinlocalcurrency: 0
  },
  {
    name: "Sudan",
    costindollar: 0.75,
    country_code: "SD",
    costinlocalcurrency: 0
  },
  {
    name: "El Salvador",
    costindollar: 0.75,
    country_code: "SV",
    costinlocalcurrency: 0
  },
  {
    name: "Taiwan",
    costindollar: 0.76,
    country_code: "TW",
    costinlocalcurrency: 0
  },
  {
    name: "Georgia",
    costindollar: 0.76,
    country_code: "GE",
    costinlocalcurrency: 0
  },
  {
    name: "Togo",
    costindollar: 0.76,
    country_code: "TG",
    costinlocalcurrency: 0
  },
  {
    name: "Cambodia",
    costindollar: 0.76,
    country_code: "KH",
    costinlocalcurrency: 0
  },
  {
    name: "Chad",
    costindollar: 0.76,
    country_code: "TD",
    costinlocalcurrency: 0
  },
  {
    name: "Moldova",
    costindollar: 0.76,
    country_code: "MD",
    costinlocalcurrency: 0
  },
  {
    name: "Haiti",
    costindollar: 0.77,
    country_code: "HT",
    costinlocalcurrency: 0
  },
  {
    name: "Armenia",
    costindollar: 0.79,
    country_code: "AM",
    costinlocalcurrency: 0
  },
  {
    name: "Mexico",
    costindollar: 0.81,
    country_code: "MX",
    costinlocalcurrency: 0
  },
  {
    name: "Guyana",
    costindollar: 0.82,
    country_code: "GY",
    costinlocalcurrency: 0
  },
  {
    name: "Philippines",
    costindollar: 0.82,
    country_code: "PH",
    costinlocalcurrency: 0
  },
  {
    name: "Uzbekistan",
    costindollar: 0.83,
    country_code: "UZ",
    costinlocalcurrency: 0
  },
  {
    name: "Liberia",
    costindollar: 0.83,
    country_code: "LR",
    costinlocalcurrency: 0
  },
  {
    name: "Gabon",
    costindollar: 0.84,
    country_code: "GA",
    costinlocalcurrency: 0
  },
  {
    name: "Tanzania",
    costindollar: 0.84,
    country_code: "TZ",
    costinlocalcurrency: 0
  },
  {
    name: "Bhutan",
    costindollar: 0.85,
    country_code: "BT",
    costinlocalcurrency: 0
  },
  {
    name: "Fiji",
    costindollar: 0.85,
    country_code: "FJ",
    costinlocalcurrency: 0
  },
  {
    name: "St. Vincent and the Grenadines",
    costindollar: 0.86,
    country_code: "VC",
    costinlocalcurrency: 0
  },
  {
    name: "Thailand",
    costindollar: 0.86,
    country_code: "TH",
    costinlocalcurrency: 0
  },
  {
    name: "Canada",
    costindollar: 0.86,
    country_code: "CA",
    costinlocalcurrency: 0
  },
  {
    name: "Nicaragua",
    costindollar: 0.86,
    country_code: "NI",
    costinlocalcurrency: 0
  },
  {
    name: "Peru",
    costindollar: 0.87,
    country_code: "PE",
    costinlocalcurrency: 0
  },
  {
    name: "Sri Lanka",
    costindollar: 0.88,
    country_code: "LK",
    costinlocalcurrency: 0
  },
  {
    name: "Ukraine",
    costindollar: 0.88,
    country_code: "UA",
    costinlocalcurrency: 0
  },
  {
    name: "Nepal",
    costindollar: 0.88,
    country_code: "NP",
    costinlocalcurrency: 0
  },
  {
    name: "Bahamas",
    costindollar: 0.88,
    country_code: "BS",
    costinlocalcurrency: 0
  },
  {
    name: "Niger",
    costindollar: 0.88,
    country_code: "NE",
    costinlocalcurrency: 0
  },
  {
    name: "Br. Virgin Isl.",
    costindollar: 0.89,
    country_code: "VG",
    costinlocalcurrency: 0
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
    costinlocalcurrency: 0
  },
  {
    name: "Australia",
    costindollar: 0.91,
    country_code: "AU",
    costinlocalcurrency: 0
  },
  {
    name: "Kenya",
    costindollar: 0.91,
    country_code: "KE",
    costinlocalcurrency: 0
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
    costinlocalcurrency: 0
  },
  {
    name: "Uganda",
    costindollar: 0.93,
    country_code: "UG",
    costinlocalcurrency: 0
  },
  {
    name: "Dominica",
    costindollar: 0.93,
    country_code: "DM",
    costinlocalcurrency: 0
  },
  {
    name: "Honduras",
    costindollar: 0.93,
    country_code: "HN",
    costinlocalcurrency: 0
  },
  {
    name: "Mongolia",
    costindollar: 0.94,
    country_code: "MN",
    costinlocalcurrency: 0
  },
  {
    name: "St. K.&Nevis",
    costindollar: 0.95,
    country_code: "KN",
    costinlocalcurrency: 0
  },
  {
    name: "India",
    costindollar: 0.95,
    country_code: "IN",
    costinlocalcurrency: 0
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
    costinlocalcurrency: 0
  },
  {
    name: "Guinea",
    costindollar: 0.97,
    country_code: "GN",
    costinlocalcurrency: 0
  },
  {
    name: "Jamaica",
    costindollar: 1,
    country_code: "JM",
    costinlocalcurrency: 0
  },
  {
    name: "Jordan",
    costindollar: 1,
    country_code: "JO",
    costinlocalcurrency: 0
  },
  {
    name: "Burkina Faso",
    costindollar: 1.01,
    country_code: "BF",
    costinlocalcurrency: 0
  },
  {
    name: "Syria",
    costindollar: 1.02,
    country_code: "SY",
    costinlocalcurrency: 0
  },
  {
    name: "Zambia",
    costindollar: 1.02,
    country_code: "ZM",
    costinlocalcurrency: 0
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
    costinlocalcurrency: 0
  },
  {
    name: "Morocco",
    costindollar: 1.03,
    country_code: "MA",
    costinlocalcurrency: 0
  },
  {
    name: "Cape Verde",
    costindollar: 1.04,
    country_code: "CV",
    costinlocalcurrency: 0
  },
  {
    name: "Paraguay",
    costindollar: 1.04,
    country_code: "PY",
    costinlocalcurrency: 0
  },
  {
    name: "Mauritius",
    costindollar: 1.04,
    country_code: "MU",
    costinlocalcurrency: 0
  },
  {
    name: "Costa Rica",
    costindollar: 1.04,
    country_code: "CR",
    costinlocalcurrency: 0
  },
  {
    name: "Macedonia",
    costindollar: 1.05,
    country_code: "MK",
    costinlocalcurrency: 0
  },
  {
    name: "Saint Lucia",
    costindollar: 1.06,
    country_code: "LC",
    costinlocalcurrency: 0
  },
  {
    name: "Cameroon",
    costindollar: 1.07,
    country_code: "CM",
    costinlocalcurrency: 0
  },
  {
    name: "Laos",
    costindollar: 1.08,
    country_code: "LA",
    costinlocalcurrency: 0
  },
  {
    name: "Domin. Rep.",
    costindollar: 1.08,
    country_code: "DO",
    costinlocalcurrency: 0
  },
  {
    name: "Malawi",
    costindollar: 1.08,
    country_code: "MW",
    costinlocalcurrency: 0
  },
  {
    name: "Bulgaria",
    costindollar: 1.09,
    country_code: "BG",
    costinlocalcurrency: 0
  },
  {
    name: "Bangladesh",
    costindollar: 1.1,
    country_code: "BD",
    costinlocalcurrency: 0
  },
  {
    name: "Andorra",
    costindollar: 1.11,
    country_code: "AD",
    costinlocalcurrency: 0
  },
  {
    name: "Chile",
    costindollar: 1.11,
    country_code: "CL",
    costinlocalcurrency: 0
  },
  {
    name: "Rwanda",
    costindollar: 1.12,
    country_code: "RW",
    costinlocalcurrency: 0
  },
  {
    name: "Madagascar",
    costindollar: 1.13,
    country_code: "MG",
    costinlocalcurrency: 0
  },
  {
    name: "Cayman Isl.",
    costindollar: 1.13,
    country_code: "KY",
    costinlocalcurrency: 0
  },
  {
    name: "Poland",
    costindollar: 1.13,
    country_code: "PL",
    costinlocalcurrency: 0
  },
  {
    name: "Mali",
    costindollar: 1.14,
    country_code: "ML",
    costinlocalcurrency: 0
  },
  {
    name: "Belize",
    costindollar: 1.14,
    country_code: "BZ",
    costinlocalcurrency: 0
  },
  {
    name: "Grenada",
    costindollar: 1.14,
    country_code: "GD",
    costinlocalcurrency: 0
  },
  {
    name: "Senegal",
    costindollar: 1.16,
    country_code: "SN",
    costinlocalcurrency: 0
  },
  {
    name: "Hungary",
    costindollar: 1.16,
    country_code: "HU",
    costinlocalcurrency: 0
  },
  {
    name: "Brazil",
    costindollar: 1.17,
    country_code: "BR",
    costinlocalcurrency: 0
  },
  {
    name: "Lithuania",
    costindollar: 1.17,
    country_code: "LT",
    costinlocalcurrency: 0
  },
  {
    name: "Japan",
    costindollar: 1.17,
    country_code: "JP",
    costinlocalcurrency: 0
  },
  {
    name: "Latvia",
    costindollar: 1.17,
    country_code: "LV",
    costinlocalcurrency: 0
  },
  {
    name: "Burundi",
    costindollar: 1.17,
    country_code: "BI",
    costinlocalcurrency: 0
  },
  {
    name: "Estonia",
    costindollar: 1.17,
    country_code: "EE",
    costinlocalcurrency: 0
  },
  {
    name: "Romania",
    costindollar: 1.18,
    country_code: "RO",
    costinlocalcurrency: 0
  },
  {
    name: "Argentina",
    costindollar: 1.18,
    country_code: "AR",
    costinlocalcurrency: 0
  },
  {
    name: "Luxembourg",
    costindollar: 1.19,
    country_code: "LU",
    costinlocalcurrency: 0
  },
  {
    name: "Gambia",
    costindollar: 1.2,
    country_code: "GM",
    costinlocalcurrency: 0
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
    costinlocalcurrency: 0
  },
  {
    name: "Vanuatu",
    costindollar: 1.21,
    country_code: "VU",
    costinlocalcurrency: 0
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
    costinlocalcurrency: 0
  },
  {
    name: "Austria",
    costindollar: 1.23,
    country_code: "AT",
    costinlocalcurrency: 0
  },
  {
    name: "Spain",
    costindollar: 1.25,
    country_code: "ES",
    costinlocalcurrency: 0
  },
  {
    name: "Albania",
    costindollar: 1.25,
    country_code: "AL",
    costinlocalcurrency: 0
  },
  {
    name: "Zimbabwe",
    costindollar: 1.27,
    country_code: "ZW",
    costinlocalcurrency: 0
  },
  {
    name: "Cyprus",
    costindollar: 1.27,
    country_code: "CY",
    costinlocalcurrency: 0
  },
  {
    name: "South Korea",
    costindollar: 1.29,
    country_code: "KR",
    costinlocalcurrency: 0
  },
  {
    name: "Slovenia",
    costindollar: 1.31,
    country_code: "SI",
    costinlocalcurrency: 0
  },
  {
    name: "Croatia",
    costindollar: 1.31,
    country_code: "HR",
    costinlocalcurrency: 0
  },
  {
    name: "Cuba",
    costindollar: 1.33,
    country_code: "CU",
    costinlocalcurrency: 0
  },
  {
    name: "Slovakia",
    costindollar: 1.34,
    country_code: "SK",
    costinlocalcurrency: 0
  },
  {
    name: "Singapore",
    costindollar: 1.34,
    country_code: "SG",
    costinlocalcurrency: 0
  },
  {
    name: "New Zealand",
    costindollar: 1.34,
    country_code: "NZ",
    costinlocalcurrency: 0
  },
  {
    name: "Uruguay",
    costindollar: 1.35,
    country_code: "UY",
    costinlocalcurrency: 0
  },
  {
    name: "Liechtenstein",
    costindollar: 1.38,
    country_code: "LI",
    costinlocalcurrency: 0
  },
  {
    name: "Belgium",
    costindollar: 1.39,
    country_code: "BE",
    costinlocalcurrency: 0
  },
  {
    name: "Barbados",
    costindollar: 1.4,
    country_code: "BB",
    costinlocalcurrency: 0
  },
  {
    name: "Ireland",
    costindollar: 1.42,
    country_code: "IE",
    costinlocalcurrency: 0
  },
  {
    name: "France",
    costindollar: 1.43,
    country_code: "FR",
    costinlocalcurrency: 0
  },
  {
    name: "Germany",
    costindollar: 1.43,
    country_code: "DE",
    costinlocalcurrency: 0
  },
  {
    name: "Malta",
    costindollar: 1.43,
    country_code: "MT",
    costinlocalcurrency: 0
  },
  {
    name: "UK",
    costindollar: 1.43,
    country_code: "GB",
    costinlocalcurrency: 0
  },
  {
    name: "Turkey",
    costindollar: 1.46,
    country_code: "TR",
    costinlocalcurrency: 0
  },
  {
    name: "Switzerland",
    costindollar: 1.47,
    country_code: "CH",
    costinlocalcurrency: 0
  },
  {
    name: "Finland",
    costindollar: 1.51,
    country_code: "FI",
    costinlocalcurrency: 0
  },
  {
    name: "Portugal",
    costindollar: 1.51,
    country_code: "PT",
    costinlocalcurrency: 0
  },
  {
    name: "Sweden",
    costindollar: 1.52,
    country_code: "SE",
    costinlocalcurrency: 0
  },
  {
    name: "Mayotte",
    costindollar: 1.54,
    country_code: "YT",
    costinlocalcurrency: 0
  },
  {
    name: "Israel",
    costindollar: 1.54,
    country_code: "IL",
    costinlocalcurrency: 0
  },
  {
    name: "San Marino",
    costindollar: 1.57,
    country_code: "SM",
    costinlocalcurrency: 0
  },
  {
    name: "Greece",
    costindollar: 1.57,
    country_code: "GR",
    costinlocalcurrency: 0
  },
  {
    name: "Denmark",
    costindollar: 1.58,
    country_code: "DK",
    costinlocalcurrency: 0
  },
  {
    name: "Italy",
    costindollar: 1.6,
    country_code: "IT",
    costinlocalcurrency: 0
  },
  {
    name: "Iceland",
    costindollar: 1.61,
    country_code: "IS",
    costinlocalcurrency: 0
  },
  {
    name: "Netherlands",
    costindollar: 1.62,
    country_code: "NL",
    costinlocalcurrency: 0
  },
  {
    name: "Monaco",
    costindollar: 1.64,
    country_code: "MC",
    costinlocalcurrency: 0
  },
  {
    name: "Norway",
    costindollar: 1.74,
    country_code: "NO",
    costinlocalcurrency: 0
  },
  {
    name: "Hong Kong",
    costindollar: 1.83,
    country_code: "HK",
    costinlocalcurrency: 0
  }]

var currencyArray =[
  {
    Country: "New Zealand",
    CountryCode: "NZ",
    Currency: "New Zealand Dollars",
    Code: "NZD"
  },
  {
    Country: "Cook Islands",
    CountryCode: "CK",
    Currency: "New Zealand Dollars",
    Code: "NZD"
  },
  {
    Country: "Niue",
    CountryCode: "NU",
    Currency: "New Zealand Dollars",
    Code: "NZD"
  },
  {
    Country: "Pitcairn",
    CountryCode: "PN",
    Currency: "New Zealand Dollars",
    Code: "NZD"
  },
  {
    Country: "Tokelau",
    CountryCode: "TK",
    Currency: "New Zealand Dollars",
    Code: "NZD"
  },
  {
    Country: "Australian",
    CountryCode: "AU",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Christmas Island",
    CountryCode: "CX",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Cocos (Keeling) Islands",
    CountryCode: "CC",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Heard and Mc Donald Islands",
    CountryCode: "HM",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Kiribati",
    CountryCode: "KI",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Nauru",
    CountryCode: "NR",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Norfolk Island",
    CountryCode: "NF",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "Tuvalu",
    CountryCode: "TV",
    Currency: "Australian Dollars",
    Code: "AUD"
  },
  {
    Country: "American Samoa",
    CountryCode: "AS",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Andorra",
    CountryCode: "AD",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Austria",
    CountryCode: "AT",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Belgium",
    CountryCode: "BE",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Finland",
    CountryCode: "FI",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "France",
    CountryCode: "FR",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "French Guiana",
    CountryCode: "GF",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "French Southern Territories",
    CountryCode: "TF",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Germany",
    CountryCode: "DE",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Greece",
    CountryCode: "GR",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Guadeloupe",
    CountryCode: "GP",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Ireland",
    CountryCode: "IE",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Italy",
    CountryCode: "IT",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Luxembourg",
    CountryCode: "LU",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Martinique",
    CountryCode: "MQ",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Mayotte",
    CountryCode: "YT",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Monaco",
    CountryCode: "MC",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Netherlands",
    CountryCode: "NL",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Portugal",
    CountryCode: "PT",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Reunion",
    CountryCode: "RE",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Samoa",
    CountryCode: "WS",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "San Marino",
    CountryCode: "SM",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Slovenia",
    CountryCode: "SI",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Spain",
    CountryCode: "ES",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "Vatican City State (Holy See)",
    CountryCode: "VA",
    Currency: "Euros",
    Code: "EUR"
  },
  {
    Country: "South Georgia and the South Sandwich Islands",
    CountryCode: "GS",
    Currency: "Sterling",
    Code: "GBP"
  },
  {
    Country: "United Kingdom",
    CountryCode: "GB",
    Currency: "Sterling",
    Code: "GBP"
  },
  {
    Country: "Jersey",
    CountryCode: "JE",
    Currency: "Sterling",
    Code: "GBP"
  },
  {
    Country: "British Indian Ocean Territory",
    CountryCode: "IO",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Guam",
    CountryCode: "GU",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Marshall Islands",
    CountryCode: "MH",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Micronesia Federated States of",
    CountryCode: "FM",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Northern Mariana Islands",
    CountryCode: "MP",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Palau",
    CountryCode: "PW",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Puerto Rico",
    CountryCode: "PR",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Turks and Caicos Islands",
    CountryCode: "TC",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "United States",
    CountryCode: "US",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "United States Minor Outlying Islands",
    CountryCode: "UM",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Virgin Islands (British)",
    CountryCode: "VG",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Virgin Islands (US)",
    CountryCode: "VI",
    Currency: "USD",
    Code: "USD"
  },
  {
    Country: "Hong Kong",
    CountryCode: "HK",
    Currency: "HKD",
    Code: "HKD"
  },
  {
    Country: "Canada",
    CountryCode: "CA",
    Currency: "Canadian Dollar",
    Code: "CAD"
  },
  {
    Country: "Japan",
    CountryCode: "JP",
    Currency: "Japanese Yen",
    Code: "JPY"
  },
  {
    Country: "Afghanistan",
    CountryCode: "AF",
    Currency: "Afghani",
    Code: "AFN"
  },
  {
    Country: "Albania",
    CountryCode: "AL",
    Currency: "Lek",
    Code: "ALL"
  },
  {
    Country: "Algeria",
    CountryCode: "DZ",
    Currency: "Algerian Dinar",
    Code: "DZD"
  },
  {
    Country: "Anguilla",
    CountryCode: "AI",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Antigua and Barbuda",
    CountryCode: "AG",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Dominica",
    CountryCode: "DM",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Grenada",
    CountryCode: "GD",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Montserrat",
    CountryCode: "MS",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Saint Kitts",
    CountryCode: "KN",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Saint Lucia",
    CountryCode: "LC",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Saint Vincent Grenadines",
    CountryCode: "VC",
    Currency: "East Caribbean Dollar",
    Code: "XCD"
  },
  {
    Country: "Argentina",
    CountryCode: "AR",
    Currency: "Peso",
    Code: "ARS"
  },
  {
    Country: "Armenia",
    CountryCode: "AM",
    Currency: "Dram",
    Code: "AMD"
  },
  {
    Country: "Aruba",
    CountryCode: "AW",
    Currency: "Netherlands Antilles Guilder",
    Code: "ANG"
  },
  {
    Country: "Netherlands Antilles",
    CountryCode: "AN",
    Currency: "Netherlands Antilles Guilder",
    Code: "ANG"
  },
  {
    Country: "Azerbaijan",
    CountryCode: "AZ",
    Currency: "Manat",
    Code: "AZN"
  },
  {
    Country: "Bahamas",
    CountryCode: "BS",
    Currency: "Bahamian Dollar",
    Code: "BSD"
  },
  {
    Country: "Bahrain",
    CountryCode: "BH",
    Currency: "Bahraini Dinar",
    Code: "BHD"
  },
  {
    Country: "Bangladesh",
    CountryCode: "BD",
    Currency: "Taka",
    Code: "BDT"
  },
  {
    Country: "Barbados",
    CountryCode: "BB",
    Currency: "Barbadian Dollar",
    Code: "BBD"
  },
  {
    Country: "Belarus",
    CountryCode: "BY",
    Currency: "Belarus Ruble",
    Code: "BYR"
  },
  {
    Country: "Belize",
    CountryCode: "BZ",
    Currency: "Belizean Dollar",
    Code: "BZD"
  },
  {
    Country: "Benin",
    CountryCode: "BJ",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Burkina Faso",
    CountryCode: "BF",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Guinea-Bissau",
    CountryCode: "GW",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Ivory Coast",
    CountryCode: "CI",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Mali",
    CountryCode: "ML",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Niger",
    CountryCode: "NE",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Senegal",
    CountryCode: "SN",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Togo",
    CountryCode: "TG",
    Currency: "CFA Franc BCEAO",
    Code: "XOF"
  },
  {
    Country: "Bermuda",
    CountryCode: "BM",
    Currency: "Bermudian Dollar",
    Code: "BMD"
  },
  {
    Country: "Bhutan",
    CountryCode: "BT",
    Currency: "Indian Rupee",
    Code: "INR"
  },
  {
    Country: "India",
    CountryCode: "IN",
    Currency: "Indian Rupee",
    Code: "INR"
  },
  {
    Country: "Bolivia",
    CountryCode: "BO",
    Currency: "Boliviano",
    Code: "BOB"
  },
  {
    Country: "Botswana",
    CountryCode: "BW",
    Currency: "Pula",
    Code: "BWP"
  },
  {
    Country: "Bouvet Island",
    CountryCode: "BV",
    Currency: "Norwegian Krone",
    Code: "NOK"
  },
  {
    Country: "Norway",
    CountryCode: "NO",
    Currency: "Norwegian Krone",
    Code: "NOK"
  },
  {
    Country: "Svalbard and Jan Mayen Islands",
    CountryCode: "SJ",
    Currency: "Norwegian Krone",
    Code: "NOK"
  },
  {
    Country: "Brazil",
    CountryCode: "BR",
    Currency: "Brazil",
    Code: "BRL"
  },
  {
    Country: "Brunei Darussalam",
    CountryCode: "BN",
    Currency: "Bruneian Dollar",
    Code: "BND"
  },
  {
    Country: "Bulgaria",
    CountryCode: "BG",
    Currency: "Lev",
    Code: "BGN"
  },
  {
    Country: "Burundi",
    CountryCode: "BI",
    Currency: "Burundi Franc",
    Code: "BIF"
  },
  {
    Country: "Cambodia",
    CountryCode: "KH",
    Currency: "Riel",
    Code: "KHR"
  },
  {
    Country: "Cameroon",
    CountryCode: "CM",
    Currency: "CFA Franc BEAC",
    Code: "XAF"
  },
  {
    Country: "Central African Republic",
    CountryCode: "CF",
    Currency: "CFA Franc BEAC",
    Code: "XAF"
  },
  {
    Country: "Chad",
    CountryCode: "TD",
    Currency: "CFA Franc BEAC",
    Code: "XAF"
  },
  {
    Country: "Congo Republic of the Democratic",
    CountryCode: "CG",
    Currency: "CFA Franc BEAC",
    Code: "XAF"
  },
  {
    Country: "Equatorial Guinea",
    CountryCode: "GQ",
    Currency: "CFA Franc BEAC",
    Code: "XAF"
  },
  {
    Country: "Gabon",
    CountryCode: "GA",
    Currency: "CFA Franc BEAC",
    Code: "XAF"
  },
  {
    Country: "Cape Verde",
    CountryCode: "CV",
    Currency: "Escudo",
    Code: "CVE"
  },
  {
    Country: "Cayman Islands",
    CountryCode: "KY",
    Currency: "Caymanian Dollar",
    Code: "KYD"
  },
  {
    Country: "Chile",
    CountryCode: "CL",
    Currency: "Chilean Peso",
    Code: "CLP"
  },
  {
    Country: "China",
    CountryCode: "CN",
    Currency: "Yuan Renminbi",
    Code: "CNY"
  },
  {
    Country: "Colombia",
    CountryCode: "CO",
    Currency: "Peso",
    Code: "COP"
  },
  {
    Country: "Comoros",
    CountryCode: "KM",
    Currency: "Comoran Franc",
    Code: "KMF"
  },
  {
    Country: "Congo-Brazzaville",
    CountryCode: "CD",
    Currency: "Congolese Frank",
    Code: "CDF"
  },
  {
    Country: "Costa Rica",
    CountryCode: "CR",
    Currency: "Costa Rican Colon",
    Code: "CRC"
  },
  {
    Country: "Croatia (Hrvatska)",
    CountryCode: "HR",
    Currency: "Croatian Dinar",
    Code: "HRK"
  },
  {
    Country: "Cuba",
    CountryCode: "CU",
    Currency: "Cuban Peso",
    Code: "CUP"
  },
  {
    Country: "Cyprus",
    CountryCode: "CY",
    Currency: "Cypriot Pound",
    Code: "CYP"
  },
  {
    Country: "Czech Republic",
    CountryCode: "CZ",
    Currency: "Koruna",
    Code: "CZK"
  },
  {
    Country: "Denmark",
    CountryCode: "DK",
    Currency: "Danish Krone",
    Code: "DKK"
  },
  {
    Country: "Faroe Islands",
    CountryCode: "FO",
    Currency: "Danish Krone",
    Code: "DKK"
  },
  {
    Country: "Greenland",
    CountryCode: "GL",
    Currency: "Danish Krone",
    Code: "DKK"
  },
  {
    Country: "Djibouti",
    CountryCode: "DJ",
    Currency: "Djiboutian Franc",
    Code: "DJF"
  },
  {
    Country: "Dominican Republic",
    CountryCode: "DO",
    Currency: "Dominican Peso",
    Code: "DOP"
  },
  {
    Country: "East Timor",
    CountryCode: "TP",
    Currency: "Indonesian Rupiah",
    Code: "IDR"
  },
  {
    Country: "Indonesia",
    CountryCode: "ID",
    Currency: "Indonesian Rupiah",
    Code: "IDR"
  },
  {
    Country: "Ecuador",
    CountryCode: "EC",
    Currency: "Sucre",
    Code: "ECS"
  },
  {
    Country: "Egypt",
    CountryCode: "EG",
    Currency: "Egyptian Pound",
    Code: "EGP"
  },
  {
    Country: "El Salvador",
    CountryCode: "SV",
    Currency: "Salvadoran Colon",
    Code: "SVC"
  },
  {
    Country: "Eritrea",
    CountryCode: "ER",
    Currency: "Ethiopian Birr",
    Code: "ETB"
  },
  {
    Country: "Ethiopia",
    CountryCode: "ET",
    Currency: "Ethiopian Birr",
    Code: "ETB"
  },
  {
    Country: "Estonia",
    CountryCode: "EE",
    Currency: "Estonian Kroon",
    Code: "EEK"
  },
  {
    Country: "Falkland Islands (Malvinas)",
    CountryCode: "FK",
    Currency: "Falkland Pound",
    Code: "FKP"
  },
  {
    Country: "Fiji",
    CountryCode: "FJ",
    Currency: "Fijian Dollar",
    Code: "FJD"
  },
  {
    Country: "French Polynesia",
    CountryCode: "PF",
    Currency: "CFP Franc",
    Code: "XPF"
  },
  {
    Country: "New Caledonia",
    CountryCode: "NC",
    Currency: "CFP Franc",
    Code: "XPF"
  },
  {
    Country: "Wallis and Futuna Islands",
    CountryCode: "WF",
    Currency: "CFP Franc",
    Code: "XPF"
  },
  {
    Country: "Gambia",
    CountryCode: "GM",
    Currency: "Dalasi",
    Code: "GMD"
  },
  {
    Country: "Georgia",
    CountryCode: "GE",
    Currency: "Lari",
    Code: "GEL"
  },
  {
    Country: "Gibraltar",
    CountryCode: "GI",
    Currency: "Gibraltar Pound",
    Code: "GIP"
  },
  {
    Country: "Guatemala",
    CountryCode: "GT",
    Currency: "Quetzal",
    Code: "GTQ"
  },
  {
    Country: "Guinea",
    CountryCode: "GN",
    Currency: "Guinean Franc",
    Code: "GNF"
  },
  {
    Country: "Guyana",
    CountryCode: "GY",
    Currency: "Guyanaese Dollar",
    Code: "GYD"
  },
  {
    Country: "Haiti",
    CountryCode: "HT",
    Currency: "Gourde",
    Code: "HTG"
  },
  {
    Country: "Honduras",
    CountryCode: "HN",
    Currency: "Lempira",
    Code: "HNL"
  },
  {
    Country: "Hungary",
    CountryCode: "HU",
    Currency: "Forint",
    Code: "HUF"
  },
  {
    Country: "Iceland",
    CountryCode: "IS",
    Currency: "Icelandic Krona",
    Code: "ISK"
  },
  {
    Country: "Iran (Islamic Republic of)",
    CountryCode: "IR",
    Currency: "Iranian Rial",
    Code: "IRR"
  },
  {
    Country: "Iraq",
    CountryCode: "IQ",
    Currency: "Iraqi Dinar",
    Code: "IQD"
  },
  {
    Country: "Israel",
    CountryCode: "IL",
    Currency: "Shekel",
    Code: "ILS"
  },
  {
    Country: "Jamaica",
    CountryCode: "JM",
    Currency: "Jamaican Dollar",
    Code: "JMD"
  },
  {
    Country: "Jordan",
    CountryCode: "JO",
    Currency: "Jordanian Dinar",
    Code: "JOD"
  },
  {
    Country: "Kazakhstan",
    CountryCode: "KZ",
    Currency: "Tenge",
    Code: "KZT"
  },
  {
    Country: "Kenya",
    CountryCode: "KE",
    Currency: "Kenyan Shilling",
    Code: "KES"
  },
  {
    Country: "Korea North",
    CountryCode: "KP",
    Currency: "Won",
    Code: "KPW"
  },
  {
    Country: "Korea South",
    CountryCode: "KR",
    Currency: "Won",
    Code: "KRW"
  },
  {
    Country: "Kuwait",
    CountryCode: "KW",
    Currency: "Kuwaiti Dinar",
    Code: "KWD"
  },
  {
    Country: "Kyrgyzstan",
    CountryCode: "KG",
    Currency: "Som",
    Code: "KGS"
  },
  {
    Country: "Lao PeopleÕs Democratic Republic",
    CountryCode: "LA",
    Currency: "Kip",
    Code: "LAK"
  },
  {
    Country: "Latvia",
    CountryCode: "LV",
    Currency: "Lat",
    Code: "LVL"
  },
  {
    Country: "Lebanon",
    CountryCode: "LB",
    Currency: "Lebanese Pound",
    Code: "LBP"
  },
  {
    Country: "Lesotho",
    CountryCode: "LS",
    Currency: "Loti",
    Code: "LSL"
  },
  {
    Country: "Liberia",
    CountryCode: "LR",
    Currency: "Liberian Dollar",
    Code: "LRD"
  },
  {
    Country: "Libyan Arab Jamahiriya",
    CountryCode: "LY",
    Currency: "Libyan Dinar",
    Code: "LYD"
  },
  {
    Country: "Liechtenstein",
    CountryCode: "LI",
    Currency: "Swiss Franc",
    Code: "CHF"
  },
  {
    Country: "Switzerland",
    CountryCode: "CH",
    Currency: "Swiss Franc",
    Code: "CHF"
  },
  {
    Country: "Lithuania",
    CountryCode: "LT",
    Currency: "Lita",
    Code: "LTL"
  },
  {
    Country: "Macau",
    CountryCode: "MO",
    Currency: "Pataca",
    Code: "MOP"
  },
  {
    Country: "Macedonia",
    CountryCode: "MK",
    Currency: "Denar",
    Code: "MKD"
  },
  {
    Country: "Madagascar",
    CountryCode: "MG",
    Currency: "Malagasy Franc",
    Code: "MGA"
  },
  {
    Country: "Malawi",
    CountryCode: "MW",
    Currency: "Malawian Kwacha",
    Code: "MWK"
  },
  {
    Country: "Malaysia",
    CountryCode: "MY",
    Currency: "Ringgit",
    Code: "MYR"
  },
  {
    Country: "Maldives",
    CountryCode: "MV",
    Currency: "Rufiyaa",
    Code: "MVR"
  },
  {
    Country: "Malta",
    CountryCode: "MT",
    Currency: "Maltese Lira",
    Code: "MTL"
  },
  {
    Country: "Mauritania",
    CountryCode: "MR",
    Currency: "Ouguiya",
    Code: "MRO"
  },
  {
    Country: "Mauritius",
    CountryCode: "MU",
    Currency: "Mauritian Rupee",
    Code: "MUR"
  },
  {
    Country: "Mexico",
    CountryCode: "MX",
    Currency: "Peso",
    Code: "MXN"
  },
  {
    Country: "Moldova Republic of",
    CountryCode: "MD",
    Currency: "Leu",
    Code: "MDL"
  },
  {
    Country: "Mongolia",
    CountryCode: "MN",
    Currency: "Tugrik",
    Code: "MNT"
  },
  {
    Country: "Morocco",
    CountryCode: "MA",
    Currency: "Dirham",
    Code: "MAD"
  },
  {
    Country: "Western Sahara",
    CountryCode: "EH",
    Currency: "Dirham",
    Code: "MAD"
  },
  {
    Country: "Mozambique",
    CountryCode: "MZ",
    Currency: "Metical",
    Code: "MZN"
  },
  {
    Country: "Myanmar",
    CountryCode: "MM",
    Currency: "Kyat",
    Code: "MMK"
  },
  {
    Country: "Namibia",
    CountryCode: "NA",
    Currency: "Dollar",
    Code: "NAD"
  },
  {
    Country: "Nepal",
    CountryCode: "NP",
    Currency: "Nepalese Rupee",
    Code: "NPR"
  },
  {
    Country: "Nicaragua",
    CountryCode: "NI",
    Currency: "Cordoba Oro",
    Code: "NIO"
  },
  {
    Country: "Nigeria",
    CountryCode: "NG",
    Currency: "Naira",
    Code: "NGN"
  },
  {
    Country: "Oman",
    CountryCode: "OM",
    Currency: "Sul Rial",
    Code: "OMR"
  },
  {
    Country: "Pakistan",
    CountryCode: "PK",
    Currency: "Rupee",
    Code: "PKR"
  },
  {
    Country: "Panama",
    CountryCode: "PA",
    Currency: "Balboa",
    Code: "PAB"
  },
  {
    Country: "Papua New Guinea",
    CountryCode: "PG",
    Currency: "Kina",
    Code: "PGK"
  },
  {
    Country: "Paraguay",
    CountryCode: "PY",
    Currency: "Guarani",
    Code: "PYG"
  },
  {
    Country: "Peru",
    CountryCode: "PE",
    Currency: "Nuevo Sol",
    Code: "PEN"
  },
  {
    Country: "Philippines",
    CountryCode: "PH",
    Currency: "Peso",
    Code: "PHP"
  },
  {
    Country: "Poland",
    CountryCode: "PL",
    Currency: "Zloty",
    Code: "PLN"
  },
  {
    Country: "Qatar",
    CountryCode: "QA",
    Currency: "Rial",
    Code: "QAR"
  },
  {
    Country: "Romania",
    CountryCode: "RO",
    Currency: "Leu",
    Code: "RON"
  },
  {
    Country: "Russian Federation",
    CountryCode: "RU",
    Currency: "Ruble",
    Code: "RUB"
  },
  {
    Country: "Rwanda",
    CountryCode: "RW",
    Currency: "Rwanda Franc",
    Code: "RWF"
  },
  {
    Country: "Sao Tome and Principe",
    CountryCode: "ST",
    Currency: "Dobra",
    Code: "STD"
  },
  {
    Country: "Saudi Arabia",
    CountryCode: "SA",
    Currency: "Riyal",
    Code: "SAR"
  },
  {
    Country: "Seychelles",
    CountryCode: "SC",
    Currency: "Rupee",
    Code: "SCR"
  },
  {
    Country: "Sierra Leone",
    CountryCode: "SL",
    Currency: "Leone",
    Code: "SLL"
  },
  {
    Country: "Singapore",
    CountryCode: "SG",
    Currency: "Dollar",
    Code: "SGD"
  },
  {
    Country: "Slovakia (Slovak Republic)",
    CountryCode: "SK",
    Currency: "Koruna",
    Code: "SKK"
  },
  {
    Country: "Solomon Islands",
    CountryCode: "SB",
    Currency: "Solomon Islands Dollar",
    Code: "SBD"
  },
  {
    Country: "Somalia",
    CountryCode: "SO",
    Currency: "Shilling",
    Code: "SOS"
  },
  {
    Country: "South Africa",
    CountryCode: "ZA",
    Currency: "Rand",
    Code: "ZAR"
  },
  {
    Country: "Sri Lanka",
    CountryCode: "LK",
    Currency: "Rupee",
    Code: "LKR"
  },
  {
    Country: "Sudan",
    CountryCode: "SD",
    Currency: "Dinar",
    Code: "SDG"
  },
  {
    Country: "Suriname",
    CountryCode: "SR",
    Currency: "Surinamese Guilder",
    Code: "SRD"
  },
  {
    Country: "Swaziland",
    CountryCode: "SZ",
    Currency: "Lilangeni",
    Code: "SZL"
  },
  {
    Country: "Sweden",
    CountryCode: "SE",
    Currency: "Krona",
    Code: "SEK"
  },
  {
    Country: "Syrian Arab Republic",
    CountryCode: "SY",
    Currency: "Syrian Pound",
    Code: "SYP"
  },
  {
    Country: "Taiwan",
    CountryCode: "TW",
    Currency: "Dollar",
    Code: "TWD"
  },
  {
    Country: "Tajikistan",
    CountryCode: "TJ",
    Currency: "Tajikistan Ruble",
    Code: "TJS"
  },
  {
    Country: "Tanzania",
    CountryCode: "TZ",
    Currency: "Shilling",
    Code: "TZS"
  },
  {
    Country: "Thailand",
    CountryCode: "TH",
    Currency: "Baht",
    Code: "THB"
  },
  {
    Country: "Tonga",
    CountryCode: "TO",
    Currency: "PaÕanga",
    Code: "TOP"
  },
  {
    Country: "Trinidad and Tobago",
    CountryCode: "TT",
    Currency: "Trinidad and Tobago Dollar",
    Code: "TTD"
  },
  {
    Country: "Tunisia",
    CountryCode: "TN",
    Currency: "Tunisian Dinar",
    Code: "TND"
  },
  {
    Country: "Turkey",
    CountryCode: "TR",
    Currency: "Lira",
    Code: "TRY"
  },
  {
    Country: "Turkmenistan",
    CountryCode: "TM",
    Currency: "Manat",
    Code: "TMT"
  },
  {
    Country: "Uganda",
    CountryCode: "UG",
    Currency: "Shilling",
    Code: "UGX"
  },
  {
    Country: "Ukraine",
    CountryCode: "UA",
    Currency: "Hryvnia",
    Code: "UAH"
  },
  {
    Country: "United Arab Emirates",
    CountryCode: "AE",
    Currency: "Dirham",
    Code: "AED"
  },
  {
    Country: "Uruguay",
    CountryCode: "UY",
    Currency: "Peso",
    Code: "UYU"
  },
  {
    Country: "Uzbekistan",
    CountryCode: "UZ",
    Currency: "Som",
    Code: "UZS"
  },
  {
    Country: "Vanuatu",
    CountryCode: "VU",
    Currency: "Vatu",
    Code: "VUV"
  },
  {
    Country: "Venezuela",
    CountryCode: "VE",
    Currency: "Bolivar",
    Code: "VEF"
  },
  {
    Country: "Vietnam",
    CountryCode: "VN",
    Currency: "Dong",
    Code: "VND"
  },
  {
    Country: "Yemen",
    CountryCode: "YE",
    Currency: "Rial",
    Code: "YER"
  },
  {
    Country: "Zambia",
    CountryCode: "ZM",
    Currency: "Kwacha",
    Code: "ZMK"
  },
  {
    Country: "Zimbabwe",
    CountryCode: "ZW",
    Currency: "Zimbabwe Dollar",
    Code: "ZWD"
  }
]

$.get('http://www.apilayer.net/api/live?access_key=cb5053f2153794435276625201be74be', ee);

function ee(rates){
  $.each(petrolPrices,function(){
    var dlr = this.costindollar
      var cntrycode = this.country_code;
      var currAr = $.grep(currencyArray, function(entry,n){
        if(entry.CountryCode == cntrycode) {return true}
        else {return false}
      });
      if (currAr.length >0 ){
          var curr = currAr[0].Code;
        if (rates['quotes'].hasOwnProperty('USD'+curr)){
          var exrate = rates['quotes']['USD'+curr];
          this.costinlocalcurrency = (exrate*dlr).toFixed(2);
      }
     }
  });
  console.log(JSON.stringify(petrolPrices));
}