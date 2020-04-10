const express = require('express')
const consola = require('consola')
const path = require("path");
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(express.json())
const aawUser = require('./AAW-User')
// Enable ALL CORS requests
app.use(cors())

// Configure BodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { Nuxt, Builder } = require('nuxt')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
app.use('/AA', express.static(path.join(__dirname, "../pages/AutonomousAnimal/caleb-mabry.github.io")))
app.use('/AAW', express.static(path.join(__dirname, '../pages/AAW')))
app.use('/AAW/API', aawUser)
app.get('/AAW/data', (req, res) => {
  res.sendFile(path.join(__dirname, "../static/json/data.json"))
})
app.post('/AAW/write', (req, res) => {
  const name = req.body.userName
  console.log(name)
  res.send(name)
})

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
