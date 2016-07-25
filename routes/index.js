var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uber Or Drive?' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
      res.render('about', { title: 'About Me' });
});

module.exports = router;
