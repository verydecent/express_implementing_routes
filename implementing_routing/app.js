const express = require('express')
const morgan = require('./middleware/middleware.js')
const bodyParser = require('body-parser')
const app = express()

let profile = [{
  username: "WonjaeHwang",
  email: "wnjhwng@wj.me",
  url: "http://google.com"
}]

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/:id', (req, res) => {
  const userID = req.params.id
  res.send(profile[userID])
})
app.get('/', (req, res) => {
  // if(req.query.id) return res.send(profile[req.params.id])
  res.send(profile)
})

app.post('/profile', (req, res) => {
  // We only accept json objects with this in the request body
  if (!req.body.first_name || !req.body.last_name) {
    console.log("Your JSON object must contain the keys, first_name and last_name")
    return res.sendStatus(400) 
  }
  let obj = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  profile.push(obj)
  console.log('created', profile)
  res.sendStatus(201)
})

app.put('/profile/:id', (req, res) => {
  let idxElement = profile[req.params.id]
  idxElement.assign(req.body)
  console.log('updated', profile[req.params.id])
  res.sendStatus(204)
})

app.delete('/profile/:id', (req, res) => {
  profile.splice(req.params.id, 1)
  console.log('deleted', profile[req.params.id])
  res.sendStatus(204)
})


const port = 3000
app.listen(port)