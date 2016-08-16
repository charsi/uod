"use strict";
/*jshint esversion: 6 */
/*globals $:false */

// google autocomplete objects
var autocompleteFrom;
var autocompleteTo;

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
var $modal_units_radio_checked = $('input[type=radio][name=units]:checked');
var $modal_fuel_cost = $('#modal-fuel-cost');
var $smallMilage = $('#modal-milage-small');
var $mediumMilage = $('#modal-milage-medium');
var $largeMilage = $('#modal-milage-large');
var $fuel_cost_slider = $('#fuel_cost_slider');
var dom_fuel_cost_slider = document.querySelector('#fuel_cost_slider')

var currentLocationInfo;
var l2g = 3.785 ;	// 1 gallon = l2g * litres
var k2m = 1.609 ;	// 1 mile = k2m * kms

var country = 'IN';
var currency = '';
var units = 'metric' ;
var unitStrings = {		
		distUnits : "kms",				// or "miles"
		milageUnits : "kmpl",			// or "mpg"
		fuelUnits : "L",				// or "GL"
		fuelCostUnits : "per litre"		// or 'per gallon'
	}
var petrolMilageRange = {small:15, medium:12, large:8};
var dieselMilageRange = {small:35, medium:27, large:20};

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
// const key = "AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs";
// const key = "***REMOVED***";

// set default map coordinates (to London)
// will be overriden by local coordinates if user shares location
var localLatLang = {lat: 51.5089254, lng: -0.107437};

// holder for geolocation coordinates returned by google
class LocationInfo {
	constructor(){
		this.start_latitude = "",
		this.start_longitude = "",
		this.end_latitude = "",
		this.end_longitude = ""
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
	
	// calculates cost of driving based on info about the uber trip
	driveCalculations(){
		var fuelCost = (di.fuel==='petrol') ? di.petrolCost : di.dieselCost ;
		var milage = (di.fuel==='petrol') ? di.petrolMilage : di.dieselMilage ;
		di.fuelUsed = (di.distance/milage)*di.trafficMultiplier;
		var dc = di.fuelUsed*fuelCost;
		dc = currency+Math.ceil((dc*0.9))+'-'+Math.ceil((dc*1.1));
		di.driveCost = dc;
		//console.log(df);
	}
	
	getFuelUsed(){
		var unitMultiplier = (units ==='metric')? 1.0 : l2g ;
		var milage = (this.fuel==='petrol') ? this.petrolMilage : this.dieselMilage ;
		return (this.distance/milage) * this.trafficMultiplier;
	}
	
	getDriveCost(){
		var fuelCost = (this.fuel==='petrol') ? this.petrolCost : this.dieselCost ;
		return fuelCost*this.getFuelUsed()
	}
	
	display(dispUnits=units){ // units == metric or imperial 
		var fuelUsedMultiplier = (dispUnits ==='metric')? 1.0 : l2g ;
		var milageMultiplier = (dispUnits ==='metric')? 1.0 : l2g / k2m ;
		var distanceMultiplier = (dispUnits ==='metric')? 1.0 : k2m ;
		var dFuelUsed = (this.getFuelUsed() * fuelUsedMultiplier).toFixed(2)+ ' ' + unitStrings.fuelUnits ;
		var dDriveCost = currency+''+Math.ceil((this.getDriveCost()*0.9))+'-'+Math.ceil((this.getDriveCost()*1.1));
		var dMilage = (this.fuel==='petrol') ? this.petrolMilage : this.dieselMilage;
		dMilage = (dMilage * milageMultiplier).toFixed(2) + ' ' + unitStrings.milageUnits ;
		var dDistance = (this.distance * distanceMultiplier).toFixed(2)+ ' ' + unitStrings.distUnits;
		var dFuelCost = (this.fuel==='petrol') ? this.petrolCost : this.dieselCost;
		dFuelCost = currency+''+(dFuelCost * fuelUsedMultiplier).toFixed(2)+ ' ' + unitStrings.fuelCostUnits; ;
		var displayValues = {
			fuelCost : dFuelCost,
			fuelUsed : dFuelUsed,
			driveCost : dDriveCost,
			milage : dMilage,
			distance : dDistance
		}
		return displayValues;
	}
	
}

// holder for factors involved in drive cost calculation
var di = new DriveInfo({});


function clearDriveFactors(){
	di.duration = 0.00;
	di.distance = 0.00;
	di.trafficMultiplier = 1.00;
}

function restMap(){
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

function resetEverything(){
	// initialise google map
	$("#progressBar").hide();
	$("#locationToInput").val("");
	$("#locationFromInput").val("");
	$("#submitButton").prop('disabled', false);
	$("#locationToInput").prop('disabled', false);
	$("#locationFromInput").prop('disabled', false);
	currentLocationInfo = new LocationInfo();
	clearDriveFactors();
	restMap();
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
	if($modal_units_radio_checked.val()=='imperial'){
		units = 'imperial';
		changeDisplayUnits();	// set units according to whats selected in the modal window
	}
}

// populate lat, lng of origin address
function fillFromAddress() {
	var place = autocompleteFrom.getPlace();
	currentLocationInfo.start_latitude = place.geometry.location.lat();
	currentLocationInfo.start_longitude = place.geometry.location.lng();
	refreshMap();	// show marker for 'from' address
}

// populate lat, lng of destination address
function fillToAddress() {
	var place = autocompleteTo.getPlace();
	currentLocationInfo.end_latitude = place.geometry.location.lat();
	currentLocationInfo.end_longitude = place.geometry.location.lng();
	refreshMap();	// show marker for 'to' address
}

// has a 'from' location been entered? is it valid?
function fromLocationValid(){
	if ( currentLocationInfo.start_latitude!=="" &&
		currentLocationInfo.start_longitude!=="" &&
		$('#locationFromInput').val() !==""
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

// show only to/from location or a route between them 
// if both locations have been entered
function refreshMap() {
	var tmpLatLang = localLatLang;
	map.setZoom(10);
	fromStr = $("#locationFromInput").val();
	toStr = $("#locationToInput").val();
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
		let marker = new google.maps.Marker({
			position: tmpLatLang,
			map: map,
			title: fromStr
		});
		markersArray.push(marker);
		map.setZoom(13);
	}
	else if (toLocationValid()) {		// if only 'to' address is valid
		tmpLatLang = {
			lat : currentLocationInfo.end_latitude,
			lng: currentLocationInfo.end_longitude
		};
		let marker = new google.maps.Marker({
			position: tmpLatLang,
			map: map,
			title: toStr
		});
		markersArray.push(marker);
		map.setZoom(13);
	}
	map.panTo(tmpLatLang);	// re-centre the map
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
			var circle = new google.maps.Circle({
				center: geolocation,
				radius: position.coords.accuracy
			});
			autocompleteFrom.setBounds(circle.getBounds());
			autocompleteTo.setBounds(circle.getBounds());
			localLatLang.lat = geolocation.lat;
			localLatLang.lng = geolocation.lng;
			refreshMap();
			//console.log(circle.center);
			//console.log(2222222222222);
		});
	}
	//else console.log("kbhhjbjh");
}


