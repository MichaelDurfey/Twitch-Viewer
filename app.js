var express = require('express');
var app = express();
var request = require('request');
const async = require('async');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

app.get('/fccChannel', function(req, res){ 
  function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}
const urls= [
  "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp",
  "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp",
];
async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);
  data1.push(res)
});
res.send(data1);
data1 = [];
});

app.get('/music4Studying', function(req, res){ 
  let data = [];
 function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}
const urls= [
  "https://wind-bow.glitch.me/twitch-api/channels/music4Studying",
  "https://wind-bow.glitch.me/twitch-api/streams/music4Studying",
];
async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);

  data2.push(res)
});
res.send(data2);
data2 = [];
});

app.get('/twitch', function(req, res){ 
  let data = [];
 function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}
const urls= [
  "https://wind-bow.glitch.me/twitch-api/channels/twitch",
  "https://wind-bow.glitch.me/twitch-api/streams/twitch",
];
async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);

  data3.push(res)
});
res.send(data3);
data3 = []
});

app.get('/food', function(req, res){ 
let data = [];
function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}
const urls= [
  "https://wind-bow.glitch.me/twitch-api/channels/food",
  "https://wind-bow.glitch.me/twitch-api/streams/food",
];
async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);

  data4.push(res)
});
res.send(data4);
data4 = [];
});



app.listen(port, function () {

  console.log('Example app listening on port 3000!');
  
});

