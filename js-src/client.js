"use strict";
/*jshint esversion: 6, devel: true */
/*globals $:false */
/*global google, console, navigator, document, dialogPolyfill, ga, window */


// google autocomplete objects
var autocompleteFrom;
var autocompleteTo;
var autocompleteCoCity;

// google map object and markers array
var map;
var markersArray = [];

// google directions
var directionsService;
var directionsDisplay;

// origin and destination address
var fromStr;
var toStr;

var coCalcFactors = {
	uberDistUnit : 'km',
	uberCostPerKm : 1,
	weeklyDist : 1,
	carValue : 1,
	carAge :1,
	calcPeriod : 1,
	insuranceRate : 0.1
};

// DOM variables
var $uberResultSubDiv = $('#uberResultSubDiv');
var $driveResultSubDiv = $('#driveResultSubDiv');
var $resultDiv = $('#resultDiv');
var $fromDiv= $("#fromDiv");
var $toDiv = $("#toDiv");
var $inputGrid = $("#inputDiv");
var $resultGrid = $("#resultGrid");
var $progressBar = $("#progressBar");
var $fuelSpan = $("#fuel");
var $modal_units_radio = $('input[type=radio][name=units]');
var $modal_fuel_cost = $('#modal-fuel-cost');
var $modal_fuel_type_radio = $('input[type=radio][name=fuel]');
var $modal_fuel_name_span = $('#modal-fuel-name');
var $modal_car_size_radio = $(".carsizeradio");
var $smallMileage = $('#modal-mileage-small');
var $mediumMileage = $('#modal-mileage-medium');
var $largeMileage = $('#modal-mileage-large');
var $modal_fuel_cost_slider = $('#fuel_cost_slider');
var $sj_from = $('#locationFromInput');
var $sj_to = $("#locationToInput");


var $coResultGrid = $('#co_resultGrid');
var $coInputGrid = $('#co_inputDiv');

// USD to local currency conversion
var coCurrencyMultiplier = 1.0;

var currentLocationInfo;
var g2l = 3.785 ;	// x gallons = g2l * x litres
var m2k = 1.609 ;	// x miles = m2k * x kms

var country = 'IN';		// two letter country code
var currency = 'INR';		// local currency symbol or abbr.
var units = 'metric' ;	// or 'imperial'

var imperialUnitStrings = {
		fuelUnits : 'GL',
		MileageUnits : 'mpg',
		distUnits : 'miles',
		fuelCostUnits : 'per Gallon',
		distunitsFull : 'miles'
	}

var metricUnitStrings = {
		fuelUnits : 'L', // or "miles"
		MileageUnits : 'kmpl', // or "mpg"
		distUnits : 'km', // or "GL"
		fuelCostUnits : 'per litre', // or 'per gallon'
		distunitsFull : 'kilometers'
	}

var unitStrings = metricUnitStrings;

var MileageMatrix = {
		petrol:{small:15, medium:12, large:8}, 
		diesel:{small:20, medium:15, large:10}
	};

