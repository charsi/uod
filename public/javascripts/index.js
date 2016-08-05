"use strict";


// google autocomplete objects
var autocompleteFrom;
var autocompleteTo;

var fromStr;
var toStr;
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
	currency : ''	
};

// reset incase the browser caches form entries
resetEverything();

function resetEverything(){
	refreshMap();
	$("#progressBar").hide();
	$resultGrid.fadeOut( "slow", function(){
		$inputGrid.fadeIn( "slow" );
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
	driveFactors.currency = '';
	clearDiv($uberResultSubDiv);
	clearDiv($driveResultSubDiv);
	clearDiv($resultDiv);
	clearDiv($fromDiv);
	clearDiv($toDiv);
	clearDiv($resultDiv);
	clearDiv($fuelSpan);
	});
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
	fromStr = $("#locationFromInput").val();
	toStr = $("#locationToInput").val();
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

function clearDiv(div){
	div.empty();
	div.prop('disabled', false);
}

$("#submitButton").click(function () {
	if (!fromLocationValid() || !toLocationValid()){
		// TO-DO: notify user something is wrong with the input
		return;
	}
	freezeControls();
	// show a progress bar
	$progressBar.show();
	// send the entered location info to backend for processing 
	$.post("/result", currentLocationInfo, function (data) {
		console.log(data);
		driveFactors.duration= data.prices[0].duration/60; // convert to kms
		driveFactors.distance= data.prices[0].distance*1.60934; // convert to kms
		// get currency symbol
		driveFactors.currency = data.prices[0].estimate.match(/^\D*/);
		var petrolUsed = driveFactors.distance/driveFactors.milage;
		var driveCost = petrolUsed*driveFactors.petrol_cost;
		$fromDiv.append(fromStr);
		$toDiv.append(toStr);
		$resultDiv.append('<p>Distance: '+(driveFactors.distance).toFixed(2)+' kms</p>'+
			'<p><i class="material-icons" id="time-icon">access_time</i> ' + driveFactors.duration+' mins</p>');
		var serviceName = data.prices[0].display_name;
		var html = '';
		html+= '<h5 style="text-align : center;"><br><strong>' + data.prices[0].estimate+'</strong></h5>'
		html+= '<p style="text-align : center;">via '+data.prices[0].display_name+'</p>';
		html+= '<hr><small>Other options--</small><br>';
		html+= '<table class="mdl-data-table mdl-js-data-table">';
		$.each(data.prices, function (key, value) {
			// check if result for same service has already been displayed.
			// takes care of uber pool being returned twice in india.
			if (value.display_name != serviceName && value.display_name !='UberTAXI') {
				serviceName = value.display_name;
				html+='<tr><td>'+value.display_name + '</td><td>' + value.estimate + '</td></tr>';
			}			
		});
		html+='</table>';
		$uberResultSubDiv.append(html);
		//fade in result div
		$inputGrid.fadeOut( "slow", function(){
			$resultGrid.fadeIn( "slow" );
		});
		html = '';
		html += '<h5 style="text-align : center;"><br><strong>'+driveFactors.currency+driveCost.toFixed(0)+'</strong></h5>';
		$driveResultSubDiv.append(html);
		$fuelSpan.append(petrolUsed.toFixed(2) + 'L (petrol)<br>@ '+driveFactors.currency+'64 per Litre');
	});
});

$("#backButton").click(function () {
	resetEverything();
});