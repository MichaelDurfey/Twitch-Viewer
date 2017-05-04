$('document').ready( () => { 
$(".dropdown-button").dropdown();

$.get("/fccChannel", function(d){ 
  // d = JSON.parse(d);
  console.log(d[0]);
  var image = d[0][0].logo;
  var name = d[0][0].display_name;
  var url = d[0][0].url;
  $(".fcc").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
})

$.get("/music4Studying", function(d){ 
  console.log(d[0]);
  var image = d[0][0].logo;
  var name = d[0][0].display_name;
  var url = d[0][0].url;
  var stream = d[0][1].stream;
  $(".music4Studying").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
})

$.get("/twitch", function(d){ 
  console.log(d[0]);
  var image = d[0][0].logo;
  var name = d[0][0].display_name;
  var url = d[0][0].url;
  var stream = d[0][1].stream;
  $(".twitch").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
  // $(".twitch").text(d.display_name);
})

$.get("/food", function(d){ 
  console.log(d[0]);
  var image = d[0][0].logo;
  var name = d[0][0].display_name;
  var url = d[0][0].url;
  var stream = d[0][1].stream;
 $(".food").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
})

console.log("we're live")

});