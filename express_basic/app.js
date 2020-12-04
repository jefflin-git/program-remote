// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = 3000

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.send(`This is my Web App`)
})
// localhost:3000/food  ==> My favorite food is ice cream
app.get('/food', (req, res) => {
  res.send('My favorite food is ice cream')
})

// localhost:3000/popular/languages  ==> JavaScript is a popular language
app.get('/popular/languages', (req, res) => {
  res.send('JavaScript is a popular language')
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})