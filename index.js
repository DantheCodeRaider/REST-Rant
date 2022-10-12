// DEPENDENCIES
const express = require('express')



// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//app.use('/places', require('./controllers/places'))

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

// Places
const placesController = require('./controllers/places.js')
app.use('/places', placesController)

app.get('*', (req, res) => {
  res.render('error404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})



