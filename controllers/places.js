const express = require('express')
const places = express.Router()
const Place = require('../models/places.js') 

//const router = require('express').Router()
/* router.get('/', (req, res) => {
    //res.send('/places')
    res.render('home')
}) */

// GET /places
places.get('/', (req, res) => {
    res.render('places/index',
     { 
      places : Place,
      title: 'Index Page' 
    }
    )
  })

// SHOW /places
places.get('/:arrayIndex', (req, res) => {
  res.send(Place[req.params.arrayIndex])
})

places.get('*', (req, res) => {
  res.render('error404')
})

module.exports = places

