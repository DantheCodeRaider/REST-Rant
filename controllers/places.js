const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /places
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

//EDIT  
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// SHOW /places
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('*', (req, res) => {
  res.render('error404')
})

// CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
    }
    else {
        res.render('error404')
    }
      res.render('places/new', { message })
    }
    else {
        res.render('error404')
    }
  })
})

// EDIT
router.put('/:id', (req, res) => {
  if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/sarah-cervantes-PKXAiiy1O4U-unsplash.jpg'
  }
  if (!req.body.city) {
      req.body.city = 'Anytown'
  }
  if (!req.body.state) {
      req.body.state = 'USA'
  }
  // Save the new data
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
  .then(updatedPlace => {
    res.redirect(`/places/${req.params.id}`) 
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id) 
    .then(deletedPlace => { 
      res.status(303).redirect('/places')
    })
})

module.exports = router

/* const express = require('express')
const places = express.Router()
const Place = require('../models/places.js') 

//const router = require('express').Router()
router.get('/', (req, res) => {
    //res.send('/places')
    res.render('home')
})

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
  
places.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!Place[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { places: Place[id], id })
  }
})


// SHOW /places
places.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!Place[id]) {
    res.render('error404')
  } else {
  res.render('places/show', { places: Place[id], id })
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

// EDIT
places.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!Place[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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
      // Save the new data into places[id]
      Place[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

// DELETE
places.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!Place[id]) {
    res.render('error404')
  }
  else {
    Place.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = places */