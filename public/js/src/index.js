"use strict";

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
//const key = "AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs";
const key = "***REMOVED***";

// set default map coordinates (to London)
// will be overriden by local coordinates if user shares location
var localLatLang = {lat: 51.5089254, lng: -0.107437};

// holder for geolocation coordinates returned by google
var currentLocationInfo = {
	start_latitude : "",
	start_longitude : "",
	end_latitude : "",
	end_longitude : ""
};

function clearLocationInfo(){
	currentLocationInfo = {
		start_latitude : "",
		start_longitude : "",
		end_latitude : "",
		end_longitude : ""
	};
}

// holder for factors involved in drive cost calculation
var driveFactors = {
	duration : 0.00,        // in minutes 
	distance : 0.00,        // in kms
	milage : 0.00,          // in kmpl
	petrol_cost : 0.00,     // per litre, in local currency
	traffic_multiplier : 1.00, // time with traffic/time without traffic
	distUnits : "kms",		// or "miles"
	milageUnits : "kmpl",	// or "mpgus" or "mpguk"
	fuelUnits : "litres",	// or "gallons"
	currency : '',
	petrolUsed : 0.0,
	driveCost : ''
};

//-----------------------

$resultGrid.hide();


function clearDriveFactors(){
	driveFactors = {
		duration : 0.00,
		distance : 0.00,
		milage : 0.00,
		petrol_cost : 0.00,
		traffic_multiplier : 1.00,
		distUnits : "km",
		milageUnits : "kmpl",
		fuelUnits : "litres",
		currency : '',
		petrolUsed : 0.0,
		driveCost : ''
	};
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
	directionsService = new google.maps.DirectionsService; 
	directionsDisplay = new google.maps.DirectionsRenderer;  
}

function resetEverything(){
	// initialise google map
	$("#progressBar").hide();
	$("#locationToInput").val("");
	$("#locationFromInput").val("");
	$("#submitButton").prop('disabled', false);
	$("#locationToInput").prop('disabled', false);
	$("#locationFromInput").prop('disabled', false);
	clearLocationInfo();
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
}

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
	if ( currentLocationInfo.start_latitude!="" &&
		currentLocationInfo.start_longitude!="" &&
		$('#locationFromInput').val() !=""
		)
	{
		return true;
	} else {
		return false;
	}	
}

// has a 'to' location been entered? is it valid?
function toLocationValid(){
	if (currentLocationInfo.end_latitude!="" &&
		currentLocationInfo.end_longitude!=""&&
		$('#locationToInput').val() !=""
		)
	{
		return true;
	} else {
		return false;
	}	
}

// remove all markers from map
function clearOverlays() {
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
	var mapSrcUrl;
	fromStr = $("#locationFromInput").val();
	toStr = $("#locationToInput").val();
	//if both locations are valid, create a route
	if (fromLocationValid() && toLocationValid()){
		clearOverlays();
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
		}
		var marker = new google.maps.Marker({
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
		}
		var marker = new google.maps.Marker({
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

// calculates cost of driving based on info about the uber trip
function makeDriveCalculations(uberInfo){
	driveFactors.petrol_cost = 64.00;
	driveFactors.milage = 14.00;
	driveFactors.duration= uberInfo.prices[0].duration/60;				// convert to mins
	driveFactors.distance= uberInfo.prices[0].distance*1.60934;			// convert to kms
	driveFactors.currency = uberInfo.prices[0].estimate.match(/^\D*/);	// get currency symbol
	driveFactors.petrolUsed = (driveFactors.distance/driveFactors.milage)*driveFactors.traffic_multiplier;
	var dc = driveFactors.petrolUsed*driveFactors.petrol_cost;
	dc = driveFactors.currency+(dc*.9).toFixed(0)+'-'+(dc*1.1).toFixed(0)
	driveFactors.driveCost = dc;
}

function changeDriveFactorUnits(km){
	
}

// adds distance, time and driving cost info on the page
function refreshDriveInfo(){
	var html = '';
	html += '<h5 style="text-align : center;"><br><strong>'+driveFactors.driveCost+'<sup>*<sup></strong></h5>';
	$driveResultSubDiv.append(html);
	$fuelSpan.append(driveFactors.petrolUsed.toFixed(2) + ' L (petrol)<br>@ '+driveFactors.currency+driveFactors.petrol_cost+' per litre');
	$resultDiv.append('<p>Distance: '+(driveFactors.distance).toFixed(2)+' kms</p>'+
		'<p><i class="material-icons" id="time-icon">access_time</i> ' + driveFactors.duration+' mins</p>');
}

// returns html string for displaying cost of getting an uber
function createUberHtml(uberInfo){
	var html = '';
	html+= '<h5 style="text-align : center;"><br><strong>' + uberInfo.prices[0].estimate+'<sup>*<sup></strong></h5>'
	html+= '<p style="text-align : center;">via '+uberInfo.prices[0].display_name+'</p>';
	html+= '<hr><small>Other options</small><br>';
	html+= '<table class="mdl-data-table mdl-js-data-table">';
	var serviceName = uberInfo.prices[0].display_name;
	$.each(uberInfo.prices, function (key, value) {
		// check if result for same service has already been displayed.
		// takes care of uber pool being returned twice in india.
		if (value.display_name != serviceName && value.estimate !='Metered') {
			serviceName = value.display_name;
			html+='<tr><td>'+value.display_name + '</td><td>' + value.estimate + '</td></tr>';
		}			
	});
	html+='</table>';
	return html;
}

// SUBMIT button
$("#submitButton").click(function () {
	if (!fromLocationValid() || !toLocationValid()){
		// TO-DO: notify user something is wrong with the input
		return;
	}
	freezeControls();		// freeze inputs
	$progressBar.show();	// show a progress bar while processing
	$.post("/traffic", currentLocationInfo, function(reply){	// get traffic multiplier from google
		console.log(reply.multiplier);
		driveFactors.traffic_multiplier = reply.multiplier;
	}).then(function(){
		$.post("/uber", currentLocationInfo, function (data) {	// get price estimates from uber
			console.log(data);
			$fromDiv.append(fromStr);				// display 'from' location
			$toDiv.append(toStr);					// display 'to' location
			makeDriveCalculations(data);			// calculate drive results
			refreshDriveInfo();						// display driving cost on page
			var uberHtml = createUberHtml(data);	// generate html for uber results
			$uberResultSubDiv.append(uberHtml);		// display uber prices
			$inputGrid.fadeOut( "slow", function(){	// fade in result div
				$resultGrid.fadeIn( "slow" );
				var trafficLayer = new google.maps.TrafficLayer();	// add traffic layer on map
				trafficLayer.setMap(map);
			});
		});
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
showDialogButton.addEventListener('click', function() {
	dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
});
$('#mileage_slider').on('input',  function() {
   $("#mileage_label").innerHTML = $('#mileage_slider').val();           
});