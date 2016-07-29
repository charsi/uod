$("#progressBar").hide();
$("#resultDiv").hide();
$("#locationToInput").val("");
$("#locationFromInput").val("");		
class locationInfo {
	constructor(start_latitude, start_longitude, end_latitude, end_longitude){
		this.start_latitude = start_latitude;
		this.start_longitude = start_longitude;
		this.end_latitude = end_latitude;
		this.end_longitude= end_longitude;
	}
};
var currentLocationInfo = new locationInfo();
var autocompleteFrom;
var autocompleteTo;


function initAutocomplete(){
	// Create the autocomplete object, restricting the search to geographical
	// location types.
	autocompleteFrom = new google.maps.places.Autocomplete(
		/** @type {!HTMLInputElement} */(document.getElementById('locationFromInput')),
		{types: ['geocode']});
	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocompleteFrom.addListener('place_changed', fillFromAddress);
	
	autocompleteTo = new google.maps.places.Autocomplete(
		/** @type {!HTMLInputElement} */(document.getElementById('locationToInput')),
		{types: ['geocode']});
	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocompleteTo.addListener('place_changed', fillToAddress);
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

function refreshMap(){
	var fromStr = $("#locationFromInput").val();
	var toStr = $("#locationToInput").val();
	var mapSrcStr = $("#routeMap").attr('src');
	//regex to break google map url into components
	var regex = new RegExp("(origin=)([^&]*)(&destination=)([^&]*)")
	//leave component 1, 3 as is. Replace the rest with location info.
	mapSrcStr = mapSrcStr.replace(regex,"$1"+fromStr+"$3"+toStr);
	console.log(mapSrcStr);
	$("#routeMap").attr('src',mapSrcStr);
}


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		var geolocation = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		var circle = new google.maps.Circle({
			center: geolocation,
			radius: position.coords.accuracy
		});
		autocomplete.setBounds(circle.getBounds());
		});
	}
}

$("#submitButton").click(function(){
	$("#submitButton").prop('disabled', true);
	$("#locationToInput").prop('disabled', true);
	$("#locationFromInput").prop('disabled', true);
	$("#progressBar").show();
	$.post("/result", currentLocationInfo, function(data) {
		console.log(data);
		$ee = $('div.result');
		$ee.prop('disabled', false);
		$.each(data.prices, function(key, value){
			$ee.append("<p>"+value.display_name+": "+value.estimate+"</p>");
			$("#progressBar").hide();
			$("#inputDiv").hide();
			$("#resultDiv").show();
			$("#submitButton").prop('disabled', false);
			$("#locationToInput").prop('disabled', false);
			$("#locationFromInput").prop('disabled', false);
		});
	});
});

$("#backButton").click(function(){
	$('div.result').empty();
	$("#resultDiv").hide();
	$("#inputDiv").show();
});