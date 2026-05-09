var express = require('express');
var router = express.Router();

console.log('HELLO ROUTE LOADED');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'hello' });
});

module.exports = router;
