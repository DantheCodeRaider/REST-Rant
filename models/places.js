// require mongoose 
const mongoose = require('mongoose')

// creating Schema constructor 
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  cuisines: { type: String, required: true },
  pic: { type : String, default: '/images/sarah-cervantes-PKXAiiy1O4U-unsplash.jpg'  },
  founded: { type: Number, min: 1400, max: 2500, required: false },
  rating: { type: String, default: 'Not Rated' },
})

// model and export 
module.exports = mongoose.model('Place', placeSchema)

//const Place = mongoose.model('Place', placeSchema)
//module.exports = Place

/* 
Data backup for update and delete testing
module.exports = [
  {
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/thai-food.jpg',
  founded: 2002,
  rating:'Not Rated',
  comments: 'No comments yet!',
}, 
{
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/coffee-cat.jpg',
  founded: 1981,
  rating:'Not Rated',
  comments: 'No comments yet!',
}
] */