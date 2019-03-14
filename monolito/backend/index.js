const express = require('express')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')

const app = express()

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
})

// Parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes API
mountRoutes(app)

// Server Conf
app.listen(7070, () => {
  console.log('server up... listening on port 7070!')
})