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

// Helper methods
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// model and export 
module.exports = mongoose.model('Place', placeSchema)