// source :http://country.io/
var currrencyByCountry = {"BD": "BDT", "BE": "EUR", "BF": "XOF", "BG": "BGN", "BA": "BAM", "BB": "BBD", "WF": "XPF", "BL": "EUR", "BM": "BMD", "BN": "BND", "BO": "BOB", "BH": "BHD", "BI": "BIF", "BJ": "XOF", "BT": "BTN", "JM": "JMD", "BV": "NOK", "BW": "BWP", "WS": "WST", "BQ": "USD", "BR": "BRL", "BS": "BSD", "JE": "GBP", "BY": "BYR", "BZ": "BZD", "RU": "RUB", "RW": "RWF", "RS": "RSD", "TL": "USD", "RE": "EUR", "TM": "TMT", "TJ": "TJS", "RO": "RON", "TK": "NZD", "GW": "XOF", "GU": "USD", "GT": "GTQ", "GS": "GBP", "GR": "EUR", "GQ": "XAF", "GP": "EUR", "JP": "JPY", "GY": "GYD", "GG": "GBP", "GF": "EUR", "GE": "GEL", "GD": "XCD", "GB": "GBP", "GA": "XAF", "SV": "USD", "GN": "GNF", "GM": "GMD", "GL": "DKK", "GI": "GIP", "GH": "GHS", "OM": "OMR", "TN": "TND", "JO": "JOD", "HR": "HRK", "HT": "HTG", "HU": "HUF", "HK": "HKD", "HN": "HNL", "HM": "AUD", "VE": "VEF", "PR": "USD", "PS": "ILS", "PW": "USD", "PT": "EUR", "SJ": "NOK", "PY": "PYG", "IQ": "IQD", "PA": "PAB", "PF": "XPF", "PG": "PGK", "PE": "PEN", "PK": "PKR", "PH": "PHP", "PN": "NZD", "PL": "PLN", "PM": "EUR", "ZM": "ZMK", "EH": "MAD", "EE": "EUR", "EG": "EGP", "ZA": "ZAR", "EC": "USD", "IT": "EUR", "VN": "VND", "SB": "SBD", "ET": "ETB", "SO": "SOS", "ZW": "ZWL", "SA": "SAR", "ES": "EUR", "ER": "ERN", "ME": "EUR", "MD": "MDL", "MG": "MGA", "MF": "EUR", "MA": "MAD", "MC": "EUR", "UZ": "UZS", "MM": "MMK", "ML": "XOF", "MO": "MOP", "MN": "MNT", "MH": "USD", "MK": "MKD", "MU": "MUR", "MT": "EUR", "MW": "MWK", "MV": "MVR", "MQ": "EUR", "MP": "USD", "MS": "XCD", "MR": "MRO", "IM": "GBP", "UG": "UGX", "TZ": "TZS", "MY": "MYR", "MX": "MXN", "IL": "ILS", "FR": "EUR", "IO": "USD", "SH": "SHP", "FI": "EUR", "FJ": "FJD", "FK": "FKP", "FM": "USD", "FO": "DKK", "NI": "NIO", "NL": "EUR", "NO": "NOK", "NA": "NAD", "VU": "VUV", "NC": "XPF", "NE": "XOF", "NF": "AUD", "NG": "NGN", "NZ": "NZD", "NP": "NPR", "NR": "AUD", "NU": "NZD", "CK": "NZD", "XK": "EUR", "CI": "XOF", "CH": "CHF", "CO": "COP", "CN": "CNY", "CM": "XAF", "CL": "CLP", "CC": "AUD", "CA": "CAD", "CG": "XAF", "CF": "XAF", "CD": "CDF", "CZ": "CZK", "CY": "EUR", "CX": "AUD", "CR": "CRC", "CW": "ANG", "CV": "CVE", "CU": "CUP", "SZ": "SZL", "SY": "SYP", "SX": "ANG", "KG": "KGS", "KE": "KES", "SS": "SSP", "SR": "SRD", "KI": "AUD", "KH": "KHR", "KN": "XCD", "KM": "KMF", "ST": "STD", "SK": "EUR", "KR": "KRW", "SI": "EUR", "KP": "KPW", "KW": "KWD", "SN": "XOF", "SM": "EUR", "SL": "SLL", "SC": "SCR", "KZ": "KZT", "KY": "KYD", "SG": "SGD", "SE": "SEK", "SD": "SDG", "DO": "DOP", "DM": "XCD", "DJ": "DJF", "DK": "DKK", "VG": "USD", "DE": "EUR", "YE": "YER", "DZ": "DZD", "US": "USD", "UY": "UYU", "YT": "EUR", "UM": "USD", "LB": "LBP", "LC": "XCD", "LA": "LAK", "TV": "AUD", "TW": "TWD", "TT": "TTD", "TR": "TRY", "LK": "LKR", "LI": "CHF", "LV": "EUR", "TO": "TOP", "LT": "LTL", "LU": "EUR", "LR": "LRD", "LS": "LSL", "TH": "THB", "TF": "EUR", "TG": "XOF", "TD": "XAF", "TC": "USD", "LY": "LYD", "VA": "EUR", "VC": "XCD", "AE": "AED", "AD": "EUR", "AG": "XCD", "AF": "AFN", "AI": "XCD", "VI": "USD", "IS": "ISK", "IR": "IRR", "AM": "AMD", "AL": "ALL", "AO": "AOA", "AQ": "", "AS": "USD", "AR": "ARS", "AU": "AUD", "AT": "EUR", "AW": "AWG", "IN": "INR", "AX": "EUR", "AZ": "AZN", "IE": "EUR", "ID": "IDR", "UA": "UAH", "QA": "QAR", "MZ": "MZN"}

var currency_symbols = {
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'CRC': '₡', // Costa Rican Colón
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
	'CAD': 'CA$', // canadian dollar
	'AED': 'د.إ', // UAE Dhiram
};

// google api key
const key = "AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs";


// set default map coordinates (to London)
// will be overriden by local coordinates if user shares location
var localLatLang ;

// holder for geolocation coordinates returned by google
class LocationInfo {
	constructor(){
		this.start_latitude = "";
		this.start_longitude = "";
		this.end_latitude = "";
		this.end_longitude = "";
	}
}


class DriveInfo {
	constructor({
		duration = 0.00,        	// in minutes 
		distance = 0.00,        	// in km
		petrolMileage = 14.00,		// in kmpl
		dieselMileage = 14.00,		// in kmpl
		petrolCost = 0.00,			// per litre, in local currency
		dieselCost = 0.00,			// per litre, in local currency
		trafficMultiplier = 1.00,	// time with traffic/time without traffic
		fuel = 'petrol'	
	}){
		this.duration = duration;
		this.distance = distance;
		this.petrolMileage = petrolMileage;
		this.dieselMileage = dieselMileage;
		this.petrolCost = petrolCost;
		this.dieselCost = dieselCost;
		this.trafficMultiplier = trafficMultiplier;
		this.fuel = fuel;
	}
	
