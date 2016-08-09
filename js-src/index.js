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

var g2l = 3.785 ;	// 1 gallon = g2l * litres
var m2k = 1.609 ;	// 1 mile = m2k * kms

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
	distance : 0.00,        // in km
	milage : 14.00,			// in kmpl
	fuelCost : 64.00,		// per litre, in local currency
	trafficMultiplier : 1.00, // time with traffic/time without traffic
	currency : '',			// currency symbol string
	petrolUsed : 0.0,		// calculated, in litres
	driveCost : '',			// calculated, in local currency
	units : 'metric',		//or imperial
	fuel : 'petrol',		// or diesel
	unitStrings : {
		distUnits : "kms",			// or "miles"
		milageUnits : "kmpl",		// or "mpg"
		fuelUnits : "L",			// or "GL"
		fuelCostUnits : "per litre" // or 'per gallon'
	}
};

//-----------------------

$resultGrid.hide();



// set map to visitor's location, and local units if (US or UK)
$.get('http://freegeoip.net/json/', function(ipGeo){
	localLatLang = {lat: ipGeo.latitude, lng: ipGeo.longitude};
	map.panTo(localLatLang);
	//if (ipGeo.country_code == 'GB'){
		g2l = 4.5;
		$("#modal_gallon_type").text("UK");
		$('input[name=units]#units-2').attr('checked', true);
		driveFactors.fuelCost = 1.11;
		changeDfUnits('imperial');
		refreshDriveInfo();
	//} else 
		if (ipGeo.country_code == 'US'){
		$('input[name=units]#units-2').attr('checked', true);
		changeDfUnits('imperial');		// change unit strings
		driveFactors.fuelCost = 0.63;
		refreshDriveInfo();
		driveFactors.fuelCost = 2.2;
	}
});

