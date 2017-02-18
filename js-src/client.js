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
var $smallMilage = $('#modal-milage-small');
var $mediumMilage = $('#modal-milage-medium');
var $largeMilage = $('#modal-milage-large');
var $modal_fuel_cost_slider = $('#fuel_cost_slider');
var $sj_from = $('#locationFromInput');
var $sj_to = $("#locationToInput");

var currentLocationInfo;
var g2l = 3.785 ;	// x gallons = g2l * x litres
var m2k = 1.609 ;	// x miles = m2k * x kms

var country = 'IN';		// two letter country code
var currency = 'INR';		// local currency symbol or abbr.
var units = 'metric' ;	// or 'imperial'

var imperialUnitStrings = {
		fuelUnits : 'L',
		milageUnits : 'kmpl',
		distUnits : 'km',
		fuelCostUnits : 'per litre'
	}

var metricUnitStrings = {
		fuelUnits : 'L', // or "miles"
		milageUnits : 'kmpl', // or "mpg"
		distUnits : 'km', // or "GL"
		fuelCostUnits : 'per litre' // or 'per gallon'
	}

var unitStrings = metricUnitStrings;

var milageRange = {
		petrol:{small:15, medium:12, large:8}, 
		diesel:{small:20, medium:15, large:10}
	};


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
};

// google api key
const key = "AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs";


// set default map coordinates (to London)
// will be overriden by local coordinates if user shares location
var localLatLang = {lat: 51.5089254, lng: -0.107437};

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
		petrolMilage = 14.00,		// in kmpl
		dieselMilage = 14.00,		// in kmpl
		petrolCost = 0.00,			// per litre, in local currency
		dieselCost = 0.00,			// per litre, in local currency
		trafficMultiplier = 1.00,	// time with traffic/time without traffic
		fuel = 'petrol'	
	}){
		this.duration = duration;
		this.distance = distance;
		this.petrolMilage = petrolMilage;
		this.dieselMilage = dieselMilage;
		this.petrolCost = petrolCost;
		this.dieselCost = dieselCost;
		this.trafficMultiplier = trafficMultiplier;
		this.fuel = fuel;
	}
	
	getFuelUsed(){
		var milage = (this.fuel==='petrol') ? this.petrolMilage : this.dieselMilage ;
		var fuel = (this.distance/milage) * this.trafficMultiplier;
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

	setFuelCost(cost){
		this[this.fuel+'Cost'] = cost;
	}
	
	display(dispUnits=units){ // units == metric or imperial 
		var fuelCostMultiplier = (dispUnits ==='metric')? 1.0 : g2l ;
		var fuelUsedMultiplier = (dispUnits ==='metric')? 1.0 : 1/g2l ;
		var milageMultiplier = (dispUnits ==='metric')? 1.0 : g2l / m2k ;
		var distanceMultiplier = (dispUnits ==='metric')? 1.0 : 1/m2k ;
		var dFuelUsed = (this.getFuelUsed() * fuelUsedMultiplier).toFixed(2)+ ' ' + unitStrings.fuelUnits ;
		//var dDriveCost = currency+''+Math.ceil((this.getDriveCost()*0.9))+'-'+Math.ceil((this.getDriveCost()*1.1));
		var dDriveCost = '~'+currency+''+Math.ceil(this.getDriveCost());
		var dMilage = (this.fuel==='petrol') ? this.petrolMilage : this.dieselMilage;
		dMilage = (dMilage * milageMultiplier).toFixed(2) + ' ' + unitStrings.milageUnits ;
		var dDistance = (this.distance * distanceMultiplier).toFixed(2)+ ' ' + unitStrings.distUnits;
		var dFuelCost = (this.fuel==='petrol') ? this.petrolCost : this.dieselCost;
		dFuelCost = currency+''+(dFuelCost * fuelCostMultiplier).toFixed(2)+ ' ' + unitStrings.fuelCostUnits;
		var displayValues = {
			fuelCost : dFuelCost,
			fuelUsed : dFuelUsed,
			driveCost : dDriveCost,
			milage : dMilage,
			distance : dDistance
		};
		return displayValues;
	}
	
}


function mapSetLocation(location, addressStr){
	if (addressStr == undefined) {
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
	$sj_to.val("");
	$sj_from.val("");
	$("#submitButton").prop('disabled', false);
	$sj_to.prop('disabled', false);
	$sj_from.prop('disabled', false);
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
	var country_code = getCountry(place.address_components);
	localiseUnits(country_code);
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
}


function coCityLocationValid(){
	if ( localLatLang.lat!=="" &&
		localLatLang.lng!=="" &&
		$('#co_city').val() !==""
		){
		return true;
	} else {
		return false;
	}	
}

// has a 'from' location been entered? is it valid?
function fromLocationValid(){
	if ( currentLocationInfo.start_latitude!=="" &&
		currentLocationInfo.start_longitude!=="" &&
		$sj_from.val() !==""
		){
		return true;
	} else {
		return false;
	}	
}

// has a 'to' location been entered? is it valid?
function toLocationValid(){
	if (currentLocationInfo.end_latitude!=="" &&
		currentLocationInfo.end_longitude!==""&&
		$('#locationToInput').val() !==""
		){
		return true;
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
						console.log(results);
						// update text in the input field
						$sj_from.val(results[0].formatted_address);
						currentLocationInfo.start_latitude = geolocation.lat;
						currentLocationInfo.start_longitude = geolocation.lng;
						refreshMap();	// show marker for 'from' address
						var country_code = getCountry(results[0].address_components);
						localiseUnits(country_code);
					}
				}
      		});
		});
	}
}