	getFuelUsed(){
		var Mileage = (this.fuel==='petrol') ? this.petrolMileage : this.dieselMileage ;
		var fuel = (this.distance/Mileage) * this.trafficMultiplier;
		return fuel;
	}
	
	getDriveCost(){
		var fuelCost = (this.fuel==='petrol') ? this.petrolCost : this.dieselCost ;
		// console.log('fuelcost = '+fuelCost);
		var cost = fuelCost*this.getFuelUsed();
		// console.log('cost = '+cost);
		return cost;
	}

	getFuelCost(){
		return this[this.fuel+'Cost'];
	}

	getMileage(){
		return this[this.fuel+'Mileage'];
	}

	setFuelCost(cost){
		this[this.fuel+'Cost'] = cost;
	}
	
	display(dispUnits=units){ // units == metric or imperial 
		var fuelCostMultiplier = (dispUnits ==='metric')? 1.0 : g2l ;
		var fuelUsedMultiplier = (dispUnits ==='metric')? 1.0 : 1/g2l ;
		var mileageMultiplier = (dispUnits ==='metric')? 1.0 : g2l / m2k ;
		var distanceMultiplier = (dispUnits ==='metric')? 1.0 : 1/m2k ;
		var dFuelUsed = (this.getFuelUsed() * fuelUsedMultiplier).toFixed(2)+ ' ' + unitStrings.fuelUnits ;
		//var dDriveCost = currency+''+Math.ceil((this.getDriveCost()*0.9))+'-'+Math.ceil((this.getDriveCost()*1.1));
		var dDriveCost = '~ '+currency+''+Math.ceil(this.getDriveCost());
		var dMileage = this.getMileage();
		dMileage = (dMileage * mileageMultiplier).toFixed(2) + ' ' + unitStrings.MileageUnits ;
		var dDistance = (this.distance * distanceMultiplier).toFixed(2)+ ' ' + unitStrings.distUnits;
		var dFuelCost = this.getFuelCost();
		dFuelCost = currency+''+(dFuelCost * fuelCostMultiplier).toFixed(2)+ ' ' + unitStrings.fuelCostUnits;
		var displayValues = {
			fuelCost : dFuelCost,
			fuelUsed : dFuelUsed,
			driveCost : dDriveCost,
			Mileage : dMileage,
			distance : dDistance
		};
		return displayValues;
	}
	
}


function mapSetLocation(location, addressStr){
	if (!addressStr) {
		addressStr = '';
		console.log('no location string provided')
	}
	map.setZoom(10);
	// from address	
	if (location.lat!==''&&location.lng!=='') {		// if only 'to' address is valid
		let marker = new google.maps.Marker({
			position: location,
			map: map,
			title: addressStr
		});
		markersArray.push(marker);
		map.setZoom(13);
		map.panTo(location);	// re-centre the map
		localLatLang.lat = location.lat;
		localLatLang.lng = location.lng;
	}
}


// show only to/from location or a route between them 
// if both locations have been entered
function refreshMap() {
	// copy london coordinates
	var tmpLatLang = localLatLang;
	map.setZoom(10);
	// from address	
	fromStr = $sj_from.val();
	toStr = $sj_to.val();
	//if both locations are valid, create a route
	if (fromLocationValid() && toLocationValid()){
		clearMarkers();
		directionsDisplay.setMap(map);
        directionsService.route({
			origin: fromStr,
			destination: toStr,
			travelMode: 'DRIVING'
        }, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
			} else {
				console.log('Directions request failed due to ' + status);
			}
        });
	}
	else if (fromLocationValid()) {		// if only 'from' address is valid
		tmpLatLang = {
			lat : currentLocationInfo.start_latitude,
			lng: currentLocationInfo.start_longitude
		};
		mapSetLocation(tmpLatLang, fromStr)
	}
	else if (toLocationValid()) {		// if only 'to' address is valid
		tmpLatLang = {
			lat : currentLocationInfo.end_latitude,
			lng: currentLocationInfo.end_longitude
		};
		mapSetLocation(tmpLatLang, toStr)
	}
	map.panTo(tmpLatLang);	// re-centre the map
	localLatLang.lat = tmpLatLang.lat;
	localLatLang.lng = tmpLatLang.lng;
	var circle = new google.maps.Circle({
					center: tmpLatLang,
					//radius: position.coords.accuracy
					radius: 33
				});
	autocompleteFrom.setBounds(circle.getBounds());
	autocompleteTo.setBounds(circle.getBounds());
}

// holder for factors involved in drive cost calculation
var di = new DriveInfo({});


function clearDriveFactors(){
	di.duration = 0.00;
	di.distance = 0.00;
	di.trafficMultiplier = 1.00;
}

function resetMap(){
	markersArray = [];
	map = new google.maps.Map(document.getElementById('map'), {
		center: localLatLang,
		scrollwheel: true,
		zoom: 10,
		mapTypeControl: false,
		streetViewControl: false
	});
	directionsService = new google.maps.DirectionsService(); 
	directionsDisplay = new google.maps.DirectionsRenderer();  
}