// freeze input fields and the submit button
// while processing
function freezeControls(){
	$("#submitButton").prop('disabled', true);
	$("#locationToInput").prop('disabled', true);
	$("#locationFromInput").prop('disabled', true);	
}

function clearDiv(div){
	div.empty();
	//div.prop('disabled', false);
}

// 

// update unit strings when units change
// change drive factor units
function changeDisplayUnits(){
	var us = unitStrings;	
	if (units === 'metric'){
		us.fuelUnits = 'L';
		us.milageUnits = 'kmpl';
		us.distUnits = 'km';
		us.fuelCostUnits = 'per litre';
	}
	else if (units === 'imperial'){
		us.fuelUnits = 'GL';
		us.milageUnits = 'mpg';
		us.distUnits = 'miles';
		us.fuelCostUnits = 'per gallon';
	}
	refreshMilageTextInModal();
	$modal_fuel_cost.text(di.display().fuelCost);
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


function convertedMilage(string){
	var multiplier = 1.0;
	if (units=='metric') {
		multiplier = k2m/l2g;
	}else {
		multiplier = l2g/k2m;
	}
	var origValue = parseFloat(string.split(' ')[0]);
	return Math.round(origValue*multiplier).toString() + ' ' + unitStrings.milageUnits;
}
	 
// this is a needlessly long function
// all it does is convert the units of the three milage options (car size )in the modal dialog
// from kmpl to mpg or vie-versa. The function is a bit complex to avoid static linking the 
// precalculated values for both unit systems. The function instead calculates the values each
// time the units are switched. This is prefered in order to support two different
// types of  'gallons' (USA/UK). With this function for UK visitors only the 
// the conversion variable is modified and the values change here accordingly.
// Must be a way to refactor this somehow.
// refactored :)
function refreshMilageTextInModal(){
	$smallMilage.text(convertedMilage($smallMilage.text()));
	$mediumMilage.text(convertedMilage($mediumMilage.text()));
	$largeMilage.text(convertedMilage($largeMilage.text()));
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
	
	// 'to' autocomplete object
	autocompleteTo = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */document.getElementById('locationToInput'), { types: ['geocode'] });
	// populate 'to' when user selects an address from the list
	autocompleteTo.addListener('place_changed', fillToAddress);
	
	geolocate();		// get user's geographical location
	
	resetEverything();	// reset incase the browser caches form entries
}

