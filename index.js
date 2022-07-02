/*Frontend - HTML/JS/CSS
Work on scripts.js to pull data from Sample API
Backend - Node.js / Express
Create new project folder (created index.js)
initalize npm (in terminal, npm init -y)
Install deps (in terminal, npm i express && cors)
get API to listen on port 5000
create a json file with all coffees from Sample APIS
Create / route so that front end is able to get Coffees
Connect Front end getting Coffees from your local API.*/

const express = require('express')
const cors = require('cors')
const restaurants = require('./restaurants.json')

const app = express()

app.use(express.json())
app.use(cors())

app.listen(4002, () => {
    console.log('are you out there?')
})

app.get('/', (req, res) => {
    res.send(restaurants)
})