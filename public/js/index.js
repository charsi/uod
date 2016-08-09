"use strict";function clearLocationInfo(){currentLocationInfo={start_latitude:"",start_longitude:"",end_latitude:"",end_longitude:""}}function clearDriveFactors(){driveFactors={duration:0,distance:0,milage:14,fuelCost:64,traffic_multiplier:1,currency:"",petrolUsed:0,driveCost:"",units:"metric",fuel:"petrol",unitStrings:{distUnits:"kms",milageUnits:"kmpl",fuelUnits:"L",fuelCostUnits:"per litre"}}}function restMap(){markersArray=[],map=new google.maps.Map(document.getElementById("map"),{center:localLatLang,scrollwheel:!0,zoom:10,mapTypeControl:!1,streetViewControl:!1}),directionsService=new google.maps.DirectionsService,directionsDisplay=new google.maps.DirectionsRenderer}function resetEverything(){$("#progressBar").hide(),$("#locationToInput").val(""),$("#locationFromInput").val(""),$("#submitButton").prop("disabled",!1),$("#locationToInput").prop("disabled",!1),$("#locationFromInput").prop("disabled",!1),clearLocationInfo(),clearDriveFactors(),restMap(),refreshMap(),$resultGrid.fadeOut("slow",function(){$inputGrid.fadeIn("slow"),[$uberResultSubDiv,$driveResultSubDiv,$resultDiv,$fromDiv,$toDiv,$fuelSpan].forEach(clearDiv)})}function initAutocomplete(){autocompleteFrom=new google.maps.places.Autocomplete(document.getElementById("locationFromInput"),{types:["geocode"]}),autocompleteFrom.addListener("place_changed",fillFromAddress),autocompleteTo=new google.maps.places.Autocomplete(document.getElementById("locationToInput"),{types:["geocode"]}),autocompleteTo.addListener("place_changed",fillToAddress),geolocate(),resetEverything()}function fillFromAddress(){var t=autocompleteFrom.getPlace();currentLocationInfo.start_latitude=t.geometry.location.lat(),currentLocationInfo.start_longitude=t.geometry.location.lng(),refreshMap()}function fillToAddress(){var t=autocompleteTo.getPlace();currentLocationInfo.end_latitude=t.geometry.location.lat(),currentLocationInfo.end_longitude=t.geometry.location.lng(),refreshMap()}function fromLocationValid(){return""!=currentLocationInfo.start_latitude&&""!=currentLocationInfo.start_longitude&&""!=$("#locationFromInput").val()}function toLocationValid(){return""!=currentLocationInfo.end_latitude&&""!=currentLocationInfo.end_longitude&&""!=$("#locationToInput").val()}function clearOverlays(){for(var t=0;t<markersArray.length;t++)markersArray[t].setMap(null);markersArray.length=0}function refreshMap(){var t=localLatLang;map.setZoom(10);if(fromStr=$("#locationFromInput").val(),toStr=$("#locationToInput").val(),fromLocationValid()&&toLocationValid())clearOverlays(),directionsDisplay.setMap(map),directionsService.route({origin:fromStr,destination:toStr,travelMode:"DRIVING"},function(t,e){"OK"===e?directionsDisplay.setDirections(t):console.log("Directions request failed due to "+e)});else if(fromLocationValid()){t={lat:currentLocationInfo.start_latitude,lng:currentLocationInfo.start_longitude};var e=new google.maps.Marker({position:t,map:map,title:fromStr});markersArray.push(e),map.setZoom(13)}else if(toLocationValid()){t={lat:currentLocationInfo.end_latitude,lng:currentLocationInfo.end_longitude};var e=new google.maps.Marker({position:t,map:map,title:toStr});markersArray.push(e),map.setZoom(13)}map.panTo(t)}function geolocate(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var e={lat:t.coords.latitude,lng:t.coords.longitude},o=new google.maps.Circle({center:e,radius:t.coords.accuracy});autocompleteFrom.setBounds(o.getBounds()),autocompleteTo.setBounds(o.getBounds()),localLatLang.lat=e.lat,localLatLang.lng=e.lng,refreshMap()})}function freezeControls(){$("#submitButton").prop("disabled",!0),$("#locationToInput").prop("disabled",!0),$("#locationFromInput").prop("disabled",!0)}function clearDiv(t){t.empty()}function populateDriveFactors(t){driveFactors.duration=t.prices[0].duration/60,driveFactors.distance=t.prices[0].distance*m2k,driveFactors.currency=t.prices[0].estimate.match(/^\D*/)[0]}function makeDriveCalculations(){var t=driveFactors;t.petrolUsed=t.distance/t.milage*t.traffic_multiplier;var e=t.petrolUsed*t.fuelCost;e=t.currency+(.9*e).toFixed(0)+"-"+(1.1*e).toFixed(0),t.driveCost=e}function changeDfUnitStrings(){var t=driveFactors,e=driveFactors.unitStrings;"metric"==t.units?(e.fuelUnits="L",e.milageUnits="kmpl",e.distUnits="km",e.fuelCostUnits="per litre",t.milage=t.milage*m2k/g2l,t.distance=t.distance*m2k,t.fuelCost=t.fuelCost/g2l):"imperial"==t.units&&(e.fuelUnits="GL",e.milageUnits="mpg",e.distUnits="miles",e.fuelCostUnits="per gallon",t.milage=t.milage*g2l/m2k,t.distance=t.distance/m2k,t.fuelCost=t.fuelCost*g2l),makeDriveCalculations(),console.log(driveFactors)}function refreshDriveInfo(){var t=driveFactors,e=driveFactors.unitStrings,o="";o+='<h5 style="text-align : center;"><br><strong>'+t.driveCost+"<sup>*<sup></strong></h5>",$driveResultSubDiv.html(o),$fuelSpan.html(t.petrolUsed.toFixed(2)+" "+e.fuelUnits+"<br>@ "+t.currency+t.fuelCost.toFixed(2)+" "+e.fuelCostUnits),$resultDiv.html("<p>Distance: "+t.distance.toFixed(2)+" "+e.distUnits+'</p><p><i class="material-icons" id="time-icon">access_time</i> '+t.duration+" mins</p>")}function createUberHtml(t){var e=t.prices[0].estimate.split(".")[0],o="";o+='<h5 style="text-align : center;"><br><strong>'+e+"<sup>*<sup></strong></h5>",o+='<p style="text-align : center;">via '+t.prices[0].display_name+"</p>",o+="<hr><small>Other options</small><br>",o+='<table class="mdl-data-table mdl-js-data-table" style="width:20%;">';var i=t.prices[0].display_name;return $.each(t.prices,function(t,e){e.display_name!=i&&"Metered"!=e.estimate&&(i=e.display_name,o+="<tr><td>"+i+"</td><td>"+e.estimate+"</td></tr>")}),o+="</table>"}function getValueFromMilageString(t){return parseFloat(t.split(" ")[0])}var autocompleteFrom,autocompleteTo,map,markersArray=[],directionsService,directionsDisplay,fromStr,toStr,$uberResultSubDiv=$("#uberResultSubDiv"),$driveResultSubDiv=$("#driveResultSubDiv"),$resultDiv=$("#resultDiv"),$fromDiv=$("#fromDiv"),$toDiv=$("#toDiv"),$inputGrid=$("#inputDiv"),$resultGrid=$("#resultGrid"),$progressBar=$("#progressBar"),$fuelSpan=$("#fuel"),g2l=3.785,m2k=1.609,currency_symbols={USD:"$",EUR:"€",CRC:"₡",GBP:"£",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",NGN:"₦",PHP:"₱",PLN:"zł",PYG:"₲",THB:"฿",UAH:"₴",VND:"₫"};const key="***REMOVED***";var localLatLang={lat:51.5089254,lng:-.107437},currentLocationInfo={start_latitude:"",start_longitude:"",end_latitude:"",end_longitude:""},driveFactors={duration:0,distance:0,milage:14,fuelCost:64,traffic_multiplier:1,currency:"",petrolUsed:0,driveCost:"",units:"metric",fuel:"petrol",unitStrings:{distUnits:"kms",milageUnits:"kmpl",fuelUnits:"L",fuelCostUnits:"per litre"}};$resultGrid.hide(),$.get("http://freegeoip.net/json/",function(t){localLatLang={lat:t.latitude,lng:t.longitude},map.panTo(localLatLang),"UK"==t&&(g2l=4.5,$("#modal_gallon_type").text("UK"))}),$("#submitButton").click(function(){if(fromLocationValid()&&toLocationValid()){freezeControls(),$progressBar.show();var t=$.post("/traffic",currentLocationInfo);t.then(function(t){console.log(t.multiplier),driveFactors.traffic_multiplier=t.multiplier;var e=$.post("/uber",currentLocationInfo);e.then(function(t){console.log(t),$fromDiv.append(fromStr),$toDiv.append(toStr),populateDriveFactors(t),makeDriveCalculations(),refreshDriveInfo();var e=createUberHtml(t);$uberResultSubDiv.append(e),$inputGrid.fadeOut("slow",function(){$resultGrid.fadeIn("slow");var t=new google.maps.TrafficLayer;t.setMap(map)})})})}}),$("#backButton").click(function(){resetEverything()});var dialog=document.querySelector("dialog"),showDialogButton=document.querySelector("#settings_icon"),showDialogButton=document.querySelector("#settings_icon");dialog.showModal||dialogPolyfill.registerDialog(dialog),showDialogButton.addEventListener("click",function(){dialog.showModal()}),dialog.querySelector(".close").addEventListener("click",function(){refreshDriveInfo(),dialog.close()}),$("#mileage_slider").on("input",function(){$("#mileage_label").innerHTML=$("#mileage_slider").val()}),$("input[type=radio][name=units]").change(function(){driveFactors.units=this.value,changeDfUnitStrings();var t=$("#modal-milage-small").text(),e=$("#modal-milage-medium").text(),o=$("#modal-milage-large").text();"metric"==this.value?(console.log(t),console.log(getValueFromMilageString(t)),console.log(getValueFromMilageString(t)*m2k/g2l),console.log(Math.round(getValueFromMilageString(t))),console.log(t),t=Math.round(getValueFromMilageString(t)*m2k/g2l).toString()+" kmpl",e=Math.round(getValueFromMilageString(e)*m2k/g2l).toString()+" kmpl",o=Math.round(getValueFromMilageString(o)*m2k/g2l).toString()+" kmpl"):"imperial"==this.value&&(console.log(t),console.log(getValueFromMilageString(t)),console.log(getValueFromMilageString(t)*g2l/m2k),console.log(Math.round(getValueFromMilageString(t))),console.log(t),t=Math.round(getValueFromMilageString(t)*g2l/m2k).toString()+" mpg",e=Math.round(getValueFromMilageString(e)*g2l/m2k).toString()+" mpg",o=Math.round(getValueFromMilageString(o)*g2l/m2k).toString()+" mpg"),$("#modal-milage-small").text(t),$("#modal-milage-medium").text(e),$("#modal-milage-large").text(o)}),$("input[type=radio][name=fuel]").change(function(){driveFactors.fuel=this.value,$("#modal-fuel-name").text(this.value)}),function(t,e,o,i,r,a,n){t.GoogleAnalyticsObject=r,t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},t[r].l=1*new Date,a=e.createElement(o),n=e.getElementsByTagName(o)[0],a.async=1,a.src=i,n.parentNode.insertBefore(a,n)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-82207430-1","auto"),ga("send","pageview");