// freeze input fields and the submit button
// while processing
function freezeControls(){
	$("#submitButton").prop('disabled', true);
	$sj_to.prop('disabled', true);
	$sj_from.prop('disabled', true);	
}

function clearDiv(div){
	div.empty();
	//div.prop('disabled', false);
}

// 

// update unit strings when units change
// change drive factor units
function changeDisplayUnits(){
	var newunits = $modal_units_radio.filter(':checked').val();	// set the units
	units = newunits;
	console.log(newunits);	
	if (newunits === 'metric'){
		unitStrings = metricUnitStrings;
	}
	else if (newunits === 'imperial'){
		unitStrings = imperialUnitStrings;
	}
	refreshMilageTextInModal();		// change text under car sizes in settings
	$modal_fuel_cost.text(di.display().fuelCost);	// update the text under fuel cost slider
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
	var cheapestOptionCost = uberInfo.prices[0].estimate.split('.')[0]; // first result from uber, stripped of decimal places
	var html = '';
	html+= '<h5 style="text-align : center;"><br><strong>' + cheapestOptionCost +'<sup>*<sup></strong></h5>';
	html+= '<p style="text-align : center;">via '+uberInfo.prices[0].display_name+'</p>';
	html+= '<hr><small>Other options</small><br>';
	html+= '<table class="mdl-data-table mdl-js-data-table" style="width:20%;">';
	var serviceName = uberInfo.prices[0].display_name;
	$.each(uberInfo.prices, function (key, value) {
		// check if result for same service has already been displayed.
		// takes care of uber pool being returned twice in india.
		if (value.display_name != serviceName && value.estimate !='Metered') {
			serviceName = value.display_name;
			html+='<tr><td>'+serviceName + '</td><td>' + value.estimate + '</td></tr>';
		}			
	});
	html+='</table>';
	return html;
}

// helper func for refreshMilageTextInModal
function convertedMilage(size){
	var multiplier = (units=='metric') ? 1 : g2l / m2k;
	return Math.round(milageRange[di.fuel][size] * multiplier)+ ' ' + unitStrings.milageUnits;
}

// refreshes the text under car size selector in settings
// takes into account the fuel type and units selected
function refreshMilageTextInModal(){
	$smallMilage.text(convertedMilage('small'));
	$mediumMilage.text(convertedMilage('medium'));
	$largeMilage.text(convertedMilage('large'));
}
	 

// google analytics---------------
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-82207430-1', 'auto');
ga('send', 'pageview');

//------------------------------------

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
		refreshDriveInfo();	// make the calculations again
		$.get("/api/fuelprice/", {countrycode:country_code},function(fuelInfo){
			di.petrolCost=fuelInfo.petrol_price_local;	// set cost of petrol
			di.dieselCost=fuelInfo.diesel_price_local;	// set cost of diesel
			console.log(di.petrolCost);
			console.log(di.dieselCost);
			console.log(di.fuel);
			console.log((di.getFuelCost()*0.9).toFixed(2));
			console.log(('max', di.getFuelCost()*1.1).toFixed(2));
			if (currency_symbols.hasOwnProperty(fuelInfo.currency_code)){
				currency = currency_symbols[fuelInfo.currency_code];
			} else {
				currency = fuelInfo.currency_code;
			}
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


// SUBMIT button
$("#submitButton").click(function () {
	//console.log(currentLocationInfo);
	if (!fromLocationValid() || !toLocationValid()){
		// TO-DO: notify user something is wrong with the input
		return;
	}
	freezeControls();		// freeze inputs
	$progressBar.show();	// show a progress bar while processing
		$.post("/api/traffic", currentLocationInfo)		// get traffic multiplier from google
		.then(function(reply){
			console.log(reply.multiplier);
			di.trafficMultiplier = reply.multiplier;
			$.post("/api/uber", currentLocationInfo)	// get price estimates from uber
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
			});
		});
});

// BACK button
$("#backButton").click(function () {
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
});


// Milage selector
$modal_car_size_radio.change(function() {
	// this is how you use mdl icon toggles as radio boxes
    $.each($modal_car_size_radio,function(){
		this.MaterialIconToggle.uncheck();		// uncheck all toggle buttons
	  });
	this.MaterialIconToggle.check();			// check the one that was clicked
	var carSize = $modal_car_size_radio.find("input").filter(':checked').val();		// small, medium or large
	console.log(carSize);
	di.petrolMilage = milageRange.petrol[carSize];
	di.dieselMilage = milageRange.diesel[carSize];
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
	refreshMilageTextInModal();
});

$("#locateme").click(function () {
	geolocate();		// get user's geographical location
});


$('#co_weekly_distance').on('input',function(){
   $("#co_dist_disp").html(this.value);
});

$('#co_car_age').on('input',function(){
   $("#co_car_age_disp").html(this.value);
});

$('#co_car_value').on('input',function(){
   $("#co_car_value_disp").html(this.value);
});


(function onload(){
	$resultGrid.hide();
})();


$( document ).ready(function() {
	 //$('#units-1').get(0).parentNode.on('mdl-componentupgraded', function() {
		//localiseUnits('GB');
	///	console.log('initial setup done');
	//});
});

// $(window).load(function () {
// 	document.querySelector('#fuel_cost_slider').MaterialSlider.change(di.getFuelCost());
// });

// $( document ).ready(function( {
// 	document.querySelector('#fuel_cost_slider').MaterialSlider.change(di.getFuelCost());
// });