function clearDriveFactors(){
	driveFactors.duration = 0.00;
	driveFactors.distance = 0.00;
	driveFactors.trafficMultiplier = 1.00;
	driveFactors.petrolUsed = 0.0;
	driveFactors. driveCost = '';
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

// 
function populateDriveFactors(uberInfo){
	driveFactors.duration= uberInfo.prices[0].duration/60;					// convert to mins
	driveFactors.distance= uberInfo.prices[0].distance
	driveFactors.currency = uberInfo.prices[0].estimate.match(/^\D*/)[0];	// get currency symbol
	if (driveFactors.units=='metric'){
		driveFactors.distance= uberInfo.prices[0].distance*m2k;				// convert to kms
	} else if (driveFactors.units=='imperial'){
		driveFactors.distance= uberInfo.prices[0].distance;					// leave in miles as retured from uber
	}
}

// calculates cost of driving based on info about the uber trip
function makeDriveCalculations(){
	var df = driveFactors;
	df.petrolUsed = (df.distance/df.milage)*df.trafficMultiplier;
	var dc = df.petrolUsed*df.fuelCost;
	dc = df.currency+(dc*.9).toFixed(0)+'-'+(dc*1.1).toFixed(0)
	df.driveCost = dc;
}

// update unit strings when units change
function changeDfUnits(newunits){
	var df = driveFactors;
	var dfus = driveFactors.unitStrings;
	df.units = newunits;
	switchModalMilageUnits(newunits);
	if (df.units == 'metric'){
		dfus.fuelUnits = 'L';
		dfus.milageUnits = 'kmpl';
		dfus.distUnits = 'km';
		dfus.fuelCostUnits = 'per litre';
		df.milage = df.milage * m2k / g2l;		// convert to kmpl
		df.distance = df.distance * m2k;		// convert to kms
		df.fuelCost = df.fuelCost / g2l; //  per litre
	}
	else if (df.units == 'imperial'){
		dfus.fuelUnits = 'GL';
		dfus.milageUnits = 'mpg';
		dfus.distUnits = 'miles';
		dfus.fuelCostUnits = 'per gallon';
		df.milage = df.milage * g2l / m2k;	// convert to mpg
		df.distance = df.distance / m2k		// convert to miles
		df.fuelCost = df.fuelCost * g2l; // per gallon
	}
	makeDriveCalculations();
	//console.log(driveFactors);
}

// adds distance, time and driving cost info on the page
function refreshDriveInfo(){
	var df = driveFactors ;
	var dfus = driveFactors.unitStrings ;
	var html = '';
	html += '<h5 style="text-align : center;"><br><strong>'+df.driveCost+'<sup>*<sup></strong></h5>';
	$driveResultSubDiv.html(html);
	$fuelSpan.html(df.petrolUsed.toFixed(2) + ' ' + dfus.fuelUnits + 
		'<br>@ '+df.currency+df.fuelCost.toFixed(2)+' '+ dfus.fuelCostUnits);
	$resultDiv.html('<p>Distance: '+(df.distance).toFixed(2)+' '+dfus.distUnits+'</p>'+
		'<p><i class="material-icons" id="time-icon">access_time</i> ' + df.duration+' mins</p>');
}

// build html string for displaying cost of getting an uber
function createUberHtml(uberInfo){
	var cheapestOptionCost = uberInfo.prices[0].estimate.split('.')[0]; // first result from uber, stripped of decimal places
	var html = '';
	html+= '<h5 style="text-align : center;"><br><strong>' + cheapestOptionCost +'<sup>*<sup></strong></h5>'
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

// SUBMIT button
$("#submitButton").click(function () {
	if (!fromLocationValid() || !toLocationValid()){
		// TO-DO: notify user something is wrong with the input
		return;
	}
	freezeControls();		// freeze inputs
	$progressBar.show();	// show a progress bar while processing
	var trafficPromise = $.post("/traffic", currentLocationInfo)	// get traffic multiplier from google
	trafficPromise.then(function(reply){
		console.log(reply.multiplier);
		driveFactors.trafficMultiplier = reply.multiplier;
		var uberPromise = $.post("/uber", currentLocationInfo);	// get price estimates from uber
		uberPromise.then(function (data) {	
			//console.log(data);
			$fromDiv.append(fromStr);				// display 'from' location
			$toDiv.append(toStr);					// display 'to' location
			populateDriveFactors(data);				// add uber data to drve factors
			makeDriveCalculations();				// calculate drive results
			refreshDriveInfo();						// display driving cost on page
			var uberHtml = createUberHtml(data);	// generate html for uber results
			$uberResultSubDiv.append(uberHtml);		// display uber prices
			$inputGrid.fadeOut( "slow", function(){	// fade in result div
				$resultGrid.fadeIn( "slow" );
				var trafficLayer = new google.maps.TrafficLayer();	// add traffic layer on map
				trafficLayer.setMap(map);
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
showDialogButton.addEventListener('click', function() {
	dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
	refreshDriveInfo();
	dialog.close();
});
$('#mileage_slider').on('input',  function() {
   $("#mileage_label").innerHTML = $('#mileage_slider').val();           
});

		// dialog.showModal();	 

function getValueFromMilageString(string){
	return parseFloat(string.split(' ')[0]);
}
	 
$('input[type=radio][name=units]').change(function(){
	changeDfUnits(this.value);
});


// this is a needlessly long function
// all it does is convert the units of the three milage options in the modal dialog
// from kmpl to mpg or vie-versa. the function is a bit complex to avoid static linking the 
// predetermined values for both unit systems. This prefered in order to support two different
// types of  'gallons' (USA/UK). Since the converted values are calculated on the fly, for UK visitors
// the conversion variable is modified and the values change here accordingly.
// Must be a way to refactor this somehow.
function switchModalMilageUnits(newunits){
	var smallMilage = $('#modal-milage-small').text();
	var mediumMilage = $('#modal-milage-medium').text();
	var largeMilage = $('#modal-milage-large').text();
	if (newunits == 'metric'){
		smallMilage = Math.round(getValueFromMilageString(smallMilage) * m2k / g2l).toString() + ' kmpl';
		mediumMilage = Math.round(getValueFromMilageString(mediumMilage) * m2k / g2l).toString()+ ' kmpl';
		largeMilage = Math.round(getValueFromMilageString(largeMilage) * m2k / g2l).toString() + ' kmpl';
		
	} else if (newunits == 'imperial'){
		smallMilage = Math.round(getValueFromMilageString(smallMilage) * g2l / m2k).toString() + ' mpg';
		mediumMilage = Math.round(getValueFromMilageString(mediumMilage) * g2l / m2k).toString() + ' mpg';
		largeMilage = Math.round(getValueFromMilageString(largeMilage) * g2l / m2k).toString() + ' mpg';
	}
	$('#modal-milage-small').text(smallMilage);
	$('#modal-milage-medium').text(mediumMilage);
	$('#modal-milage-large').text(largeMilage);
}


$('input[type=radio][name=fuel]').change(function(){
	driveFactors.fuel = this.value;
	$('#modal-fuel-name').text(this.value);
	//console.log(driveFactors);
	// change milage picker units
});


// google analytics-----------
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-82207430-1', 'auto');
ga('send', 'pageview');

//---------------------------------

