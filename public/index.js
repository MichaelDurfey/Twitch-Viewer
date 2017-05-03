$('document').ready( () => { 


$.get("/fccChannel", function(d){ 
  d = JSON.parse(d);
  console.log(d);
  console.log(d.display_name);
  var image = d.logo;
  var name = d.display_name;
  $(".fcc").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
})

$.get("/music4Studying", function(d){ 
  d = JSON.parse(d);
  console.log(d);
  var image = d.logo;
  var name = d.display_name;
  $(".music4Studying").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
})

$.get("/twitch", function(d){ 
  d = JSON.parse(d);
  console.log(d);
  var image = d.logo;
  var name = d.display_name;
  $(".twitch").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
  // $(".twitch").text(d.display_name);
})

$.get("/food", function(d){ 
  d = JSON.parse(d);
  console.log(d);
  var image = d.logo;
  var name = d.display_name;
 $(".food").html(`<img class='logoImage' src='${image}'><img><div class="name text-center">${name}</div>`)
})

});