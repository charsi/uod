"use strict";


// google autocomplete objects
var autocompleteFrom;
var autocompleteTo;

// google api key
const key = "AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs";

// set default map coordinates (to London)
// will be overriden by local coordinates if user shares location
var mapLocalViewUrl = "https://www.google.com/maps/embed/v1/view?zoom=12&center=51.5089254,-0.107437&key="+key;

// holder for geolocation coordinates returned by google
var currentLocationInfo = {
	start_latitude : "",
	start_longitude : "",
	end_latitude : "",
	end_longitude : ""
};

// holder for factors involved in drive cost calculation
var driveFactors = {
	duration : 0.00,        // in minutes 
	distance : 0.00,        // in kms
	milage : 14.00,          // in kmpl
	petrol_cost : 64.00,     // per litre, in local currency
	traffic_multiplier : 1.00, // time with traffic/time without traffic
	distUnits : "kms",    // or "miles"
	milageUnits : "kmpl", // or "mpg"
	currency : "INR"	
};

// reset incase the browser caches form entries
resetEverything();

function resetEverything(){
	refreshMap();
	$("#progressBar").hide();
	$("#resultDiv").fadeOut( "slow", function(){
		$("#inputDiv").fadeIn( "slow" );
	});
	$("#locationToInput").val("");
	$("#locationFromInput").val("");
	$("#submitButton").prop('disabled', false);
	$("#locationToInput").prop('disabled', false);
	$("#locationFromInput").prop('disabled', false);
	currentLocationInfo = {
		start_latitude : "",
		start_longitude : "",
		end_latitude : "",
		end_longitude : ""
	};
	driveFactors.duration = 0.00;
	driveFactors.distance = 0.00;
}

// called from api script in the html
function initAutocomplete() {
	// Create the autocomplete object, restricting the search to geographical
	// location types.
	autocompleteFrom = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */document.getElementById('locationFromInput'), { types: ['geocode'] });
	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocompleteFrom.addListener('place_changed', fillFromAddress);

	autocompleteTo = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */document.getElementById('locationToInput'), { types: ['geocode'] });
	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocompleteTo.addListener('place_changed', fillToAddress);
	geolocate();
}

function fillFromAddress() {
	// get the location coordinates (lat, lng) gtom google geolocation api
	var place = autocompleteFrom.getPlace();
	// store in location holder object
	currentLocationInfo.start_latitude = place.geometry.location.lat();
	currentLocationInfo.start_longitude = place.geometry.location.lng();
	refreshMap();
	console.log(currentLocationInfo);
}

function fillToAddress() {
	// get the location coordinates (lat, lng) gtom google geolocation api
	var place = autocompleteTo.getPlace();
	// store in location holder object
	currentLocationInfo.end_latitude = place.geometry.location.lat();
	currentLocationInfo.end_longitude = place.geometry.location.lng();
	refreshMap();
	console.log(currentLocationInfo);
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

// show only to/from location or a route between them 
// if both locations have been entered
function refreshMap() {
	var mapSrcUrl;
	var fromStr = $("#locationFromInput").val();
	var toStr = $("#locationToInput").val();
	//if both locations are valid, create a route
	if (fromLocationValid() && toLocationValid()){
		//regex to break google map url into components
		//var regex = new RegExp("(origin=)([^&]*)(&destination=)([^&]*)");
		//replace the location info in the map url
		//mapSrcUrl = mapSrcUrl.replace(regex, "$1" + fromStr + "$3" + toStr);
		mapSrcUrl = "https://www.google.com/maps/embed/v1/directions?mode=driving&origin="+fromStr+"&destination="+toStr+"n&key="+key;
	}
	else if (fromLocationValid()) {
		mapSrcUrl = "https://www.google.com/maps/embed/v1/place?key="+key+"&q="+fromStr;
	}
	else if (toLocationValid()) {
		mapSrcUrl = "https://www.google.com/maps/embed/v1/place?key="+key+"&q="+toStr;
	}
	else {
		mapSrcUrl= mapLocalViewUrl;
	}
	// apply updated map url
	$("#routeMap").attr('src', mapSrcUrl);
	console.log(mapSrcUrl);
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
			mapLocalViewUrl = "https://www.google.com/maps/embed/v1/view?zoom=10s&center="+geolocation.lat+","+geolocation.lng+"&key="+key;
			refreshMap();
		});
	}
}


// freeze input fields and the submit button
// while processing
function freezeControls(){
	$("#submitButton").prop('disabled', true);
	$("#locationToInput").prop('disabled', true);
	$("#locationFromInput").prop('disabled', true);	
}

$("#submitButton").click(function () {
	if (!fromLocationValid() || !toLocationValid()){
		// TO-DO: notify user something is wrong with the input
		return;
	}
	freezeControls();
	// show a progress bar
	$("#progressBar").show();
	// send the entered location info to backend for processing 
	$.post("/result", currentLocationInfo, function (data) {
		console.log(data);
		var $resultSubDiv = $('div.resultSubDiv');
		// remove old result data
		$resultSubDiv.empty();
		// enable div. Required after using empty()
		$resultSubDiv.prop('disabled', false);
		$.each(data.prices, function (key, value) {
			$resultSubDiv.append("<p>" + value.display_name + ": " + value.estimate + "</p>");			
		});
		//fade in result div
		$("#inputDiv").fadeOut( "slow", function(){
			$("#resultDiv").fadeIn( "slow" );
		});
		// start calculations for drive cost
		driveFactors.duration= data.prices[0].duration/60; // convert to kms
		driveFactors.distance= data.prices[0].distance*1.60934; // convert to kms
		var petrolUsed = driveFactors.distance/driveFactors.milage;
		var driveCost = petrolUsed*driveFactors.petrol_cost;
		$resultSubDiv.append("<p>Distance: " + (driveFactors.distance).toFixed(2) + " kms</p>");
		$resultSubDiv.append("<p>Duration: " + driveFactors.duration + " mins</p>");
		$resultSubDiv.append("<p><strong>Cost of driving: ₹" + driveCost.toFixed(2) + "</strong></p>");
	});
});

$("#backButton").click(function () {
	resetEverything();
});