// reset map back to original state
function resetEverything(){
	// initialise google map
	$("#progressBar").hide();
	$("#co_progressBar").hide();
	$sj_to.val("");
	$sj_from.val("");
	unFreezeControls();
	currentLocationInfo = new LocationInfo();
	clearDriveFactors();
	resetMap();
	refreshMap();
	$resultGrid.fadeOut( "slow", function(){ 
		$inputGrid.fadeIn( "slow" );
		// clear all result divs
		[
			$uberResultSubDiv,
			$driveResultSubDiv,
			$resultDiv,
			$fromDiv,
			$toDiv,
			$fuelSpan
		].forEach(clearDiv);
	});
}

// populate lat, lng of origin address
function fillFromAddress() {
	var place = autocompleteFrom.getPlace();
	currentLocationInfo.start_latitude = place.geometry.location.lat();
	currentLocationInfo.start_longitude = place.geometry.location.lng();
	refreshMap();	// show marker for 'from' address
	console.log(place.address_components);
	// customise units according to the country of the location entered
	var country_code = getCountry(place.address_components);
	country = country_code;
	localiseUnits(country_code);
	// fill in city on the co tab and et local location cordinates
	var cityStr = getCity(place.address_components);
	$('#co_city').val(cityStr);
	localLatLang.lat = place.geometry.location.lat();
	localLatLang.lng = place.geometry.location.lng();
	convertCoCarValue(country_code);
}

// populate lat, lng of destination address
function fillToAddress() {
	var place = autocompleteTo.getPlace();
	currentLocationInfo.end_latitude = place.geometry.location.lat();
	currentLocationInfo.end_longitude = place.geometry.location.lng();
	refreshMap();	// show marker for 'to' address
}

// populate lat, lng of destination address
function fillCoCity() {
	var place = autocompleteCoCity.getPlace();
	localLatLang.lat = place.geometry.location.lat();
	localLatLang.lng = place.geometry.location.lng();
	//refreshMap();	// show marker for 'to' address
	mapSetLocation(localLatLang, $('#co_city').val());
	// get country code from google autocomplete
	var country_code = (getCountry(place.address_components));
	// convert slider text to local currency
	convertCoCarValue(country_code);	
}


// has a 'from' location been entered? is it valid?
function fromLocationValid(){
	if ( currentLocationInfo.start_latitude &&
		currentLocationInfo.start_longitude &&
		$sj_from.val()
	){
		return true;
	} else {
		return false;
	}	
}

// has a 'to' location been entered? is it valid?
function toLocationValid(){
	if (currentLocationInfo.end_latitude &&
		currentLocationInfo.end_longitude &&
		$('#locationToInput').val()
	){
		return true;
	} else {
		return false;
	}	
}

function co_cityValid(){
	if (localLatLang.lat && localLatLang.lng && $('#co_city').val()){
		return true
	} else {
		return false;
	}
}


// remove all markers from map
function clearMarkers() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}



// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var geolocation = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			// reverse-geocode to get full address
			var geocoder = new google.maps.Geocoder; 
			geocoder.geocode({'location': geolocation}, function(results, status) {
				if (status == 'OK') {
					if (results[0]) {
						// update text in the input field
						var place = results[0];
						$sj_from.val(place.formatted_address);
						currentLocationInfo.start_latitude = geolocation.lat;
						currentLocationInfo.start_longitude = geolocation.lng;
						refreshMap();	// show marker for 'from' address
						var country_code = getCountry(place.address_components);
						country = country_code;
						localiseUnits(country_code);
						// fill in city on the co tab and et local location cordinates
						var cityStr = getCity(place.address_components);
						$('#co_city').val(cityStr);
						localLatLang.lat = place.geometry.location.lat();
						localLatLang.lng = place.geometry.location.lng();
						convertCoCarValue(country_code);
					}
				}
      		})
		}, function(error){
			console.log(error);
			console.log('ERROR: geoloca did not work');
		}, {enableHighAccuracy: true, maximumAge: 10000});
	}
}



// freeze input fields and the submit button
// while processing
function freezeControls(){
	$("#submitButton").prop('disabled', true);
	$sj_to.prop('disabled', true);
	$sj_from.prop('disabled', true);	
}

function unFreezeControls(){
	$("#submitButton").prop('disabled', false);
	$sj_to.prop('disabled', false);
	$sj_from.prop('disabled', false);
}

function clearDiv(div){
	div.empty();
	//div.prop('disabled', false);
}

// 

// update unit strings when units change
// change drive factor units
function changeDisplayUnits(){
	// Get current units from UI
	var newUnits = $modal_units_radio.filter(':checked').val();	// set the units
	// update global unit variable
	units = newUnits;
	// select appropriate unit strings
	unitStrings = (newUnits === 'metric') ? metricUnitStrings : imperialUnitStrings;
	// recalculate values and attach corect unit strings
	refreshMileageTextInModal();		// change text under car sizes in settings
	$modal_fuel_cost.text(di.display().fuelCost);	// update the text under fuel cost slider
	refreshDriveInfo();
	convertCoWeeklyDistValue();
	coUpdateResult();
}



