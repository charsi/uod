"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function clearDriveFactors(){di.duration=0,di.distance=0,di.trafficMultiplier=1}function resetMap(){markersArray=[],map=new google.maps.Map(document.getElementById("map"),{center:localLatLang,scrollwheel:!0,zoom:10,mapTypeControl:!1,streetViewControl:!1}),directionsService=new google.maps.DirectionsService,directionsDisplay=new google.maps.DirectionsRenderer}function resetEverything(){$("#progressBar").hide(),$("#locationToInput").val(""),$("#locationFromInput").val(""),$("#submitButton").prop("disabled",!1),$("#locationToInput").prop("disabled",!1),$("#locationFromInput").prop("disabled",!1),currentLocationInfo=new LocationInfo,clearDriveFactors(),resetMap(),refreshMap(),$resultGrid.fadeOut("slow",function(){$inputGrid.fadeIn("slow"),[$uberResultSubDiv,$driveResultSubDiv,$resultDiv,$fromDiv,$toDiv,$fuelSpan].forEach(clearDiv)})}function fillFromAddress(){var e=autocompleteFrom.getPlace();currentLocationInfo.start_latitude=e.geometry.location.lat(),currentLocationInfo.start_longitude=e.geometry.location.lng(),refreshMap()}function fillToAddress(){var e=autocompleteTo.getPlace();currentLocationInfo.end_latitude=e.geometry.location.lat(),currentLocationInfo.end_longitude=e.geometry.location.lng(),refreshMap()}function fromLocationValid(){return""!==currentLocationInfo.start_latitude&&""!==currentLocationInfo.start_longitude&&""!==$("#locationFromInput").val()}function toLocationValid(){return""!==currentLocationInfo.end_latitude&&""!==currentLocationInfo.end_longitude&&""!==$("#locationToInput").val()}function clearMarkers(){for(var e=0;e<markersArray.length;e++)markersArray[e].setMap(null);markersArray.length=0}function refreshMap(){var e=localLatLang;if(map.setZoom(10),fromStr=$("#locationFromInput").val(),toStr=$("#locationToInput").val(),fromLocationValid()&&toLocationValid())clearMarkers(),directionsDisplay.setMap(map),directionsService.route({origin:fromStr,destination:toStr,travelMode:"DRIVING"},function(e,t){"OK"===t?directionsDisplay.setDirections(e):console.log("Directions request failed due to "+t)});else if(fromLocationValid()){e={lat:currentLocationInfo.start_latitude,lng:currentLocationInfo.start_longitude};var t=new google.maps.Marker({position:e,map:map,title:fromStr});markersArray.push(t),map.setZoom(13)}else if(toLocationValid()){e={lat:currentLocationInfo.end_latitude,lng:currentLocationInfo.end_longitude};var o=new google.maps.Marker({position:e,map:map,title:toStr});markersArray.push(o),map.setZoom(13)}map.panTo(e)}function geolocate(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude},o=new google.maps.Circle({center:t,radius:e.coords.accuracy});console.log(o),autocompleteFrom.setBounds(o.getBounds()),autocompleteTo.setBounds(o.getBounds()),localLatLang.lat=t.lat,localLatLang.lng=t.lng,refreshMap()})}function geolocateIp(){var e=new google.maps.Circle({center:localLatLang,radius:33});autocompleteFrom.setBounds(e.getBounds()),autocompleteTo.setBounds(e.getBounds()),refreshMap()}function freezeControls(){$("#submitButton").prop("disabled",!0),$("#locationToInput").prop("disabled",!0),$("#locationFromInput").prop("disabled",!0)}function clearDiv(e){e.empty()}function changeDisplayUnits(){units=$modal_units_radio.filter(":checked").val();var e=unitStrings;"metric"===units?(e.fuelUnits="L",e.milageUnits="kmpl",e.distUnits="km",e.fuelCostUnits="per litre"):"imperial"===units&&(e.fuelUnits="GL",e.milageUnits="mpg",e.distUnits="miles",e.fuelCostUnits="per gallon"),refreshMilageTextInModal(),$modal_fuel_cost.text(di.display().fuelCost)}function refreshDriveInfo(){var e=di.display(),t="";t+='<h5 style="text-align : center;"><br><strong>'+e.driveCost+"<sup>*<sup></strong></h5>",$driveResultSubDiv.html(t),$fuelSpan.html(e.fuelUsed+"<br>@ "+e.fuelCost),$resultDiv.html("<p>Distance: "+e.distance+'</p><p><i class="material-icons" id="time-icon">access_time</i> '+di.duration+" mins</p>")}function createUberHtml(e){var t=e.prices[0].estimate.split(".")[0],o="";o+='<h5 style="text-align : center;"><br><strong>'+t+"<sup>*<sup></strong></h5>",o+='<p style="text-align : center;">via '+e.prices[0].display_name+"</p>",o+="<hr><small>Other options</small><br>",o+='<table class="mdl-data-table mdl-js-data-table" style="width:20%;">';var i=e.prices[0].display_name;return $.each(e.prices,function(e,t){t.display_name!=i&&"Metered"!=t.estimate&&(i=t.display_name,o+="<tr><td>"+i+"</td><td>"+t.estimate+"</td></tr>")}),o+="</table>"}function convertedMilage(e){var t="metric"==units?1:g2l/m2k;return Math.round(milageRange[di.fuel][e]*t)+" "+unitStrings.milageUnits}function refreshMilageTextInModal(){$smallMilage.text(convertedMilage("small")),$mediumMilage.text(convertedMilage("medium")),$largeMilage.text(convertedMilage("large"))}function initAutocomplete(){autocompleteFrom=new google.maps.places.Autocomplete(document.getElementById("locationFromInput"),{types:["geocode"]}),autocompleteFrom.addListener("place_changed",fillFromAddress),autocompleteTo=new google.maps.places.Autocomplete(document.getElementById("locationToInput"),{types:["geocode"]}),autocompleteTo.addListener("place_changed",fillToAddress),resetEverything()}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),autocompleteFrom,autocompleteTo,map,markersArray=[],directionsService,directionsDisplay,fromStr,toStr,$uberResultSubDiv=$("#uberResultSubDiv"),$driveResultSubDiv=$("#driveResultSubDiv"),$resultDiv=$("#resultDiv"),$fromDiv=$("#fromDiv"),$toDiv=$("#toDiv"),$inputGrid=$("#inputDiv"),$resultGrid=$("#resultGrid"),$progressBar=$("#progressBar"),$fuelSpan=$("#fuel"),$modal_units_radio=$("input[type=radio][name=units]"),$modal_fuel_cost=$("#modal-fuel-cost"),$modal_fuel_type_radio=$("input[type=radio][name=fuel]"),$modal_fuel_name_span=$("#modal-fuel-name"),$modal_car_size_radio=$(".carsizeradio"),$smallMilage=$("#modal-milage-small"),$mediumMilage=$("#modal-milage-medium"),$largeMilage=$("#modal-milage-large"),$modal_fuel_cost_slider=$("#fuel_cost_slider"),currentLocationInfo,g2l=3.785,m2k=1.609,country="IN",currency="",units="metric",unitStrings={distUnits:"kms",milageUnits:"kmpl",fuelUnits:"L",fuelCostUnits:"per litre"},milageRange={petrol:{small:15,medium:12,large:8},diesel:{small:20,medium:15,large:10}},currency_symbols={USD:"$",EUR:"€",CRC:"₡",GBP:"£",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",NGN:"₦",PHP:"₱",PLN:"zł",PYG:"₲",THB:"฿",UAH:"₴",VND:"₫"},key="AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs",localLatLang={lat:51.5089254,lng:-.107437},LocationInfo=function e(){_classCallCheck(this,e),this.start_latitude="",this.start_longitude="",this.end_latitude="",this.end_longitude=""},DriveInfo=function(){function e(t){var o=t.duration,i=void 0===o?0:o,l=t.distance,a=void 0===l?0:l,n=t.petrolMilage,r=void 0===n?14:n,s=t.dieselMilage,c=void 0===s?14:s,u=t.petrolCost,d=void 0===u?0:u,m=t.dieselCost,g=void 0===m?0:m,p=t.trafficMultiplier,f=void 0===p?1:p,h=t.fuel,_=void 0===h?"petrol":h;_classCallCheck(this,e),this.duration=i,this.distance=a,this.petrolMilage=r,this.dieselMilage=c,this.petrolCost=d,this.dieselCost=g,this.trafficMultiplier=f,this.fuel=_}return _createClass(e,[{key:"getFuelUsed",value:function(){var e="petrol"===this.fuel?this.petrolMilage:this.dieselMilage,t=this.distance/e*this.trafficMultiplier;return t}},{key:"getDriveCost",value:function(){var e="petrol"===this.fuel?this.petrolCost:this.dieselCost;console.log("fuelcost = "+e);var t=e*this.getFuelUsed();return console.log("cost = "+t),t}},{key:"getFuelCost",value:function(){return this[this.fuel+"Cost"]}},{key:"setFuelCost",value:function(e){this[this.fuel+"Cost"]=e}},{key:"display",value:function(){var e=arguments.length<=0||void 0===arguments[0]?units:arguments[0],t="metric"===e?1:g2l,o="metric"===e?1:1/g2l,i="metric"===e?1:g2l/m2k,l="metric"===e?1:1/m2k,a=(this.getFuelUsed()*o).toFixed(2)+" "+unitStrings.fuelUnits,n=currency+""+Math.ceil(.9*this.getDriveCost())+"-"+Math.ceil(1.1*this.getDriveCost()),r="petrol"===this.fuel?this.petrolMilage:this.dieselMilage;r=(r*i).toFixed(2)+" "+unitStrings.milageUnits;var s=(this.distance*l).toFixed(2)+" "+unitStrings.distUnits,c="petrol"===this.fuel?this.petrolCost:this.dieselCost;c=currency+""+(c*t).toFixed(2)+" "+unitStrings.fuelCostUnits;var u={fuelCost:c,fuelUsed:a,driveCost:n,milage:r,distance:s};return u}}]),e}(),di=new DriveInfo({});!function(e,t,o,i,l,a,n){e.GoogleAnalyticsObject=l,e[l]=e[l]||function(){(e[l].q=e[l].q||[]).push(arguments)},e[l].l=1*new Date,a=t.createElement(o),n=t.getElementsByTagName(o)[0],a.async=1,a.src=i,n.parentNode.insertBefore(a,n)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-82207430-1","auto"),ga("send","pageview"),$(function(){$.get("http://freegeoip.net/json/",function(e){localLatLang={lat:e.latitude,lng:e.longitude},map.panTo(localLatLang),geolocateIp(),"GB"==e.country_code?(g2l=4.5,$("#unit_system").text("Imperial"),$("input[name=units]#units-2").attr("checked",!0),units="imperial",changeDisplayUnits(),refreshDriveInfo()):"US"==e.country_code&&($("input[name=units]#units-2").attr("checked",!0),units="imperial",changeDisplayUnits(),refreshDriveInfo()),country=e.country_code,$.get("/api/fuelprice/",{countrycode:country},function(e){di.petrolCost=e.petrol_price_local,di.dieselCost=e.diesel_price_local,console.log(di.petrolCost),console.log(di.dieselCost),console.log(di.fuel),console.log((.9*di.getFuelCost()).toFixed(2)),console.log((1.1*di.getFuelCost()).toFixed(2)),currency=currency_symbols.hasOwnProperty(e.currency_code)?currency_symbols[e.currency_code]:e.currency_code,$modal_fuel_cost.text(di.display().fuelCost),$modal_fuel_cost_slider.attr("min",.9*di.getFuelCost()),$modal_fuel_cost_slider.attr("max",1.1*di.getFuelCost()),$modal_fuel_cost_slider.val(Math.round(100*di.getFuelCost())/100)})})}),$("#submitButton").click(function(){fromLocationValid()&&toLocationValid()&&(freezeControls(),$progressBar.show(),$.post("/api/traffic",currentLocationInfo).then(function(e){console.log(e.multiplier),di.trafficMultiplier=e.multiplier,$.post("/api/uber",currentLocationInfo).then(function(e){$fromDiv.append(fromStr),$toDiv.append(toStr),di.duration=e.prices[0].duration/60,di.distance=e.prices[0].distance*m2k,refreshDriveInfo();var t=createUberHtml(e);$uberResultSubDiv.append(t),$inputGrid.fadeOut("slow",function(){$resultGrid.fadeIn("slow");var e=new google.maps.TrafficLayer;e.setMap(map)})})}))}),$("#backButton").click(function(){resetEverything()});var dialog=document.querySelector("dialog"),showDialogButton=document.querySelector("#settings_icon");dialog.showModal||dialogPolyfill.registerDialog(dialog),showDialogButton.addEventListener("click",function(){dialog.showModal()}),dialog.querySelector(".close").addEventListener("click",function(){refreshDriveInfo(),dialog.close()}),$modal_fuel_cost_slider[0].addEventListener("input",function(){di.setFuelCost($modal_fuel_cost_slider.val()),$modal_fuel_cost.text(di.display().fuelCost)}),$modal_fuel_cost_slider.change(function(){console.log(this.value)}),$modal_car_size_radio.change(function(){$.each($modal_car_size_radio,function(){this.MaterialIconToggle.uncheck()}),this.MaterialIconToggle.check();var e=$modal_car_size_radio.find("input").filter(":checked").val();console.log(e),di.petrolMilage=milageRange.petrol[e],di.dieselMilage=milageRange.diesel[e]}),$modal_units_radio.parent().change(changeDisplayUnits),$modal_fuel_type_radio.change(function(){di.fuel=this.value,$modal_fuel_name_span.text(this.value),$modal_fuel_cost_slider.attr("min",.9*di.getFuelCost()),$modal_fuel_cost_slider.attr("max",1.1*di.getFuelCost()),$modal_fuel_cost.text(di.display().fuelCost),$modal_fuel_cost_slider[0].MaterialSlider.change(Math.round(100*di.getFuelCost())/100),console.log(di.getFuelCost()),refreshMilageTextInModal()}),function(){$resultGrid.hide(),changeDisplayUnits()}();
//# sourceMappingURL=maps/client.js.map
