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