// refreshes the text under car size selector in settings
// takes into account the fuel type and units selected
function refreshMileageTextInModal(){
	// multiply in case units not set to metric
	var multiplier = (units=='metric') ? 1 : g2l / m2k;
	var sizes = ['small','medium', 'large'];
	var $uiElements = [$smallMileage, $mediumMileage, $largeMileage];
	for (var i=0;i<sizes.length;i++){	
		var Mileage = MileageMatrix[di.fuel][sizes[i]]; // get preset Mileage value for correct fuel and car size
		var MileageInCorrectUnits = Math.round(Mileage * multiplier); // convert to local units
		$uiElements[i].text(MileageInCorrectUnits+ ' ' + unitStrings.MileageUnits); // add unit string and display
	}
}

// adds distance, time and driving cost info on the page
function refreshDriveInfo(){
	var dv = di.display();
	var html = '';
	html += '<h5 style="text-align : center;"><br><strong>'+dv.driveCost+'<sup>*<sup></strong></h5>';
	$driveResultSubDiv.html(html);
	$fuelSpan.html(dv.fuelUsed + '<br>@ '+dv.fuelCost);
	$resultDiv.html('<p>Distance: '+dv.distance+'</p>'+
		'<p><i class="material-icons" id="time-icon">access_time</i> ' + di.duration+' mins</p>');
}

// build html string for displaying cost of getting an uber
function createUberHtml(uberInfo){
	console.log(uberInfo);
	var lowestprice = uberInfo.prices[0];
	var currencySymbol = getCurrencySymbol(lowestprice.currency_code);
	var cheapestOptionCost = currencySymbol+lowestprice.low_estimate+'-'+lowestprice.high_estimate; // first result from uber
	var html = '';
	html+= '<h5 style="text-align : center;"><br><strong>' + cheapestOptionCost +'<sup>*<sup></strong></h5>';
	html+= '<p style="text-align : center;">via '+uberInfo.prices[0].display_name+'</p>';
	//html+= '<a href="">Book your Uber</>'
	html+= '<hr><small>Other options</small><br>';
	html+= '<table class="mdl-data-table mdl-js-data-table mdl-cell--1-col-phone" style="width:10%;padding:0px;">';
	//html+= '<ul class="demo-list-item mdl-list">';
	var serviceName = uberInfo.prices[0].display_name;
	$.each(uberInfo.prices, function (key, value) {
		// check if result for same service has already been displayed.
		// takes care of uber pool being returned twice in india.
		if (value.display_name != serviceName && value.estimate !='Metered') {
			serviceName = value.display_name;
			//html+='<li class="mdl-list__item"><span class="mdl-list__item-primary-content">'+serviceName + ' - ' + value.estimate + '</span></li>';
			html+='<tr style=""><td (style="")>'+serviceName + '</td><td (style="width:20%;padding:0px;")>' + value.estimate + '</td></tr>';
		}			
	});
	html+='</table>';
	//html+='</ul>';
	return html;
}
	 

// callback function for google maps api. Fired when it finishes loading. 
function initAutocomplete() {
	// 'from' autocomplete object
	autocompleteFrom = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */document.getElementById('locationFromInput'), { types: ['geocode'] });
	// populate 'from' when user selects an address from the list 
	autocompleteFrom.addListener('place_changed', fillFromAddress);
	$sj_from.attr('placeholder', '');
	
	// 'to' autocomplete object
	autocompleteTo = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */document.getElementById('locationToInput'), { types: ['geocode'] });
	// populate 'to' when user selects an address from the list
	autocompleteTo.addListener('place_changed', fillToAddress);
		

	// 'from' autocomplete object
	autocompleteCoCity = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */document.getElementById('co_city'), { types: ['geocode'], types: ['(cities)'] });
	// populate 'from' when user selects an address from the list 
	autocompleteCoCity.addListener('place_changed', fillCoCity);

	if (local_geoip_latitude&&local_geoip_longitude&&local_geoip_latitude!=='nil'&&local_geoip_longitude!=='nil'){
		localLatLang = {lat:parseFloat(local_geoip_latitude), lng: parseFloat(local_geoip_longitude)};
		console.log(localLatLang);
	}
	else {
		localLatLang = {lat: 51.5089254, lng: -0.107437};
		console.log('sdsc')
	}
	
	resetEverything();
	// reset incase the browser caches form entries
}







//-----------------------



