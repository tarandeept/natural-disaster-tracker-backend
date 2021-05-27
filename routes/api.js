var express = require('express');
var router = express.Router();
const NASA_API_KEY = process.env.NASA_API_KEY;

/* GET events */
router.get('/events', function(req, res, next) {
  res.send("Events");
});

module.exports = router;
