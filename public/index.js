$('document').ready( () => { 
$(".dropdown-button").dropdown();
$('.collapsible').collapsible();

$(".channel").css("cursor", "pointer");


var data = []
$.when(
  $.get("/fccChannel", function(d) { 
    console.log(d)
    data.push(d)
  }),
  $.get("/music4Studying", function(d) { 
    console.log(d)
    data.push(d)
  }),
  $.get("/twitch", function(d) { 
    console.log(d)
    data.push(d)
  }),
  $.get("/food", function(d) { 
    console.log(d)
    data.push(d)
  }),
  ).done(function(d) {
    console.log(d)
    console.log(data)
  var fcc = data[0][0];
  var music = data[1][0];
  var twitch = data[2][0];
  var food = data[3][0];

  $(".badge").click( 
  function() {
    $(".fccli").child().removeClass("collapsible-header").child().removeClass("collapsible-body");
  }
  );a
  

  if (fcc[1]["stream"] === null) {
    console.log("FCC not streaming")
    var stream = `<div class = "streaming"><span class = "badge right" onclick= "location.href='https://www.twitch.tv/freecodecamp'">Offline</span></div>`;
    $(".fccli").html(`
        <div class = "fcc channel collapsible-header" id = "channel" >  

        </div>
        <div class = "collapsible-body">
            <span>${fcc[0]["display_name"]} is currently Offline. 
            <br> Click here to check out ${fcc[0]["display_name"]}'s Twitch Channel
            </span>
        </div>
    `)
  }
  else {
    stream = `
    <div class = "streaming ">
      <span class = "new badge" data-badge-caption="">Now Streaming!</span>
    </div>
    `
    $(".fccli").html(`
      <div class = "fcc channel collapsible-header" id = "channel" >          
      </div>
      <div class = "collapsible-body">
        <span>${fcc[0]["display_name"]} is live! 
          <br> Click here to check out ${fcc[0]["display_name"]}'s Twitch Channel
        </span>
      </div>
    `)
  }

  $(".fcc").html(
    `<img class='logoImage' src='${fcc[0]["logo"]}'><img>
    <div class="name text-center">${fcc[0]["display_name"]}
    </div>
    ${stream}
    `)

  //FreeCodeCamp//
if (music[1]["stream"] === null) {
    console.log("Music not Streaming")
    var stream = `<div class = "streaming right "><span class = "badge">Offline</span></div>`;
  $(".musicli").html(`
    <div class = "music channel collapsible-header" id = "channel" >          
          </div>
          <div class = "collapsible-body">
            <span>${music[0]["display_name"]} is currently Offline. 
            <br> Click here to check out ${music[0]["display_name"]}'s Twitch Channel
            </span>
          </div>
    `)
  }
  else {
    stream = `
    <div class = "streaming ">
      <span class = "new badge" data-badge-caption="">Now Streaming!
      </span>
    </div>
    `
    $(".musicli").html(`
      <div class = "music4Studying channel collapsible-header" id = "channel" >          
      </div>
      <div class = "collapsible-body">
        <span>${music[0]["display_name"]} is live! 
        <br> Click here to check out ${music[0]["display_name"]}'s Twitch Channel
        </span>
      </div>
      `)
  }

  $(".music4Studying").html(`
    <img class='logoImage' src='${music[0]["logo"]}'><img>
      <div class="name text-center">
        ${music[0]["display_name"]}
      </div>
    ${stream}
    `)
  //Music4Studying//

  if (twitch[1]["stream"] === null) {
    console.log("twitch not streaming")
    var stream = `
    <div class = "streaming right ">
      <span class = "badge">
        Offline
      </span>
    </div>`;
    $(".twitchli").html(`
      <div class = "twitch channel collapsible-header" id = "channel" >          
      </div>
      <div class = "collapsible-body">
        <span>${twitch[0]["display_name"]} is currently Offline. 
          <br> Click here to check out ${twitch[0]["display_name"]}'s Twitch Channel
        </span>
      </div>
      `)
  }
  else {
    stream = `
    <div class = "streaming ">
      <span class = "new badge" data-badge-caption="">
        Now Streaming!
      </span>
    </div>
    `
    $(".twitchli").html(`
      <div class = "twitch channel collapsible-header" id = "channel" >          
      </div>
      <div class = "collapsible-body">
        <span>${twitch[0]["display_name"]} is live! 
        <br> Click here to check out ${twitch[0]["display_name"]}'s Twitch Channel
        </span>
      </div>
    `)
  }
  $(".twitch").html(`
    <img class='logoImage' src='${twitch[0]["logo"]}'></img>
    <div class="name text-center">
      ${twitch[0]["display_name"]}
    </div>
      ${stream}
  `)
  //twitch//
  if (food[1]["stream"] === null) {
    console.log("food not streaming")
    var stream = `
      <div class = "streaming right ">
        <span class = "badge">
          Offline
        </span>
      </div>`;
    $(".foodli").html(`
      <div class = "food channel collapsible-header" id = "channel" >          
      </div>
      <div class = "collapsible-body">
        <span>${food[0]["display_name"]} is currently Offline. 
        <br> Click here to check out ${food[0]["display_name"]}'s Twitch Channel
        </span>
      </div>
    `)
  }
  else {
    stream = `
      <div class = "streaming ">
        <span class = "new badge" data-badge-caption="">
          Now Streaming!
        </span>
      </div>
    `
    $(".foodli").html(`
      <div class = "food channel collapsible-header" id = "channel" >          
      </div>
      <div class = "collapsible-body">
        <span>${food[0]["display_name"]} is live! <br> 
        Click here to check out ${food[0]["display_name"]}'s Twitch Channel
        </span>
      </div>
      `)
  }
  $(".food").html(`<img class='logoImage' src='${food[0]["logo"]}'></img>
    <div class="name text-center">
      ${food[0]["display_name"]}
    </div>
      ${stream}
    `)
  //food//
  });
});