function localiseUnits(country_code){
	console.log(country_code);
	// set map to visitor's location, and local units if (US or UK)
	if (country_code == 'GB'){
		g2l = 4.546;		// change the multiplier for UK gallons
		$("#unit_system").text("Imperial");		//  rename unit system
		units = 'imperial';
	} else 
	if (country_code == 'US'){
		g2l = 3.785;
		$("#unit_system").text("US");		// rename unit system 
		units = 'imperial';
	} else {
		units = 'metric';
	}
	$('input[name="units"]').filter('[value="'+units+'"]').parent()[0].MaterialRadio.check();
	changeDisplayUnits();
	//refreshDriveInfo();	// make the calculations again
	$.get("/api/v1/fuelprice/", {countrycode:country_code},function(fuelInfo){
		di.petrolCost=fuelInfo.petrol_price_local;	// set cost of petrol
		di.dieselCost=fuelInfo.diesel_price_local;	// set cost of diesel
		console.log(fuelInfo);
		var currency_code = currrencyByCountry[country_code];
		currency = getCurrencySymbol(currency_code); // get currency symbol if available
		$modal_fuel_cost.text(di.display().fuelCost);
		$modal_fuel_cost_slider.attr('min', (di.getFuelCost()*0.9));	// set min 10% below di.petrolCost or di.dieselCost
		$modal_fuel_cost_slider.attr('max', (di.getFuelCost()*1.1));	// set max 10% above di.petrolCost or di.dieselCost
		$modal_fuel_cost_slider.val(Math.round(di.getFuelCost()*100)/100);
		// console.log(Math.round(di.getFuelCost()*100)/100);
		// document.querySelector('#fuel_cost_slider').MaterialSlider.change(di.getFuelCost()); // causes jquery errors for some reason
		// $modal_fuel_cost_slider[0].MaterialSlider.change(di.getFuelCost()); // causes jquery errors for some reason
	});
}

// Extrats the two letter country code from address
function getCountry(addrComponents) {
    for (var i = 0; i < addrComponents.length; i++) {
        if (addrComponents[i].types[0] == "country") {
            return addrComponents[i].short_name;
        }
    }
    return false;
}

// Extrats the two letter country code from address
function getCity(addrComponents) {
    for (var i = 0; i < addrComponents.length; i++) {
        if (addrComponents[i].types[0] == "locality") {
            return addrComponents[i].short_name;
        }
    }
    return false;
}

// SUBMIT button
$("#submitButton").on('click',function () {
	//console.log(currentLocationInfo);
	if (!fromLocationValid() || !toLocationValid()){
		// TO-DO: notify user something is wrong with the input
		console.log("One or both the locations are oninvalid.");
		return;
	}
	freezeControls();		// freeze inputs
	$progressBar.show();	// show a progress bar while processing
	console.log(currentLocationInfo);
	$.post("/api/v1/traffic", currentLocationInfo)		// get traffic multiplier from google
		.then(function(reply){
			console.log(reply.multiplier);
			di.trafficMultiplier = reply.multiplier;
			$.post("/api/v1/uber-price", currentLocationInfo)	// get price estimates from uber
			.then(function (uberInfo) {	
				console.log(uberInfo);
				$fromDiv.append(fromStr);				// display 'from' location
				$toDiv.append(toStr);					// display 'to' location
				di.duration= uberInfo.prices[0].duration/60;	// convert to mins
				di.distance= uberInfo.prices[0].distance * m2k;	// update distance for the trip. (conver to kms)
				refreshDriveInfo();						// display driving cost on page
				var uberHtml = createUberHtml(uberInfo);	// generate html for uber results
				$uberResultSubDiv.append(uberHtml);		// display uber prices
				$inputGrid.fadeOut( "slow", function(){	// fade out input div
					$resultGrid.fadeIn( "slow" );		// fade in result div
					var trafficLayer = new google.maps.TrafficLayer();	// create traffic layer
					trafficLayer.setMap(map);			// show traffic layer on map
				});
			}, function(response) {
				console.log('ERROR: Could not communicate with the server');
				console.log(response.status+' : '+response.statusText);
			});
		}, function(response) {
    	console.log('ERROR: Could not communicate with the server');
    	console.log(response.status+' : '+response.statusText);
	});
});

// BACK button
$("#backButton").on('click',function () {
	resetEverything();
});



// var dialog = document.querySelector('dialog');
// var showDialogButton = document.querySelector('#settings_icon');


// if (! dialog.showModal) {
//   dialogPolyfill.registerDialog(dialog);
// }



// OK button
// dialog.querySelector('.close').addEventListener('click', function() {
// 	refreshDriveInfo();
// 	dialog.close();
// });



// fine tune fuel cost 
// fires as the slider is being slid



$modal_fuel_cost_slider.on('input',function(){
	di.setFuelCost($modal_fuel_cost_slider.val());		// update the fuel cost in litres
	$modal_fuel_cost.text(di.display().fuelCost);         // display the cost in local units
	refreshDriveInfo();
	coUpdateResult(); 
});




// Mileage selector
$modal_car_size_radio.change(function() {
	// this is how you use mdl icon toggles as radio boxes
    $.each($modal_car_size_radio,function(){
		this.MaterialIconToggle.uncheck();		// uncheck all toggle buttons
	  });
	this.MaterialIconToggle.check();			// check the one that was clicked
	var carSize = $modal_car_size_radio.find("input").filter(':checked').val();		// small, medium or large
	console.log(carSize);
	di.petrolMileage = MileageMatrix.petrol[carSize];
	di.dieselMileage = MileageMatrix.diesel[carSize];
	refreshDriveInfo();
	coUpdateResult();
});

