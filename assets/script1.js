// var city = "";
var listGroup = "";
// var weatherCard = document.getElementById("weather-card");
var weatherData = [];
var fetchButton = document.getElementById("fetch-button");
var currCity = document.getElementById("currCity");

function getApi(lat, lon) {
  console.log(lat);
  console.log(lon);
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=f2165315a927629b82c1512a361fb24c";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("DATA: ", data);
      // console.log("DATA: ", data.city.name);
      for (var i = 0; i < data.list.length; i += 8) {
        // var listItem = document.createElement("li");
        console.log("Loop: " + i, data.list[i]);
        displayWeatherData(data.list[i], i);
        // listItem.textContent = data.list[i].main.humidity;
        // console.log("PRV DATA: ", data.list[i].main.humidity);
        // weatherCard.appendChild(listItem);
        // console.log(data);
      }
    });
}

function getLocation() {
  var city = currCity.value;
  console.log(city);
  var requestUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&units=imperial&appid=f2165315a927629b82c1512a361fb24c";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // for (var i = 0; i < data.length; i++) {
      //   var listItem = document.createElement("li");
      //   listItem.textContent = data[i].html_url;
      //   weather.appendChild(listItem);
      // console.log(data[0].lat)
      getApi(data[0].lat, data[0].lon);
    });
}
// getLocation()

fetchButton.addEventListener("click", getLocation);

// function displayData(weatherCard) {
//   var searchedCity = document.createElement("div");
//   searchedCity.classList.add("city");
// }

function displayData() {
  let url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=f2165315a927629b82c1512a361fb24c";

  fetch(url).then(function (response) {
    response
      .json()
      .then(function (data) {
        console.log(data);
        return data;
      })
      .then((data) => {
        data.map((item, i) => {
          console.log(i)
            displayWeatherData(item, i);
          
        });
      });
  });
}
function displayWeatherData(data) {
  var city = document.getElementById("weather-card");
  var div = document.createElement("div");
  div.className = "weather-card";
  div.innerHTML = ` <p${data.dt_txt} id="date0" ></p>
                    <p${data.weather[0].icon} id="img0" ></p>
                    <p i${data.weather[0].description} id="des0"><span></p>
                    <p>Temp:${data.main.temp}<span id="temp0"></span></p>
                    <p> Wind:${data.wind.speed}<span id="wind0"></span></p>
                    <p>Humidty:${data.main.humidity}<span id="humid0"></span></p>`;
  city.appendChild(div);
}