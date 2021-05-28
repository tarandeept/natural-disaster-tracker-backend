var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const NASA_API_KEY = process.env.NASA_API_KEY;
const EVENTS_ENDPOINT = `https://eonet.sci.gsfc.nasa.gov/api/v3/events?category=earthquakes,floods,landslides,severeStorms,volcanoes,wildfires&api_key=${NASA_API_KEY}`;

/* GET events */
router.get('/events', async function(req, res, next) {
  let response = {
    earthquakes: [],
    floods: [],
    landslides: [],
    storms: [],
    volcanoes: [],
    wildfires: []
  }

  const data = await fetch(EVENTS_ENDPOINT);
  const { events } = await data.json();

  events.forEach(event => {
    switch (event.categories[0].id) {
      case 'earthquakes':
        response.earthquakes.push(event);
        break;
      case 'floods':
        response.floods.push(event);
        break;
      case 'landslides':
        response.landslides.push(event);
        break;
      case 'severeStorms':
        response.storms.push(event);
        break;
      case 'volcanoes':
        response.volcanoes.push(event);
        break;
      case 'wildfires':
        response.wildfires.push(event);
        break;
    }
  })

  res.send(response);
});

module.exports = router;