//-----------------------

$resultGrid.hide();



// set map to visitor's location, and local units if (US or UK)
$.get('http://freegeoip.net/json/', function(ipGeo){
	localLatLang = {lat: ipGeo.latitude, lng: ipGeo.longitude};
	map.panTo(localLatLang);
	if (ipGeo.country_code == 'GB'){
		l2g = 4.5;		// change the multiplier for UK gallons
		$("#unit_system").text("Imperial");		// make display in miles, gallons by default
		$('input[name=units]#units-2').attr('checked', true);	// in the modal select the correct unit
		units = 'imperial'
		changeDisplayUnits();	// change unit strings, convert values for milage, petrol cost etc
		refreshDriveInfo();		// make the calculations again
	} else 
	if (ipGeo.country_code == 'US'){
		$('input[name=units]#units-2').attr('checked', true);
		units = 'imperial'
		changeDisplayUnits();		// change unit strings
		refreshDriveInfo();
	} 
	country = ipGeo.country_code;
	$.get("/api/fuelprice/", {countrycode:country})	// get fuel cost for the user's country
	.then(function(fuelInfo){
		di.petrolCost=fuelInfo.petrol_price_local;	// set cost of petrol
		di.dieselCost=fuelInfo.diesel_price_local;	// set cost of diesel
		if (currency_symbols.hasOwnProperty(fuelInfo.currency_code)){
			currency = currency_symbols[fuelInfo.currency_code];
		} else {
			currency = fuelInfo.currency_code;
		}
		$modal_fuel_cost.text(di.display().fuelCost);
		$fuel_cost_slider.attr('min', di[di.fuel+'Cost']*0.9);
		$fuel_cost_slider.attr('max', di[di.fuel+'Cost']*1.1);
		//document.querySelector('#fuel_cost_slider').MaterialSlider.change(di[di.fuel+'Cost']); // causes jquery errors for some reason
		$fuel_cost_slider.val(di[di.fuel+'Cost']);
	});
});



// SUBMIT button
$("#submitButton").click(function () {
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
				//console.log(data);
				$fromDiv.append(fromStr);				// display 'from' location
				$toDiv.append(toStr);					// display 'to' location
				di.duration= uberInfo.prices[0].duration/60;					// convert to mins
				di.distance= uberInfo.prices[0].distance;
				refreshDriveInfo();						// display driving cost on page
				var uberHtml = createUberHtml(uberInfo);	// generate html for uber results
				$uberResultSubDiv.append(uberHtml);		// display uber prices
				$inputGrid.fadeOut( "slow", function(){	// fade out input div
					$resultGrid.fadeIn( "slow" );		// fade in result div
					var trafficLayer = new google.maps.TrafficLayer();	// create traffic layer
					trafficLayer.setMap(map);			// show traffic layer on map
				});
			})
		});
	
});

// BACK button
$("#backButton").click(function () {
	resetEverything();
});

var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#settings_icon');
var showDialogButton = document.querySelector('#settings_icon');

if (! dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}

// Open Settings
showDialogButton.addEventListener('click', function() {
	dialog.showModal(); 
});

// OK button
dialog.querySelector('.close').addEventListener('click', function() {
	refreshDriveInfo();
	dialog.close();
});



// fine tune fuel cost
$fuel_cost_slider[0].addEventListener("input", function() {
	di[di.fuel+'Cost'] = $fuel_cost_slider.val()
	$modal_fuel_cost.text(di.display().fuelCost);          
});

// Milage selector
$(".carsizeradio").change(function() {
    $.each($('.carsizeradio'),function(){
		this.MaterialIconToggle.uncheck();
	  });
	this.MaterialIconToggle.check();
	var carSize = $(this).find("input").attr("id").replace('car-toggle-','');
	di.petrolMilage = petrolMilageRange[carSize];
	di.dieselMilage = dieselMilageRange[carSize];
});

// Units selector
$modal_units_radio.change(function(){
	console.log(this.value);
	units = this.value;
	changeDisplayUnits();
});


// select fuel type (petrol vs diesel)
$('input[type=radio][name=fuel]').change(function(){
	di.fuel = this.value;		// change fuel type
	$('#modal-fuel-name').text(this.value);		// how much do you pay for...
	$fuel_cost_slider.attr('min', di[di.fuel+'Cost']*0.9);
	$fuel_cost_slider.attr('max', di[di.fuel+'Cost']*1.1);
	document.querySelector('#fuel_cost_slider').MaterialSlider.change(di[di.fuel+'Cost']);
	$modal_fuel_cost.text(di.display().fuelCost);
});
//dialog.showModal();	 

