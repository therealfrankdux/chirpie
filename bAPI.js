var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')

var app = express()
var server = http.createServer(app)
app.listen(8000)

var tweets = []

app.get('/', function(req, res) {
  res.send('Welcome to Node Twitter')
})

app.post('/send', bodyParser.json(), function(req, res) {
  if (req.body && req.body.tweet) {
      tweets.push(req.body.tweet)
      res.send({status:"ok", message:"Tweet received"})
  } else {
    //no tweet?
    res.send({status:"ok", message:"Tweet received"})
  }
})

app.get('/tweets', function(req,res) {
  res.send(tweets)
})