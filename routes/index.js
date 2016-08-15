var express = require('express');
var router = express.Router();
var request = require('request-promise');
require('request').debug = true;
var fs = require('fs');
var petrolprices = JSON.parse(fs.readFileSync('./db/pricelist.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uber Or Drive?' });
});

/* GET about page. */
router.get('/faq', function(req, res, next) {
      res.render('faq', { title: 'FAQ' });
});

// gets price info from uber. Takes an object containing lat,lng info for start and stop of trip
function getPriceFromUber(locations, response){
	var options = {
		//baseUrl : 'https://api.uber.com/v1/estimates/price',
		url: 'https://api.uber.com/v1/estimates/price',
		qs: {
			start_latitude: locations.start_latitude,
			start_longitude: locations.start_longitude,
			end_latitude: locations.end_latitude,
			end_longitude: locations.end_longitude
		  },
		headers: {
			'Authorization': 'Token ***REMOVED***',
		},
		method: 'GET'
	};
	request(options)
	.then((body)=>{
		var info = JSON.parse(body);
		//console.log(info);
		response.send(info);
	})
	.catch((err)=>{
		console.log('something went wrong with the uber API call');
		console.log(err);
	})
}


function getTrafficInfoFromGoogle(locations, response){
	var fromStr = locations.start_latitude+','+locations.start_longitude;
	var toStr = locations.end_latitude+','+locations.end_longitude;
	var options = {
		url: 'https://maps.googleapis.com/maps/api/distancematrix/json',
		qs: {
			origins : fromStr,
			destinations : toStr,
			traffic_model: "best_guess",
			departure_time : "now",
			key: "***REMOVED***" // server key	
			},
		method: 'GET'
	};
	//console.log(options);
	console.log('Dialing Google!');
	request(options)
	.then((body)=>{
		var info = JSON.parse(body);
		//console.log(info);
		//calculate multiplier factor due to traffic and send it back
		var normalDuration = info.rows[0].elements[0].duration.value;
		var inTrafficDuration = info.rows[0].elements[0].duration_in_traffic.value;
		var multiplier = inTrafficDuration/normalDuration;
		if (multiplier < 1.0) {
			multiplier = 1.0;
		}
		var reply = {multiplier: multiplier};
		response.send(reply);
	})
	.catch((err)=>{
		console.log('something went wrong with the google API call');
		console.log(err);
	})
}

function fuelpricecheck(query, response) {
	var countryCode = query.countrycode.toUpperCase();
	console.log(countryCode);
	response.send(petrolprices[countryCode]);
}

// Listen for lat, long data. Pass the same to uber and return the response.
router.post('/api/uber', (req, res) => {
	console.log('Dialing Uber!');
	//console.log(req.body);
	getPriceFromUber(req.body, res);
	//res.send(priceInfo);
})

// Listen for for, to addresses to be sent to google for traffic info
router.post('/api/traffic', (req, res) => {
	console.log('traffic check!');
	//console.log(req.body);
	getTrafficInfoFromGoogle(req.body, res);
	//res.send(priceInfo);
})    

// Listen for country name and return fuel price
router.get('/api/fuelprice', (req, res) => {
	console.log('fuel price check!');
	//console.log(req.body);
	fuelpricecheck(req.query, res);
	//res.send(priceInfo);
})    

module.exports = router;