$('document').ready( () => { 
$(".dropdown-button").dropdown();
$('.collapsible').collapsible();

$(".channel").css("cursor", "pointer");

var data = [];
$.when(
  $.get("/fccChannel", function(a) { 
     data.push(a)
  }),
  $.get("/music4Studying", function(b) { 
    data.push(b)
  }),
  $.get("/twitch", function(c) { 
    data.push(c)
  }),
  $.get("/food", function(d) { 
    data.push(d)
  }),
  ).then(()=>{
    console.log(data[1])
  var fcc = data[0];
  var music = data[1];
  var twitch = data[2];
  var food = data[3];


    if (fcc[1]["stream"] === null) {
      var stream = `<div class = "streaming offline" id = "streaming"><a href = "${fcc[0]["url"]}"><span class = "badge">Offline</span></a></div>`;
      $(".fccli").html(`
          <div class = "fcc channel collapsible-header" id = "channel" >  

          </div>
          <div class = "collapsible-body">
              <span class = "description center"><span style = "font-family: roboto; font-size: 15px; font-weight: bold">${fcc[0]["display_name"]} is currently Offline.</span> 
              <br>
              <br>
              Last Stream:<br>
              ${fcc[0]["status"]}
              <br>
              <br>
              </span>
              <a class="waves-effect waves-light btn" href ="${fcc[0]["url"]}">Channel</a> 
          </div>
      `)
    }
    else {
      stream = `
      <div class = "streaming online " id = "streaming">
        <a href = "${fcc[0]["url"]}"><span class = "new badge" data-badge-caption="">Now Streaming!</span></a>
      </div>
      `
      $(".fccli").html(`
        <div class = "fcc channel collapsible-header" id = "channel" >          
        </div>
        <div class = "collapsible-body">
          <span> <span style = "font-family: roboto; font-size: 15px; font-weight: bold"> ${fcc[0]["display_name"]} is live!</span>
          <br>
          Status:<br>
          ${fcc[1]["stream"]["channel"]["status"]}
          </span>
          <a class="waves-effect waves-light btn" href ="${fcc[1]["stream"]["channel"]["url"]}">Channel</a>
        </div>
      `)
    }

    $(".fcc").html(
      `<img class='logoImage' src='${fcc[0]["logo"]}'><img>
      <div class="name text-center">${fcc[0]["display_name"]}
      </div>
      ${stream}
      `)

//END FreeCodeCamp//

//Music4Studying//
    if (music[1]["stream"] === null) {
        console.log("Music not Streaming")
        var stream = `<div class = "streaming offline" id = "streaming"><span class = "badge">Offline</span></div>`;
      $(".musicli").html(`
              <div class = "music4Studying channel collapsible-header" id = "channel" >         
              </div>
              <div class = "collapsible-body">
                <span>${music[0]["display_name"]} is currently Offline.
                </span>
              </div>
        `)
    }


    else {
      stream = `
      <div class = "streaming online" id = "streaming">
        <span class = "new badge" data-badge-caption="">Now Streaming!
        </span>
      </div>
      `
      $(".musicli").html(`
        <div class = "music4Studying channel collapsible-header" id = "channel" >          
        </div>
        <div class = "collapsible-body">
          <span class = "collapsibleText">
            <div class = "image">
              <span style = "font-family: roboto; font-size: 15px; font-weight: bold">${music[0]["display_name"]} is live!</span>
              <br>
              <img class="preview" src="${music[1]["stream"]["preview"]["large"]}" alt = "preview picture"></img>
            </div>
          <span>${music[1]["stream"]["channel"]["status"]}</span>
          <br>
          <br>
          </span>
          <a class = "waves-effect waves-light btn" href = "${music[1]["stream"]["channel"]["url"]}">Channel</a>
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
// END Music4Studying//

//BEGIN TWITCH//
    if (twitch[1]["stream"] === null) {
      console.log("twitch not streaming")
      var stream = `
      <div class = "streaming offline" id = "streaming">
        <span class = "badge">
          Offline
        </span>
      </div>`;
      $(".twitchli").html(`
        <div class = "twitch channel collapsible-header" id = "channel" >          
        </div>
        <div class = "collapsible-body">
          <span class = "description center"><span style = "font-family: roboto; font-size: 15px; font-weight: bold">${twitch[0]["display_name"]} is currently Offline.</span> 
              <br>
              <br>
              Last Stream:<br>
              ${twitch[0]["status"]}
              <br>
              <br>
          </span>
              <a class="waves-effect waves-light btn" href ="${twitch[0]["url"]}">Channel</a> 
        </div>
      `)
    }
    else {
      stream = `
      <div class = "streaming online" id = "streaming">
        <span class = "new badge" data-badge-caption="">
          Now Streaming!
        </span>
      </div>
      `
      $(".twitchli").html(`
        <div class = "twitch channel collapsible-header" id = "channel" >          
        </div>
        <div class = "collapsible-body">
          <span class = "collapsibleText">
            <div class = "image">
              <span style = "font-family: roboto; font-size: 15px; font-weight: bold">${twitch[0]["display_name"]} is live!</span>
              <br>
              <img class="preview" src="${twitch[1]["stream"]["preview"]["large"]}" alt = "preview picture"></img>
            </div>
          <span>${twitch[1]["stream"]["channel"]["status"]}</span>
          <br>
          <br>
          </span>
          <a class = "waves-effect waves-light btn" href = "${twitch[1]["stream"]["channel"]["url"]}">Channel</a>
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
//END Twitch//

  //BEGIN FOOD//
    if (food[1]["stream"] === null) {
      console.log("food not streaming")
      var stream = `
        <div class = "streaming offline" id = "streaming">
          <span class = "badge">
            Offline
          </span>
        </div>`;
      $(".foodli").html(`
        <div class = "food channel collapsible-header" id = "channel" >          
        </div>
        <div class = "collapsible-body">
         <span class = "description center"><span style = "font-family: roboto; font-size: 15px; font-weight: bold">${food[0]["display_name"]} is currently Offline.</span> 
              <br>
              <br>
              Last Stream:<br>
              ${food[0]["status"]}
              <br>
              <br>
          </span>
              <a class="waves-effect waves-light btn" href ="${food[0]["url"]}">Channel</a> 
        </div>
      `)
    }
    else {
      stream = `
        <div class = "streaming online" id = "streaming">
          <span class = "new badge" data-badge-caption="">
            Now Streaming!
          </span>
        </div>
      `
      $(".foodli").html(`
        <div class = "food channel collapsible-header" id = "channel" >          
        </div>
        <div class = "collapsible-body">
          <span class = "collapsibleText">
            <div class = "image">
              <span style = "font-family: roboto; font-size: 15px; font-weight: bold">${food[0]["display_name"]} is live!</span>
              <br>
              <img class="preview" src="${food[1]["stream"]["preview"]["large"]}" alt = "preview picture"></img>
            </div>
          <span>${food[1]["stream"]["channel"]["status"]}</span>
          <br>
          <br>
          </span>
          <a class = "waves-effect waves-light btn" href = "${food[1]["stream"]["channel"]["url"]}">Channel</a>
        </div>
        `)
    }
    $(".food").html(`<img class='logoImage' src='${food[0]["logo"]}'></img>
      <div class="name text-center">
        ${food[0]["display_name"]}
      </div>
        ${stream}
    `)
    //END FOOD//
  }); //.donefunction//

  $("#all").click(()=>{ 
    $(".channels").children().removeClass("hidden")
    console.log("clicked")
    })
  $("#online").click(()=>{
    if ($(".streaming").hasClass("offline") === true){
      $(".offline").parent().parent().addClass("hidden")
    } 
    if ($(".streaming").hasClass("online") === true) {
      $(".online").parent().parent().removeClass("hidden")}
  })
  $("#offline").click(()=>{
    if ($(".streaming").hasClass("offline") === true) {
      $(".offline").parent().parent().removeClass("hidden")
    }
    if($(".streaming").hasClass("online") === true) {
      $(".online").parent().parent().addClass("hidden")
    }
  })



});//document.ready//






