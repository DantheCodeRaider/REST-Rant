require('dotenv').config()
const express = require('express')
const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//app.use('/places', require('./controllers/places'))

//Routes
app.get('/', (req, res) => {
    res.send('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  

// Places
const placesController = require('./controllers/places')
app.use('/places', placesController)

app.listen(process.env.PORT)

