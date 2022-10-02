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

places.get('/new', (req, res) => {
    res.render('places/new')
})
  
// SHOW /places
places.get('/:arrayIndex', (req, res) => {
  let id = Number(req.params.arrayIndex)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!Place[id]) {
    res.render('error404')
  } else {
  res.render('places/show', { places: Place[id] })
  }
})

places.get('*', (req, res) => {
  res.render('error404')
})

// CREATE
places.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    Place.push(req.body)
    res.redirect('/places')
})

module.exports = places
