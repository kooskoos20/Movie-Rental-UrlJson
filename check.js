//let but = document.getElementById("see");
let div = document.getElementById("load");
/*
but.addEventListener("click", function() {
  console.log("Clicked");
  but.classList.add("hideme");
});
*/

let image = document.getElementById("poster");
let name = document.getElementById("movie");
let snippet = document.getElementById("snippet");

let check = document.getElementById("check");
let i = 0;
let data = [];

let ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://movie-rental-51a59.firebaseio.com/movies.json");

ourRequest.onload = function() {
  data = JSON.parse(ourRequest.responseText);

  console.log(data);

  //image.src = data[0].imageUrl;
  //name.insertAdjacentHTML("beforeend", data[0].name);
  //snippet.insertAdjacentHTML("beforeend", data[0].snippet);

  while (i < data.length) {
    check.insertAdjacentHTML(
      "beforeend",
      "<img src='" +
        data[i].imageUrl +
        "'" +
        " alt='movie poster' id='poster' class='poster1'>" +
        "<p><b id='movie'>" +
        data[i].name +
        "</b></p>" +
        "<p id='snippet'>" +
        data[i].snippet +
        "</p>" +
        "<button class='buttons' onclick=\"reserve('butchange" +
        i +
        "')\"><span id='butchange" +
        i +
        "'" +
        i +
        ">Reserve</span></button><div id='pad'></div>"
    );

    i++;
    document.getElementById("count").innerHTML = i;
  }
  //div.insertAdjacentHTML("beforeend", data[0].name);

  console.log(i);
};

ourRequest.send();

//let total = data.length;

let reserved = 0;

let track = {};

//track.length = 6;

//let flag = -1;

document.getElementById("count2").innerHTML = reserved;

function reserve(id) {
  console.log(track.id);
  console.log(id);

  if (track[id] === undefined || track[id] === 0) {
    reserved += 1;
    document.getElementById("count2").innerHTML = reserved;
    document.getElementById(id).innerHTML = "Return";

    track[id] = 1;

    //flag = 1;
  } else {
    reserved -= 1;
    document.getElementById("count2").innerHTML = reserved;
    document.getElementById(id).innerHTML = "Reserve";
    track[id] = 0;
    //flag = -1;
  }
}
