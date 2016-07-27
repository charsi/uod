var express = require('express');
var router = express.Router();
var request = require('request-promise');
require('request').debug = true;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uber Or Drive?' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
      res.render('about', { title: 'About Me' });
});

router.route('/contacts')
.get(function(req, res, next) {
  res.send('Get');
  console.log("ecdecedc");
})

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
		console.log(info);
		response.send(info);
	})
	.catch((err)=>{
		console.log('something went wrong with the uber API call');
		console.log(err);
	})
}

// Listen for lat, long data. Pass the same to uber and return the response.
router.post('/result', (req, res) => {
	console.log('Hellooooooooooooooooo!');
	console.log(req.body);
	getPriceFromUber(req.body, res);
	//res.send(priceInfo);
})

module.exports = router;
