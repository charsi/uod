"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function clearDriveFactors(){di.duration=0,di.distance=0,di.trafficMultiplier=1}function restMap(){markersArray=[],map=new google.maps.Map(document.getElementById("map"),{center:localLatLang,scrollwheel:!0,zoom:10,mapTypeControl:!1,streetViewControl:!1}),directionsService=new google.maps.DirectionsService,directionsDisplay=new google.maps.DirectionsRenderer}function resetEverything(){$("#progressBar").hide(),$("#locationToInput").val(""),$("#locationFromInput").val(""),$("#submitButton").prop("disabled",!1),$("#locationToInput").prop("disabled",!1),$("#locationFromInput").prop("disabled",!1),currentLocationInfo=new LocationInfo,clearDriveFactors(),restMap(),refreshMap(),$resultGrid.fadeOut("slow",function(){$inputGrid.fadeIn("slow"),[$uberResultSubDiv,$driveResultSubDiv,$resultDiv,$fromDiv,$toDiv,$fuelSpan].forEach(clearDiv)}),"imperial"==$modal_units_radio_checked.val()&&(units="imperial",changeDisplayUnits())}function fillFromAddress(){var e=autocompleteFrom.getPlace();currentLocationInfo.start_latitude=e.geometry.location.lat(),currentLocationInfo.start_longitude=e.geometry.location.lng(),refreshMap()}function fillToAddress(){var e=autocompleteTo.getPlace();currentLocationInfo.end_latitude=e.geometry.location.lat(),currentLocationInfo.end_longitude=e.geometry.location.lng(),refreshMap()}function fromLocationValid(){return""!==currentLocationInfo.start_latitude&&""!==currentLocationInfo.start_longitude&&""!==$("#locationFromInput").val()}function toLocationValid(){return""!==currentLocationInfo.end_latitude&&""!==currentLocationInfo.end_longitude&&""!==$("#locationToInput").val()}function clearMarkers(){for(var e=0;e<markersArray.length;e++)markersArray[e].setMap(null);markersArray.length=0}function refreshMap(){var e=localLatLang;if(map.setZoom(10),fromStr=$("#locationFromInput").val(),toStr=$("#locationToInput").val(),fromLocationValid()&&toLocationValid())clearMarkers(),directionsDisplay.setMap(map),directionsService.route({origin:fromStr,destination:toStr,travelMode:"DRIVING"},function(e,t){"OK"===t?directionsDisplay.setDirections(e):console.log("Directions request failed due to "+t)});else if(fromLocationValid()){e={lat:currentLocationInfo.start_latitude,lng:currentLocationInfo.start_longitude};var t=new google.maps.Marker({position:e,map:map,title:fromStr});markersArray.push(t),map.setZoom(13)}else if(toLocationValid()){e={lat:currentLocationInfo.end_latitude,lng:currentLocationInfo.end_longitude};var i=new google.maps.Marker({position:e,map:map,title:toStr});markersArray.push(i),map.setZoom(13)}map.panTo(e)}function geolocate(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude},i=new google.maps.Circle({center:t,radius:e.coords.accuracy});autocompleteFrom.setBounds(i.getBounds()),autocompleteTo.setBounds(i.getBounds()),localLatLang.lat=t.lat,localLatLang.lng=t.lng,refreshMap()})}function freezeControls(){$("#submitButton").prop("disabled",!0),$("#locationToInput").prop("disabled",!0),$("#locationFromInput").prop("disabled",!0)}function clearDiv(e){e.empty()}function changeDisplayUnits(){var e=unitStrings;"metric"===units?(e.fuelUnits="L",e.milageUnits="kmpl",e.distUnits="km",e.fuelCostUnits="per litre"):"imperial"===units&&(e.fuelUnits="GL",e.milageUnits="mpg",e.distUnits="miles",e.fuelCostUnits="per gallon"),refreshMilageTextInModal(),$modal_fuel_cost.text(di.display().fuelCost)}function refreshDriveInfo(){var e=di.display(),t="";t+='<h5 style="text-align : center;"><br><strong>'+e.driveCost+"<sup>*<sup></strong></h5>",$driveResultSubDiv.html(t),$fuelSpan.html(e.fuelUsed+"<br>@ "+e.fuelCost),$resultDiv.html("<p>Distance: "+e.distance+'</p><p><i class="material-icons" id="time-icon">access_time</i> '+di.duration+" mins</p>")}function createUberHtml(e){var t=e.prices[0].estimate.split(".")[0],i="";i+='<h5 style="text-align : center;"><br><strong>'+t+"<sup>*<sup></strong></h5>",i+='<p style="text-align : center;">via '+e.prices[0].display_name+"</p>",i+="<hr><small>Other options</small><br>",i+='<table class="mdl-data-table mdl-js-data-table" style="width:20%;">';var o=e.prices[0].display_name;return $.each(e.prices,function(e,t){t.display_name!=o&&"Metered"!=t.estimate&&(o=t.display_name,i+="<tr><td>"+o+"</td><td>"+t.estimate+"</td></tr>")}),i+="</table>"}function convertedMilage(e){var t=1;t="metric"==units?k2m/l2g:l2g/k2m;var i=parseFloat(e.split(" ")[0]);return Math.round(i*t).toString()+" "+unitStrings.milageUnits}function refreshMilageTextInModal(){$smallMilage.text(convertedMilage($smallMilage.text())),$mediumMilage.text(convertedMilage($mediumMilage.text())),$largeMilage.text(convertedMilage($largeMilage.text()))}function initAutocomplete(){autocompleteFrom=new google.maps.places.Autocomplete(document.getElementById("locationFromInput"),{types:["geocode"]}),autocompleteFrom.addListener("place_changed",fillFromAddress),autocompleteTo=new google.maps.places.Autocomplete(document.getElementById("locationToInput"),{types:["geocode"]}),autocompleteTo.addListener("place_changed",fillToAddress),geolocate(),resetEverything()}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),autocompleteFrom,autocompleteTo,map,markersArray=[],directionsService,directionsDisplay,fromStr,toStr,$uberResultSubDiv=$("#uberResultSubDiv"),$driveResultSubDiv=$("#driveResultSubDiv"),$resultDiv=$("#resultDiv"),$fromDiv=$("#fromDiv"),$toDiv=$("#toDiv"),$inputGrid=$("#inputDiv"),$resultGrid=$("#resultGrid"),$progressBar=$("#progressBar"),$fuelSpan=$("#fuel"),$modal_units_radio=$("input[type=radio][name=units]"),$modal_units_radio_checked=$("input[type=radio][name=units]:checked"),$modal_fuel_cost=$("#modal-fuel-cost"),$smallMilage=$("#modal-milage-small"),$mediumMilage=$("#modal-milage-medium"),$largeMilage=$("#modal-milage-large"),$fuel_cost_slider=$("#fuel_cost_slider"),dom_fuel_cost_slider=document.querySelector("#fuel_cost_slider"),currentLocationInfo,l2g=3.785,k2m=1.609,country="IN",currency="",units="metric",unitStrings={distUnits:"kms",milageUnits:"kmpl",fuelUnits:"L",fuelCostUnits:"per litre"},petrolMilageRange={small:15,medium:12,large:8},dieselMilageRange={small:35,medium:27,large:20},currency_symbols={USD:"$",EUR:"€",CRC:"₡",GBP:"£",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",NGN:"₦",PHP:"₱",PLN:"zł",PYG:"₲",THB:"฿",UAH:"₴",VND:"₫"},localLatLang={lat:51.5089254,lng:-.107437},LocationInfo=function e(){_classCallCheck(this,e),this.start_latitude="",this.start_longitude="",this.end_latitude="",this.end_longitude=""},DriveInfo=function(){function e(t){var i=t.duration,o=void 0===i?0:i,l=t.distance,r=void 0===l?0:l,a=t.petrolMilage,n=void 0===a?14:a,s=t.dieselMilage,c=void 0===s?14:s,u=t.petrolCost,d=void 0===u?0:u,p=t.dieselCost,g=void 0===p?0:p,m=t.trafficMultiplier,f=void 0===m?1:m,h=t.fuel,v=void 0===h?"petrol":h;_classCallCheck(this,e),this.duration=o,this.distance=r,this.petrolMilage=n,this.dieselMilage=c,this.petrolCost=d,this.dieselCost=g,this.trafficMultiplier=f,this.fuel=v}return _createClass(e,[{key:"driveCalculations",value:function(){var e="petrol"===di.fuel?di.petrolCost:di.dieselCost,t="petrol"===di.fuel?di.petrolMilage:di.dieselMilage;di.fuelUsed=di.distance/t*di.trafficMultiplier;var i=di.fuelUsed*e;i=currency+Math.ceil(.9*i)+"-"+Math.ceil(1.1*i),di.driveCost=i}},{key:"getFuelUsed",value:function(){var e="petrol"===this.fuel?this.petrolMilage:this.dieselMilage;return this.distance/e*this.trafficMultiplier}},{key:"getDriveCost",value:function(){var e="petrol"===this.fuel?this.petrolCost:this.dieselCost;return e*this.getFuelUsed()}},{key:"display",value:function(){var e=arguments.length<=0||void 0===arguments[0]?units:arguments[0],t="metric"===e?1:l2g,i="metric"===e?1:l2g/k2m,o="metric"===e?1:k2m,l=(this.getFuelUsed()*t).toFixed(2)+" "+unitStrings.fuelUnits,r=currency+""+Math.ceil(.9*this.getDriveCost())+"-"+Math.ceil(1.1*this.getDriveCost()),a="petrol"===this.fuel?this.petrolMilage:this.dieselMilage;a=(a*i).toFixed(2)+" "+unitStrings.milageUnits;var n=(this.distance*o).toFixed(2)+" "+unitStrings.distUnits,s="petrol"===this.fuel?this.petrolCost:this.dieselCost;s=currency+""+(s*t).toFixed(2)+" "+unitStrings.fuelCostUnits;var c={fuelCost:s,fuelUsed:l,driveCost:r,milage:a,distance:n};return c}}]),e}(),di=new DriveInfo({});!function(e,t,i,o,l,r,a){e.GoogleAnalyticsObject=l,e[l]=e[l]||function(){(e[l].q=e[l].q||[]).push(arguments)},e[l].l=1*new Date,r=t.createElement(i),a=t.getElementsByTagName(i)[0],r.async=1,r.src=o,a.parentNode.insertBefore(r,a)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-82207430-1","auto"),ga("send","pageview"),$resultGrid.hide(),$.get("http://freegeoip.net/json/",function(e){localLatLang={lat:e.latitude,lng:e.longitude},map.panTo(localLatLang),"GB"==e.country_code?(l2g=4.5,$("#unit_system").text("Imperial"),$("input[name=units]#units-2").attr("checked",!0),units="imperial",changeDisplayUnits(),refreshDriveInfo()):"US"==e.country_code&&($("input[name=units]#units-2").attr("checked",!0),units="imperial",changeDisplayUnits(),refreshDriveInfo()),country=e.country_code,$.get("/api/fuelprice/",{countrycode:country}).then(function(e){di.petrolCost=e.petrol_price_local,di.dieselCost=e.diesel_price_local,currency=currency_symbols.hasOwnProperty(e.currency_code)?currency_symbols[e.currency_code]:e.currency_code,$modal_fuel_cost.text(di.display().fuelCost),$fuel_cost_slider.attr("min",.9*di[di.fuel+"Cost"]),$fuel_cost_slider.attr("max",1.1*di[di.fuel+"Cost"]),$fuel_cost_slider.val(di[di.fuel+"Cost"])})}),$("#submitButton").click(function(){fromLocationValid()&&toLocationValid()&&(freezeControls(),$progressBar.show(),$.post("/api/traffic",currentLocationInfo).then(function(e){console.log(e.multiplier),di.trafficMultiplier=e.multiplier,$.post("/api/uber",currentLocationInfo).then(function(e){$fromDiv.append(fromStr),$toDiv.append(toStr),di.duration=e.prices[0].duration/60,di.distance=e.prices[0].distance,refreshDriveInfo();var t=createUberHtml(e);$uberResultSubDiv.append(t),$inputGrid.fadeOut("slow",function(){$resultGrid.fadeIn("slow");var e=new google.maps.TrafficLayer;e.setMap(map)})})}))}),$("#backButton").click(function(){resetEverything()});var dialog=document.querySelector("dialog"),showDialogButton=document.querySelector("#settings_icon"),showDialogButton=document.querySelector("#settings_icon");dialog.showModal||dialogPolyfill.registerDialog(dialog),showDialogButton.addEventListener("click",function(){dialog.showModal()}),dialog.querySelector(".close").addEventListener("click",function(){refreshDriveInfo(),dialog.close()}),$fuel_cost_slider[0].addEventListener("input",function(){di[di.fuel+"Cost"]=$fuel_cost_slider.val(),$modal_fuel_cost.text(di.display().fuelCost)}),$(".carsizeradio").change(function(){$.each($(".carsizeradio"),function(){this.MaterialIconToggle.uncheck()}),this.MaterialIconToggle.check();var e=$(this).find("input").attr("id").replace("car-toggle-","");di.petrolMilage=petrolMilageRange[e],di.dieselMilage=dieselMilageRange[e]}),$modal_units_radio.change(function(){console.log(this.value),units=this.value,changeDisplayUnits()}),$("input[type=radio][name=fuel]").change(function(){di.fuel=this.value,$("#modal-fuel-name").text(this.value),$fuel_cost_slider.attr("min",.9*di[di.fuel+"Cost"]),$fuel_cost_slider.attr("max",1.1*di[di.fuel+"Cost"]),document.querySelector("#fuel_cost_slider").MaterialSlider.change(di[di.fuel+"Cost"]),$modal_fuel_cost.text(di.display().fuelCost)});
//# sourceMappingURL=maps/client.js.map