// Units selector (on change)
$modal_units_radio.parent().change(changeDisplayUnits);


// select fuel type (petrol vs diesel)
$modal_fuel_type_radio.change(function(){
	di.fuel = this.value;		// change fuel type
	$modal_fuel_name_span.text(this.value);		// how much do you pay for...(petrol/diesel)
	$modal_fuel_cost_slider.attr('min', (di.getFuelCost()*0.9));	// set min 10% below di.petrolCost or di.dieselCost
	$modal_fuel_cost_slider.attr('max', (di.getFuelCost()*1.1));	// set max 10% above di.petrolCost or di.dieselCost
	$modal_fuel_cost.text(di.display().fuelCost);
	$modal_fuel_cost_slider[0].MaterialSlider.change(Math.round(di.getFuelCost()*100)/100);
	console.log(di.getFuelCost());
	//$modal_fuel_cost_slider.val(Math.round(di.getFuelCost()*100)/100);
	refreshMileageTextInModal();
	refreshDriveInfo();
	coUpdateResult()
});


function getCurrencySymbol(currencyCode){
	if (currency_symbols.hasOwnProperty(currencyCode)){
		return currency_symbols[currencyCode];
	} else {
		return currencyCode+' ';
	}
}

function commaSeparateNumber(val){
	if (country==='IN'){
		var x=val.toString();
		var lastThree = x.substring(x.length-3);
		var otherNumbers = x.substring(0,x.length-3);
		if(otherNumbers != '')
    	lastThree = ',' + lastThree;
		return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
	} else
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }



$("#locateme").on('click',function () {
	geolocate();		// get user's geographical location
});

$('#co_weekly_distance').on('input',function(){
	convertCoWeeklyDistValue();
});

function convertCoWeeklyDistValue(){
	$('#co_input_dis_units_disp_full').html(unitStrings.distunitsFull);
	$('#co_input_dis_units_disp_abbr').html(unitStrings.distUnits);
	var multiplier = (units==='metric') ? 1 : 1/m2k ;
	var valInLocalunits = Math.round($('#co_weekly_distance').val()*multiplier);
   	$("#co_dist_disp").html(valInLocalunits);
}


// update slider values as it is moved
$('#co_car_value').on('input',function(){
	var valInLocalCurrency = Math.round(this.value*coCurrencyMultiplier);
   $("#co_car_value_disp").html(commaSeparateNumber(valInLocalCurrency));
});

$('#co_calc_period').on('input',function(){
	var text;
	if (this.value < 2) {
		text = '1 Year'
	} else {
		text = this.value+' Years';
	}
   $("#co_calc_period_disp").html(text);
    coCalcFactors.calcPeriod = this.value;
	coUpdateResult();
});


function getDepreciation(startingValue, age, period){
    var depreceationRate = {new:0.85, medium:0.9, old:0.94};
    var finalValue = startingValue*Math.pow(depreceationRate[age], period);
	return startingValue - finalValue;
}


function getInsurance( insuanceRate, carValue, carAge, period){
	var totalInsurance = 0;
	for(var i =1; i<=period; i++){
		var carValueNYear = carValue - getDepreciation(carValue, carAge, i);
		totalInsurance = totalInsurance + insuanceRate*carValueNYear;
	}
	return totalInsurance;
}

// re-calculate everything on the co tab
// all values is in kms, litres
function coCalculate(){  
	var ccf = coCalcFactors;
	var totalDistance = ccf.weeklyDist*52*ccf.calcPeriod;
	var totalUberCost = totalDistance*ccf.uberCostPerKm;	// both in local currency
	var carDepreceation = getDepreciation(ccf.carValue, ccf.carAge, ccf.calcPeriod); // in local currency
	var carFuelCostPerKm = di.getFuelCost()/di.getMileage();	// in local currency
	var carFuelCost = totalDistance*carFuelCostPerKm;	// in local currency
	var totalFuelUsed = totalDistance/di.getMileage();
	var carInsurance = getInsurance(ccf.insuranceRate, ccf.carValue, ccf.carAge, ccf.calcPeriod);
	var totalCarCost = carDepreceation + carFuelCost + carInsurance;
	var returnData = {
		totalUberCost:totalUberCost, 
		totalCarCost:totalCarCost,
		carFuelCost:carFuelCost,
		carDepreceation:carDepreceation,
		totalDistance:totalDistance,
		totalFuelUsed:totalFuelUsed,
		carFuelCost:carFuelCost,
		carInsurance:carInsurance,
		uberCostPerKm:ccf.uberCostPerKm
	}
	return returnData;
}

