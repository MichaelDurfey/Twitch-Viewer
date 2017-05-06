'use strict';

$('document').ready(function () {
  $(".dropdown-button").dropdown();
  $('.collapsible').collapsible();

  $(".channel").css("cursor", "pointer");

  var data = [];
  $.when($.get("/fccChannel", function (d) {
    console.log(d);
    data.push(d);
  }), $.get("/music4Studying", function (d) {
    console.log(d);
    data.push(d);
  }), $.get("/twitch", function (d) {
    console.log(d);
    data.push(d);
  }), $.get("/food", function (d) {
    console.log(d);
    data.push(d);
  })).done(function (d) {
    console.log(d);
    console.log(data);
    var fcc = data[0][0];
    var music = data[1][0];
    var twitch = data[2][0];
    var food = data[3][0];

    $(".badge").click(function () {
      $(".collapsible-header").click(false);
    });

    if (fcc[1]["stream"] === null) {
      console.log("FCC not streaming");
      var stream = '<div class = "streaming offline" id = "streaming"><a href = "' + fcc[0]["url"] + '"><span class = "badge">Offline</span></a></div>';
      $(".fccli").html('\n        <div class = "fcc channel collapsible-header" id = "channel" >  \n\n        </div>\n        <div class = "collapsible-body">\n            <span class = "description center"><span style = "font-family: roboto; font-size: 15px; font-weight: bold">' + fcc[0]["display_name"] + ' is currently Offline.</span> \n            <br>\n            <br>\n            Last Stream:<br>\n            ' + fcc[0]["status"] + '\n            <br>\n            <br>\n            </span>\n            <a class="waves-effect waves-light btn" href ="' + fcc[0]["url"] + '">Channel</a> \n        </div>\n    ');
    } else {
      stream = '\n    <div class = "streaming online " id = "streaming">\n      <a href = "' + fcc[0]["url"] + '"><span class = "new badge" data-badge-caption="">Now Streaming!</span></a>\n    </div>\n    ';
      $(".fccli").html('\n      <div class = "fcc channel collapsible-header" id = "channel" >          \n      </div>\n      <div class = "collapsible-body">\n        <span> <span style = "font-family: roboto; font-size: 15px; font-weight: bold"> ' + fcc[0]["display_name"] + ' is live!</span>\n        <br>\n        Status:<br>\n        ' + fcc[1]["stream"]["channel"]["status"] + '\n        </span>\n        <a class="waves-effect waves-light btn" href ="' + fcc[1]["stream"]["channel"]["url"] + '">Channel</a>\n      </div>\n    ');
    }

    $(".fcc").html('<img class=\'logoImage\' src=\'' + fcc[0]["logo"] + '\'><img>\n    <div class="name text-center">' + fcc[0]["display_name"] + '\n    </div>\n    ' + stream + '\n    ');

    //END FreeCodeCamp//

    //Music4Studying//
    if (music[1]["stream"] === null) {
      console.log("Music not Streaming");
      var stream = '<div class = "streaming offline" id = "streaming"><span class = "badge">Offline</span></div>';
      $(".musicli").html('\n          <div class = "music channel collapsible-header" id = "channel" >         \n          </div>\n          <div class = "collapsible-body">\n            <span>' + music[0]["display_name"] + ' is currently Offline.\n            </span>\n          </div>\n    ');
    } else {
      stream = '\n    <div class = "streaming online" id = "streaming">\n      <span class = "new badge" data-badge-caption="">Now Streaming!\n      </span>\n    </div>\n    ';
      $(".musicli").html('\n      <div class = "music4Studying channel collapsible-header" id = "channel" >          \n      </div>\n      <div class = "collapsible-body">\n        <span class = "collapsibleText">\n          <div class = "image">\n            <span style = "font-family: roboto; font-size: 15px; font-weight: bold">' + music[0]["display_name"] + ' is live!</span>\n            <br>\n            <img class="preview" src="' + music[1]["stream"]["preview"]["large"] + '" alt = "preview picture"></img>\n          </div>\n        <span>' + music[1]["stream"]["channel"]["status"] + '</span>\n        <br>\n        <br>\n        </span>\n        <a class = "waves-effect waves-light btn" href = "' + music[1]["stream"]["channel"]["url"] + '">Channel</a>\n      </div>\n    ');
    }

    $(".music4Studying").html('\n    <img class=\'logoImage\' src=\'' + music[0]["logo"] + '\'><img>\n      <div class="name text-center">\n        ' + music[0]["display_name"] + '\n      </div>\n    ' + stream + '\n  ');
    // END Music4Studying//

    //BEGIN TWITCH//
    if (twitch[1]["stream"] === null) {
      console.log("twitch not streaming");
      var stream = '\n    <div class = "streaming offline" id = "streaming">\n      <span class = "badge">\n        Offline\n      </span>\n    </div>';
      $(".twitchli").html('\n      <div class = "twitch channel collapsible-header" id = "channel" >          \n      </div>\n      <div class = "collapsible-body">\n        <span class = "description center"><span style = "font-family: roboto; font-size: 15px; font-weight: bold">' + twitch[0]["display_name"] + ' is currently Offline.</span> \n            <br>\n            <br>\n            Last Stream:<br>\n            ' + twitch[0]["status"] + '\n            <br>\n            <br>\n        </span>\n            <a class="waves-effect waves-light btn" href ="' + twitch[0]["url"] + '">Channel</a> \n      </div>\n    ');
    } else {
      stream = '\n    <div class = "streaming online" id = "streaming">\n      <span class = "new badge" data-badge-caption="">\n        Now Streaming!\n      </span>\n    </div>\n    ';
      $(".twitchli").html('\n      <div class = "twitch channel collapsible-header" id = "channel" >          \n      </div>\n      <div class = "collapsible-body">\n        <span class = "collapsibleText">\n          <div class = "image">\n            <span style = "font-family: roboto; font-size: 15px; font-weight: bold">' + twitch[0]["display_name"] + ' is live!</span>\n            <br>\n            <img class="preview" src="' + twitch[1]["stream"]["preview"]["large"] + '" alt = "preview picture"></img>\n          </div>\n        <span>' + twitch[1]["stream"]["channel"]["status"] + '</span>\n        <br>\n        <br>\n        </span>\n        <a class = "waves-effect waves-light btn" href = "' + twitch[1]["stream"]["channel"]["url"] + '">Channel</a>\n      </div>\n    ');
    }
    $(".twitch").html('\n    <img class=\'logoImage\' src=\'' + twitch[0]["logo"] + '\'></img>\n    <div class="name text-center">\n      ' + twitch[0]["display_name"] + '\n    </div>\n    ' + stream + '\n  ');
    //END Twitch//

    //BEGIN FOOD//
    if (food[1]["stream"] === null) {
      console.log("food not streaming");
      var stream = '\n      <div class = "streaming offline" id = "streaming">\n        <span class = "badge">\n          Offline\n        </span>\n      </div>';
      $(".foodli").html('\n      <div class = "food channel collapsible-header" id = "channel" >          \n      </div>\n      <div class = "collapsible-body">\n       <span class = "description center"><span style = "font-family: roboto; font-size: 15px; font-weight: bold">' + food[0]["display_name"] + ' is currently Offline.</span> \n            <br>\n            <br>\n            Last Stream:<br>\n            ' + food[0]["status"] + '\n            <br>\n            <br>\n        </span>\n            <a class="waves-effect waves-light btn" href ="' + food[0]["url"] + '">Channel</a> \n      </div>\n    ');
    } else {
      stream = '\n      <div class = "streaming online" id = "streaming">\n        <span class = "new badge" data-badge-caption="">\n          Now Streaming!\n        </span>\n      </div>\n    ';
      $(".foodli").html('\n      <div class = "food channel collapsible-header" id = "channel" >          \n      </div>\n      <div class = "collapsible-body">\n        <span class = "collapsibleText">\n          <div class = "image">\n            <span style = "font-family: roboto; font-size: 15px; font-weight: bold">' + food[0]["display_name"] + ' is live!</span>\n            <br>\n            <img class="preview" src="' + food[1]["stream"]["preview"]["large"] + '" alt = "preview picture"></img>\n          </div>\n        <span>' + food[1]["stream"]["channel"]["status"] + '</span>\n        <br>\n        <br>\n        </span>\n        <a class = "waves-effect waves-light btn" href = "' + food[1]["stream"]["channel"]["url"] + '">Channel</a>\n      </div>\n      ');
    }
    $(".food").html('<img class=\'logoImage\' src=\'' + food[0]["logo"] + '\'></img>\n    <div class="name text-center">\n      ' + food[0]["display_name"] + '\n    </div>\n      ' + stream + '\n    ');
    //END FOOD//
  });

  $("#all").click(function () {
    $(".channels").children().removeClass("hidden");
    console.log("clicked");
  });
  $("#online").click(function () {
    if ($(".streaming").hasClass("offline") === true) {
      $(".offline").parent().parent().addClass("hidden");
    }
    if ($(".streaming").hasClass("online") === true) {
      $(".online").parent().parent().removeClass("hidden");
    }
  });
  $("#offline").click(function () {
    if ($(".streaming").hasClass("offline") === true) {
      $(".offline").parent().parent().removeClass("hidden");
    }
    if ($(".streaming").hasClass("online") === true) {
      $(".online").parent().parent().addClass("hidden");
    }
  });
});
