const express = require('express')
const router = express.Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }]

//const router = require('express').Router()
/* router.get('/', (req, res) => {
    //res.send('/places')
    res.render('home')
}) */

// GET /places
app.get('/', (req, res) => {
    res.render('places/index', { places })
  })
  

  

module.exports = router

