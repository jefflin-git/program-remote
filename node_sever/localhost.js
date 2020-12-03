// Include http module from Node.js
const http = require('http')

// Define server related variables
const hostname = 'localhost'
const port = 3000

// Handle request and response here
const sever = http.creatSever((req, res => {
  res.statusCode = 200
  res.setHeader('content-Type', 'text/plain')
  res.end('This is my first server created in Node.js')
}))

// Start and listen the server
sever.listen(port, hostname, () => {
  console.log(`The server is listening on http://${hostname}:${port}`)
})