// recalculate & display all calculated co values with units
function coUpdateResult(){
	var newValues = coCalculate();
	$('#co_uberResultSubDiv').html('<h5>'+roundCommaCurrency(newValues.totalUberCost)+'</h5>');
	$('#co_carResultSubDiv').html('<h5>'+roundCommaCurrency(newValues.totalCarCost)+'</h5>');
	$('#co_result_city_disp').html($('#co_city').val());
	var distMultiplier = (units==='metric')? 1 : 1/m2k;
	//var mileageMultiplier = (dispUnits ==='metric')? 1.0 : g2l / m2k ;
	//var fuelMultiplier = (dispUnits ==='metric')? 1.0 : 1 / g2l ;
	var distInLocalUnits = commaSeparateNumber(Math.round(newValues.totalDistance*distMultiplier));
	$('#co_result_distance_disp').html(distInLocalUnits+' '+unitStrings.distUnits);
	$('#co_fuel').html(roundCommaCurrency(newValues.carFuelCost));
	$('#co_depreciation').html(roundCommaCurrency(newValues.carDepreceation));
	$('#co_insurance').html(roundCommaCurrency(newValues.carInsurance));
	var uberRateInLocalUnits = newValues.uberCostPerKm *distMultiplier ; 
	$('#co_uber_rate').html(getCurrencySymbol(currency)+uberRateInLocalUnits.toFixed(2)+' per '+ unitStrings.distUnits);
}


function roundCommaCurrency(value){
	var currencySymbol = getCurrencySymbol(currency);
	return currencySymbol+commaSeparateNumber(Math.round(value));
}

// Converts the displayed value of car under the slider
// to user's local currency (slider value remains in USD)
function convertCoCarValue(country_code){
	var currency_code = currrencyByCountry[country_code];
	currency = currency_code;
	$('#co_car_value').prop('disabled', true);
	$.get('//api.fixer.io/latest?base=USD',function(data){
		console.log(data);
		if(data.rates.hasOwnProperty(currency_code)){ // exchange rate available for currency
			coCurrencyMultiplier = data.rates[currency_code]; // exchange rate
			var valueInLocalCurrency = Math.round($('#co_car_value').val()*coCurrencyMultiplier);
			var symbol = getCurrencySymbol(currency_code);
			$('#co_car_value_currency_disp').html(symbol);
			$('#co_car_value_disp').html(commaSeparateNumber(valueInLocalCurrency));
		}
		else {
			var valInDollars = Math.round($('#co_car_value').val());
			$('#co_car_value_disp').html(commaSeparateNumber(valInDollars));
			$('#co_car_value_currency_disp').html('USD $');
		}
		$('#co_car_value').prop('disabled', false);
	});
}






function makeStrong(str){
	var s = '<strong>'; 
	return 	s+str+s;
}

$('#co_submitButton').on('click',function(){
	if (!co_cityValid()){
		console.log('city not valid or not entered');
		return;
	}
	$("#co_progressBar").show();
	$.post("/api/v1/uber-rates", localLatLang)	// get price estimates from uber
	.then(function (reply) {
		if (reply.status==='ok'){
			// set all variables in the global object
			console.log(reply.content);
			var uberDistUnit = reply.content.price_details.distance_unit; 
			var distMultiplier = (uberDistUnit==='km') ? 1 : m2k ;
			var uberCostPerKm = reply.content.price_details.cost_per_distance*distMultiplier; // convert to kms
			var weeklyDist =  $('#co_weekly_distance').val(); // in kms
			var carValue = $('#co_car_value').val()*coCurrencyMultiplier; // in lical currency
			coCalcFactors = {
				uberDistUnit : uberDistUnit,
				uberCostPerKm : uberCostPerKm,
				weeklyDist : weeklyDist,
				carValue : carValue,
				carAge : $('input[name=co_car_age]:checked').val(),
				calcPeriod : $('#co_calc_period').val(),
				insuranceRate : 0.2
			}
			$('#co_uber_service').html('Via '+reply.content.display_name);
			console.log(uberCostPerKm);
			var coCalcData = coCalculate();
			coUpdateResult();
			$coInputGrid.hide();
			$coResultGrid.show();
		} else {
			console.log(reply.info);
			console.log(reply.content);
		}
	}, function(response) {
    	console.log('ERROR: Could not communicate with the server');
    	console.log(response.status+' : '+response.statusText);
	});
});

$('#co_backButton').on('click',function(){
	coResetEverything();
});


function coResetEverything(){
	$coInputGrid.show();
	$coResultGrid.hide();
	$("#co_progressBar").hide();
}

(function onload(){
	$resultGrid.hide();
	$coResultGrid.hide();
})();


$( document ).ready(function() {
	console.log(local_geoip_country_code);
	
	componentHandler.upgradeAllRegistered();
	// resetEverything();
	var initCOuntry = (local_geoip_country_code&&local_geoip_country_code!=='nil')?local_geoip_country_code :'GB';
	country = initCOuntry;
	localiseUnits(initCOuntry);
	// $('#co_city').val('London, United Kingdom');
	convertCoCarValue(initCOuntry);
	convertCoWeeklyDistValue();
});






// google analytics---------------
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-82207430-1', 'auto');
ga('send', 'pageview');

//------------------------------------

// $(window).load(function () {
// 	document.querySelector('#fuel_cost_slider').MaterialSlider.change(di.getFuelCost());
// });

// $( document ).ready(function( {
// 	document.querySelector('#fuel_cost_slider').MaterialSlider.change(di.getFuelCost());
// });
