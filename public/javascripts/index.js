"use strict";


var autocomplete;
var autocompleteFrom;
var autocompleteTo;
const key = "AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs";
var mapSrcUrl = "https://www.google.com/maps/embed/v1/view?zoom=4&center=51.5089254,-0.107437&key="+key;


var currentLocationInfo = {
	start_latitude : "",
	start_longitude : "",
	end_latitude : "",
	end_longitude : ""
};

resetEverything();
refreshMap();

function resetEverything(){
	$("#progressBar").hide();
	$("#resultDiv").fadeOut( "slow", function(){
		$("#inputDiv").fadeIn( "slow" );
	});
	$("#locationToInput").val("");
	$("#locationFromInput").val("");
	$("#submitButton").prop('disabled', false);
	$("#locationToInput").prop('disabled', false);
	$("#locationFromInput").prop('disabled', false);
	refreshMap();
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
	var place = autocompleteFrom.getPlace(); //getPlace function comes from google
	currentLocationInfo.start_latitude = place.geometry.location.lat();
	currentLocationInfo.start_longitude = place.geometry.location.lng();
	refreshMap();
	console.log(currentLocationInfo);
}

function fillToAddress() {
	var place = autocompleteTo.getPlace();
	currentLocationInfo.end_latitude = place.geometry.location.lat();
	currentLocationInfo.end_longitude = place.geometry.location.lng();
	refreshMap();
	console.log(currentLocationInfo);
}

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


function refreshMap() {
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
		
	}
	//update map url
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
			mapSrcUrl = "https://www.google.com/maps/embed/v1/view?zoom=10s&center="+geolocation.lat+","+geolocation.lng+"&key="+key;
			refreshMap();
		});
	}
}


//freeze the input form and the submit button
function freezeControls(){
	$("#submitButton").prop('disabled', true);
	$("#locationToInput").prop('disabled', true);
	$("#locationFromInput").prop('disabled', true);	
}

$("#submitButton").click(function () {
	freezeControls();
	$("#progressBar").show();
	$.post("/result", currentLocationInfo, function (data) {
		console.log(data);
		var $ee = $('div.result');
		$ee.prop('disabled', false);
		$.each(data.prices, function (key, value) {
			$ee.append("<p>" + value.display_name + ": " + value.estimate + "</p>");
			$("#inputDiv").fadeOut( "slow", function(){
				$("#resultDiv").fadeIn( "slow" );
			});
			$("#progressBar").hide();
			
		});
	});
});

$("#backButton").click(function () {
	resetEverything();
});