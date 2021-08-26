require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser') 
const cors = require('cors')
const axios = require('axios')


const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081

const API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const API_KEY = process.env.API_KEY


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// POST request
app.post('/new-url', async (req, res) => {
    const { getUrlValue } = req.body
    const fullAPIUrl = `${API_URL}?key=${API_KEY}&url=${getUrlValue}&lang=en`
    try {
      const {
        data: { sentence_list, score_tag, agreement, subjectivity, confidence, irony },
      } = await axios(fullAPIUrl)
      res.send({
        confidence: confidence,
        irony: irony,
        score_tag: score_tag,
        agreement: agreement,
        subjectivity: subjectivity,
        text: sentence_list[0].text || '',
      })
    } catch (error) {
      console.log(error.message)
    }
  })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Port listening to the requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = {
    app,
  }