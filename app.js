var express = require('express');
var app = express();
var request = require('request');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');


// app.get('/twitch', function(req, res){
//   var user = req.body;
//   // console.log(user);
//   var twitchStream = `https://wind-bow.glitch.me/twitch-api/streams/${user}/`;
//   request(twitchStream, function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     // console.log(response.body);
//     res.send(response.body);
//   });
// });

var fccChannel = `https://wind-bow.glitch.me/twitch-api/channels/freecodecamp`
var music4Studying = `https://wind-bow.glitch.me/twitch-api/channels/music4Studying`
var twitch = `https://wind-bow.glitch.me/twitch-api/channels/twitch`
var food = `https://wind-bow.glitch.me/twitch-api/channels/food`

app.get('/fccChannel', function(req, res){ 

// var users = req;
console.log(req);

request(fccChannel, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(response.body);
    res.send(response.body);
  })
});

app.get('/music4Studying', function(req, res){ 

// var users = req;
console.log(req);
request(music4Studying, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(response.body);
    res.send(response.body);
  })

});

app.get('/twitch', function(req, res){ 

// var users = req;
console.log(req);
request(twitch, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(response.body);
    res.send(response.body);
  })

});

app.get('/food', function(req, res){ 

// var users = req;
console.log(req);
request(food, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(response.body);
    res.send(response.body);
  })

});



app.listen(port, function () {

  console.log('Example app listening on port 3000!');
  
});

