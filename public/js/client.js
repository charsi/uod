"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mapSetLocation(e,t){if(t||(t=""),map.setZoom(10),""!==e.lat&&""!==e.lng){var o=new google.maps.Marker({position:e,map:map,title:t});markersArray.push(o),map.setZoom(13),map.panTo(e),localLatLang.lat=e.lat,localLatLang.lng=e.lng}}function refreshMap(){var e=localLatLang;map.setZoom(10),fromStr=$sj_from.val(),toStr=$sj_to.val(),fromLocationValid()&&toLocationValid()?(clearMarkers(),directionsDisplay.setMap(map),directionsService.route({origin:fromStr,destination:toStr,travelMode:"DRIVING"},function(e,t){"OK"===t&&directionsDisplay.setDirections(e)})):fromLocationValid()?(e={lat:currentLocationInfo.start_latitude,lng:currentLocationInfo.start_longitude},mapSetLocation(e,fromStr)):toLocationValid()&&(e={lat:currentLocationInfo.end_latitude,lng:currentLocationInfo.end_longitude},mapSetLocation(e,toStr)),map.panTo(e),localLatLang.lat=e.lat,localLatLang.lng=e.lng;var t=new google.maps.Circle({center:e,radius:33});autocompleteFrom.setBounds(t.getBounds()),autocompleteTo.setBounds(t.getBounds())}function clearDriveFactors(){di.duration=0,di.distance=0,di.trafficMultiplier=1}function resetMap(){markersArray=[],map=new google.maps.Map(document.getElementById("map"),{center:localLatLang,scrollwheel:!0,zoom:10,mapTypeControl:!1,streetViewControl:!1}),directionsService=new google.maps.DirectionsService,directionsDisplay=new google.maps.DirectionsRenderer}function resetEverything(){$("#progressBar").hide(),$("#co_progressBar").hide(),$sj_to.val(""),$sj_from.val(""),unFreezeControls(),currentLocationInfo=new LocationInfo,clearDriveFactors(),resetMap(),refreshMap(),$resultGrid.fadeOut("slow",function(){$inputGrid.fadeIn("slow"),[$uberResultSubDiv,$driveResultSubDiv,$resultDiv,$fromDiv,$toDiv,$fuelSpan].forEach(clearDiv)})}function fillFromAddress(){var e=autocompleteFrom.getPlace();currentLocationInfo.start_latitude=e.geometry.location.lat(),currentLocationInfo.start_longitude=e.geometry.location.lng(),refreshMap();var t=getCountry(e.address_components);country=t,localiseUnits(t);var o=getCity(e.address_components);$("#co_city").val(o),localLatLang.lat=e.geometry.location.lat(),localLatLang.lng=e.geometry.location.lng(),convertCoCarValue(t)}function fillToAddress(){var e=autocompleteTo.getPlace();currentLocationInfo.end_latitude=e.geometry.location.lat(),currentLocationInfo.end_longitude=e.geometry.location.lng(),refreshMap()}function fillCoCity(){var e=autocompleteCoCity.getPlace();localLatLang.lat=e.geometry.location.lat(),localLatLang.lng=e.geometry.location.lng(),mapSetLocation(localLatLang,$("#co_city").val());var t=getCountry(e.address_components);convertCoCarValue(t)}function fromLocationValid(){return!!(currentLocationInfo.start_latitude&&currentLocationInfo.start_longitude&&$sj_from.val())}function toLocationValid(){return!!(currentLocationInfo.end_latitude&&currentLocationInfo.end_longitude&&$("#locationToInput").val())}function co_cityValid(){return!!(localLatLang.lat&&localLatLang.lng&&$("#co_city").val())}function clearMarkers(){for(var e=0;e<markersArray.length;e++)markersArray[e].setMap(null);markersArray.length=0}function geolocate(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude},o=new google.maps.Geocoder;o.geocode({location:t},function(e,o){if("OK"==o&&e[0]){var r=e[0];$sj_from.val(r.formatted_address),currentLocationInfo.start_latitude=t.lat,currentLocationInfo.start_longitude=t.lng,refreshMap();var a=getCountry(r.address_components);country=a,localiseUnits(a);var i=getCity(r.address_components);$("#co_city").val(i),localLatLang.lat=r.geometry.location.lat(),localLatLang.lng=r.geometry.location.lng(),convertCoCarValue(a)}})},function(e){},{enableHighAccuracy:!0,maximumAge:1e4})}function freezeControls(){$("#submitButton").prop("disabled",!0),$sj_to.prop("disabled",!0),$sj_from.prop("disabled",!0)}function unFreezeControls(){$("#submitButton").prop("disabled",!1),$sj_to.prop("disabled",!1),$sj_from.prop("disabled",!1)}function clearDiv(e){e.empty()}function changeDisplayUnits(){var e=$modal_units_radio.filter(":checked").val();units=e,unitStrings="metric"===e?metricUnitStrings:imperialUnitStrings,refreshMileageTextInModal(),$modal_fuel_cost.text(di.display().fuelCost),refreshDriveInfo(),convertCoWeeklyDistValue(),coUpdateResult()}function refreshMileageTextInModal(){for(var e="metric"==units?1:g2l/m2k,t=["small","medium","large"],o=[$smallMileage,$mediumMileage,$largeMileage],r=0;r<t.length;r++){var a=MileageMatrix[di.fuel][t[r]],i=Math.round(a*e);o[r].text(i+" "+unitStrings.MileageUnits)}}function refreshDriveInfo(){var e=di.display(),t="";t+='<h5 style="text-align : center;"><br><strong>'+e.driveCost+"<sup>*<sup></strong></h5>",$driveResultSubDiv.html(t),$fuelSpan.html(e.fuelUsed+"<br>@ "+e.fuelCost),$resultDiv.html("<p>Distance: "+e.distance+'</p><p><i class="material-icons" id="time-icon">access_time</i> '+di.duration+" mins</p>")}function createUberHtml(e){var t=e.prices[0],o=getCurrencySymbol(t.currency_code),r=o+t.low_estimate+"-"+t.high_estimate,a="";a+='<h5 style="text-align : center;"><br><strong>'+r+"<sup>*<sup></strong></h5>",a+='<p style="text-align : center;">via '+e.prices[0].display_name+"</p>",a+="<hr><small>Other options</small><br>",a+='<table class="mdl-data-table mdl-js-data-table mdl-cell--1-col-phone" style="width:10%;padding:0px;">';var i=e.prices[0].display_name;return $.each(e.prices,function(e,t){t.display_name!=i&&"Metered"!=t.estimate&&(i=t.display_name,a+='<tr style=""><td (style="")>'+i+'</td><td (style="width:20%;padding:0px;")>'+t.estimate+"</td></tr>")}),a+="</table>"}function initAutocomplete(){autocompleteFrom=new google.maps.places.Autocomplete(document.getElementById("locationFromInput"),{types:["geocode"]}),autocompleteFrom.addListener("place_changed",fillFromAddress),$sj_from.attr("placeholder",""),autocompleteTo=new google.maps.places.Autocomplete(document.getElementById("locationToInput"),{types:["geocode"]}),autocompleteTo.addListener("place_changed",fillToAddress),autocompleteCoCity=new google.maps.places.Autocomplete(document.getElementById("co_city"),_defineProperty({types:["geocode"]},"types",["(cities)"])),autocompleteCoCity.addListener("place_changed",fillCoCity),localLatLang=local_geoip_latitude&&local_geoip_longitude?{lat:parseFloat(local_geoip_latitude),lng:parseFloat(local_geoip_longitude)}:{lat:51.5089254,lng:-.107437},resetEverything()}function localiseUnits(e){"GB"==e?(g2l=4.546,$("#unit_system").text("Imperial"),units="imperial"):"US"==e?(g2l=3.785,$("#unit_system").text("US"),units="imperial"):units="metric",$('input[name="units"]').filter('[value="'+units+'"]').parent()[0].MaterialRadio.check(),changeDisplayUnits(),$.get("/api/v1/fuelprice/",{countrycode:e},function(t){di.petrolCost=t.petrol_price_local,di.dieselCost=t.diesel_price_local;var o=currrencyByCountry[e];currency=getCurrencySymbol(o),$modal_fuel_cost.text(di.display().fuelCost),$modal_fuel_cost_slider.attr("min",.9*di.getFuelCost()),$modal_fuel_cost_slider.attr("max",1.1*di.getFuelCost()),$modal_fuel_cost_slider.val(Math.round(100*di.getFuelCost())/100)})}function getCountry(e){for(var t=0;t<e.length;t++)if("country"==e[t].types[0])return e[t].short_name;return!1}function getCity(e){for(var t=0;t<e.length;t++)if("locality"==e[t].types[0])return e[t].short_name;return!1}function getCurrencySymbol(e){return currency_symbols.hasOwnProperty(e)?currency_symbols[e]:e+" "}function commaSeparateNumber(e){if("IN"===country){var t=e.toString(),o=t.substring(t.length-3),r=t.substring(0,t.length-3);return""!=r&&(o=","+o),r.replace(/\B(?=(\d{2})+(?!\d))/g,",")+o}for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}function convertCoWeeklyDistValue(){$("#co_input_dis_units_disp_full").html(unitStrings.distunitsFull),$("#co_input_dis_units_disp_abbr").html(unitStrings.distUnits);var e="metric"===units?1:1/m2k,t=Math.round($("#co_weekly_distance").val()*e);$("#co_dist_disp").html(t)}function getDepreciation(e,t,o){var r={new:.85,medium:.9,old:.94},a=e*Math.pow(r[t],o);return e-a}function getInsurance(e,t,o,r){for(var a=0,i=1;i<=r;i++){var n=t-getDepreciation(t,o,i);a+=e*n}return a}function coCalculate(){var e,t=coCalcFactors,o=52*t.weeklyDist*t.calcPeriod,r=o*t.uberCostPerKm,a=getDepreciation(t.carValue,t.carAge,t.calcPeriod),i=di.getFuelCost()/di.getMileage(),n=o*i,l=o/di.getMileage(),c=getInsurance(t.insuranceRate,t.carValue,t.carAge,t.calcPeriod),s=a+n+c,u=(e={totalUberCost:r,totalCarCost:s,carFuelCost:n,carDepreceation:a,totalDistance:o,totalFuelUsed:l},_defineProperty(e,"carFuelCost",n),_defineProperty(e,"carInsurance",c),_defineProperty(e,"uberCostPerKm",t.uberCostPerKm),e);return u}function coUpdateResult(){var e=coCalculate();$("#co_uberResultSubDiv").html("<h5>"+roundCommaCurrency(e.totalUberCost)+"</h5>"),$("#co_carResultSubDiv").html("<h5>"+roundCommaCurrency(e.totalCarCost)+"</h5>"),$("#co_result_city_disp").html($("#co_city").val());var t="metric"===units?1:1/m2k,o=commaSeparateNumber(Math.round(e.totalDistance*t));$("#co_result_distance_disp").html(o+" "+unitStrings.distUnits),$("#co_fuel").html(roundCommaCurrency(e.carFuelCost)),$("#co_depreciation").html(roundCommaCurrency(e.carDepreceation)),$("#co_insurance").html(roundCommaCurrency(e.carInsurance));var r=e.uberCostPerKm*t;$("#co_uber_rate").html(getCurrencySymbol(currency)+r.toFixed(2)+" per "+unitStrings.distUnits)}function roundCommaCurrency(e){var t=getCurrencySymbol(currency);return t+commaSeparateNumber(Math.round(e))}function convertCoCarValue(e){var t=currrencyByCountry[e];currency=t,$("#co_car_value").prop("disabled",!0),$.get("//api.fixer.io/latest?base=USD",function(e){if(e.rates.hasOwnProperty(t)){coCurrencyMultiplier=e.rates[t];var o=Math.round($("#co_car_value").val()*coCurrencyMultiplier),r=getCurrencySymbol(t);$("#co_car_value_currency_disp").html(r),$("#co_car_value_disp").html(commaSeparateNumber(o))}else{var a=Math.round($("#co_car_value").val());$("#co_car_value_disp").html(commaSeparateNumber(a)),$("#co_car_value_currency_disp").html("USD $")}$("#co_car_value").prop("disabled",!1)})}function makeStrong(e){var t="<strong>";return t+e+t}function coResetEverything(){$coInputGrid.show(),$coResultGrid.hide(),$("#co_progressBar").hide()}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),autocompleteFrom,autocompleteTo,autocompleteCoCity,map,markersArray=[],directionsService,directionsDisplay,fromStr,toStr,coCalcFactors={uberDistUnit:"km",uberCostPerKm:1,weeklyDist:1,carValue:1,carAge:1,calcPeriod:1,insuranceRate:.1},$uberResultSubDiv=$("#uberResultSubDiv"),$driveResultSubDiv=$("#driveResultSubDiv"),$resultDiv=$("#resultDiv"),$fromDiv=$("#fromDiv"),$toDiv=$("#toDiv"),$inputGrid=$("#inputDiv"),$resultGrid=$("#resultGrid"),$progressBar=$("#progressBar"),$fuelSpan=$("#fuel"),$modal_units_radio=$("input[type=radio][name=units]"),$modal_fuel_cost=$("#modal-fuel-cost"),$modal_fuel_type_radio=$("input[type=radio][name=fuel]"),$modal_fuel_name_span=$("#modal-fuel-name"),$modal_car_size_radio=$(".carsizeradio"),$smallMileage=$("#modal-mileage-small"),$mediumMileage=$("#modal-mileage-medium"),$largeMileage=$("#modal-mileage-large"),$modal_fuel_cost_slider=$("#fuel_cost_slider"),$sj_from=$("#locationFromInput"),$sj_to=$("#locationToInput"),$coResultGrid=$("#co_resultGrid"),$coInputGrid=$("#co_inputDiv"),coCurrencyMultiplier=1,currentLocationInfo,g2l=3.785,m2k=1.609,country="IN",currency="INR",units="metric",imperialUnitStrings={fuelUnits:"GL",MileageUnits:"mpg",distUnits:"miles",fuelCostUnits:"per Gallon",distunitsFull:"miles"},metricUnitStrings={fuelUnits:"L",MileageUnits:"kmpl",distUnits:"km",fuelCostUnits:"per litre",distunitsFull:"kilometers"},unitStrings=metricUnitStrings,MileageMatrix={petrol:{small:15,medium:12,large:8},diesel:{small:20,medium:15,large:10}},currrencyByCountry={BD:"BDT",BE:"EUR",BF:"XOF",BG:"BGN",BA:"BAM",BB:"BBD",WF:"XPF",BL:"EUR",BM:"BMD",BN:"BND",BO:"BOB",BH:"BHD",BI:"BIF",BJ:"XOF",BT:"BTN",JM:"JMD",BV:"NOK",BW:"BWP",WS:"WST",BQ:"USD",BR:"BRL",BS:"BSD",JE:"GBP",BY:"BYR",BZ:"BZD",RU:"RUB",RW:"RWF",RS:"RSD",TL:"USD",RE:"EUR",TM:"TMT",TJ:"TJS",RO:"RON",TK:"NZD",GW:"XOF",GU:"USD",GT:"GTQ",GS:"GBP",GR:"EUR",GQ:"XAF",GP:"EUR",JP:"JPY",GY:"GYD",GG:"GBP",GF:"EUR",GE:"GEL",GD:"XCD",GB:"GBP",GA:"XAF",SV:"USD",GN:"GNF",GM:"GMD",GL:"DKK",GI:"GIP",GH:"GHS",OM:"OMR",TN:"TND",JO:"JOD",HR:"HRK",HT:"HTG",HU:"HUF",HK:"HKD",HN:"HNL",HM:"AUD",VE:"VEF",PR:"USD",PS:"ILS",PW:"USD",PT:"EUR",SJ:"NOK",PY:"PYG",IQ:"IQD",PA:"PAB",PF:"XPF",PG:"PGK",PE:"PEN",PK:"PKR",PH:"PHP",PN:"NZD",PL:"PLN",PM:"EUR",ZM:"ZMK",EH:"MAD",EE:"EUR",EG:"EGP",ZA:"ZAR",EC:"USD",IT:"EUR",VN:"VND",SB:"SBD",ET:"ETB",SO:"SOS",ZW:"ZWL",SA:"SAR",ES:"EUR",ER:"ERN",ME:"EUR",MD:"MDL",MG:"MGA",MF:"EUR",MA:"MAD",MC:"EUR",UZ:"UZS",MM:"MMK",ML:"XOF",MO:"MOP",MN:"MNT",MH:"USD",MK:"MKD",MU:"MUR",MT:"EUR",MW:"MWK",MV:"MVR",MQ:"EUR",MP:"USD",MS:"XCD",MR:"MRO",IM:"GBP",UG:"UGX",TZ:"TZS",MY:"MYR",MX:"MXN",IL:"ILS",FR:"EUR",IO:"USD",SH:"SHP",FI:"EUR",FJ:"FJD",FK:"FKP",FM:"USD",FO:"DKK",NI:"NIO",NL:"EUR",NO:"NOK",NA:"NAD",VU:"VUV",NC:"XPF",NE:"XOF",NF:"AUD",NG:"NGN",NZ:"NZD",NP:"NPR",NR:"AUD",NU:"NZD",CK:"NZD",XK:"EUR",CI:"XOF",CH:"CHF",CO:"COP",CN:"CNY",CM:"XAF",CL:"CLP",CC:"AUD",CA:"CAD",CG:"XAF",CF:"XAF",CD:"CDF",CZ:"CZK",CY:"EUR",CX:"AUD",CR:"CRC",CW:"ANG",CV:"CVE",CU:"CUP",SZ:"SZL",SY:"SYP",SX:"ANG",KG:"KGS",KE:"KES",SS:"SSP",SR:"SRD",KI:"AUD",KH:"KHR",KN:"XCD",KM:"KMF",ST:"STD",SK:"EUR",KR:"KRW",SI:"EUR",KP:"KPW",KW:"KWD",SN:"XOF",SM:"EUR",SL:"SLL",SC:"SCR",KZ:"KZT",KY:"KYD",SG:"SGD",SE:"SEK",SD:"SDG",DO:"DOP",DM:"XCD",DJ:"DJF",DK:"DKK",VG:"USD",DE:"EUR",YE:"YER",DZ:"DZD",US:"USD",UY:"UYU",YT:"EUR",UM:"USD",LB:"LBP",LC:"XCD",LA:"LAK",TV:"AUD",TW:"TWD",TT:"TTD",TR:"TRY",LK:"LKR",LI:"CHF",LV:"EUR",TO:"TOP",LT:"LTL",LU:"EUR",LR:"LRD",LS:"LSL",TH:"THB",TF:"EUR",TG:"XOF",TD:"XAF",TC:"USD",LY:"LYD",VA:"EUR",VC:"XCD",AE:"AED",AD:"EUR",AG:"XCD",AF:"AFN",AI:"XCD",VI:"USD",IS:"ISK",IR:"IRR",AM:"AMD",AL:"ALL",AO:"AOA",AQ:"",AS:"USD",AR:"ARS",AU:"AUD",AT:"EUR",AW:"AWG",IN:"INR",AX:"EUR",AZ:"AZN",IE:"EUR",ID:"IDR",UA:"UAH",QA:"QAR",MZ:"MZN"},currency_symbols={USD:"$",EUR:"€",CRC:"₡",GBP:"£",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",NGN:"₦",PHP:"₱",PLN:"zł",PYG:"₲",THB:"฿",UAH:"₴",VND:"₫",CAD:"CA$",AED:"د.إ"},key="AIzaSyDnfJIBZj1_q75mLz20h-tSft1gl5SeXFs",localLatLang,LocationInfo=function e(){_classCallCheck(this,e),this.start_latitude="",this.start_longitude="",this.end_latitude="",this.end_longitude=""},DriveInfo=function(){function e(t){var o=t.duration,r=void 0===o?0:o,a=t.distance,i=void 0===a?0:a,n=t.petrolMileage,l=void 0===n?14:n,c=t.dieselMileage,s=void 0===c?14:c,u=t.petrolCost,d=void 0===u?0:u,m=t.dieselCost,p=void 0===m?0:m,g=t.trafficMultiplier,f=void 0===g?1:g,_=t.fuel,C=void 0===_?"petrol":_;_classCallCheck(this,e),this.duration=r,this.distance=i,this.petrolMileage=l,this.dieselMileage=s,this.petrolCost=d,this.dieselCost=p,this.trafficMultiplier=f,this.fuel=C}return _createClass(e,[{key:"getFuelUsed",value:function(){var e="petrol"===this.fuel?this.petrolMileage:this.dieselMileage,t=this.distance/e*this.trafficMultiplier;return t}},{key:"getDriveCost",value:function(){var e="petrol"===this.fuel?this.petrolCost:this.dieselCost,t=e*this.getFuelUsed();return t}},{key:"getFuelCost",value:function(){return this[this.fuel+"Cost"]}},{key:"getMileage",value:function(){return this[this.fuel+"Mileage"]}},{key:"setFuelCost",value:function(e){this[this.fuel+"Cost"]=e}},{key:"display",value:function(){var e=arguments.length<=0||void 0===arguments[0]?units:arguments[0],t="metric"===e?1:g2l,o="metric"===e?1:1/g2l,r="metric"===e?1:g2l/m2k,a="metric"===e?1:1/m2k,i=(this.getFuelUsed()*o).toFixed(2)+" "+unitStrings.fuelUnits,n="~ "+currency+Math.ceil(this.getDriveCost()),l=this.getMileage();l=(l*r).toFixed(2)+" "+unitStrings.MileageUnits;var c=(this.distance*a).toFixed(2)+" "+unitStrings.distUnits,s=this.getFuelCost();s=currency+""+(s*t).toFixed(2)+" "+unitStrings.fuelCostUnits;var u={fuelCost:s,fuelUsed:i,driveCost:n,Mileage:l,distance:c};return u}}]),e}(),di=new DriveInfo({});$("#submitButton").on("click",function(){fromLocationValid()&&toLocationValid()&&(freezeControls(),$progressBar.show(),$.post("/api/v1/traffic",currentLocationInfo).then(function(e){di.trafficMultiplier=e.multiplier,$.post("/api/v1/uber-price",currentLocationInfo).then(function(e){$fromDiv.append(fromStr),$toDiv.append(toStr),di.duration=e.prices[0].duration/60,di.distance=e.prices[0].distance*m2k,refreshDriveInfo();var t=createUberHtml(e);$uberResultSubDiv.append(t),$inputGrid.fadeOut("slow",function(){$resultGrid.fadeIn("slow");var e=new google.maps.TrafficLayer;e.setMap(map)})},function(e){})},function(e){}))}),$("#backButton").on("click",function(){resetEverything()}),$modal_fuel_cost_slider.on("input",function(){di.setFuelCost($modal_fuel_cost_slider.val()),$modal_fuel_cost.text(di.display().fuelCost),refreshDriveInfo(),coUpdateResult()}),$modal_car_size_radio.change(function(){$.each($modal_car_size_radio,function(){this.MaterialIconToggle.uncheck()}),this.MaterialIconToggle.check();var e=$modal_car_size_radio.find("input").filter(":checked").val();di.petrolMileage=MileageMatrix.petrol[e],di.dieselMileage=MileageMatrix.diesel[e],refreshDriveInfo(),coUpdateResult()}),$modal_units_radio.parent().change(changeDisplayUnits),$modal_fuel_type_radio.change(function(){di.fuel=this.value,$modal_fuel_name_span.text(this.value),$modal_fuel_cost_slider.attr("min",.9*di.getFuelCost()),$modal_fuel_cost_slider.attr("max",1.1*di.getFuelCost()),$modal_fuel_cost.text(di.display().fuelCost),$modal_fuel_cost_slider[0].MaterialSlider.change(Math.round(100*di.getFuelCost())/100),refreshMileageTextInModal(),refreshDriveInfo(),coUpdateResult()}),$("#locateme").on("click",function(){geolocate()}),$("#co_weekly_distance").on("input",function(){convertCoWeeklyDistValue()}),$("#co_car_value").on("input",function(){var e=Math.round(this.value*coCurrencyMultiplier);$("#co_car_value_disp").html(commaSeparateNumber(e))}),$("#co_calc_period").on("input",function(){var e;e=this.value<2?"1 Year":this.value+" Years",$("#co_calc_period_disp").html(e),coCalcFactors.calcPeriod=this.value,coUpdateResult()}),$("#co_submitButton").on("click",function(){co_cityValid()&&($("#co_progressBar").show(),$.post("/api/v1/uber-rates",localLatLang).then(function(e){if("ok"===e.status){var t=e.content.price_details.distance_unit,o="km"===t?1:m2k,r=e.content.price_details.cost_per_distance*o,a=$("#co_weekly_distance").val(),i=$("#co_car_value").val()*coCurrencyMultiplier;coCalcFactors={uberDistUnit:t,uberCostPerKm:r,weeklyDist:a,carValue:i,carAge:$("input[name=co_car_age]:checked").val(),calcPeriod:$("#co_calc_period").val(),insuranceRate:.2},$("#co_uber_service").html("Via "+e.content.display_name);coCalculate();coUpdateResult(),$coInputGrid.hide(),$coResultGrid.show()}},function(e){}))}),$("#co_backButton").on("click",function(){coResetEverything()}),function(){$resultGrid.hide(),$coResultGrid.hide()}(),$(document).ready(function(){componentHandler.upgradeAllRegistered();var e=local_geoip_country_code?local_geoip_country_code:"GB";country=e,localiseUnits(e),convertCoCarValue(e),convertCoWeeklyDistValue()}),function(e,t,o,r,a,i,n){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,i=t.createElement(o),n=t.getElementsByTagName(o)[0],i.async=1,i.src=r,n.parentNode.insertBefore(i,n)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-82207430-1","auto"),ga("send","pageview");
//# sourceMappingURL=maps/client.js.map
