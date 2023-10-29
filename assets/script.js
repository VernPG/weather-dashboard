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
function displayWeatherData(data, i) {
  var todayDiv = document.getElementById('today-weather');
  var forecastDiv = document.getElementById('forecast-weather')
  var div = document.createElement("div")
  // div.setAttribute("style", "width: 18rem;")

  div.className = i === 0 ? "today-weather " : "forecast-weather";
  div.innerHTML = i === 0 ? "Five Day Forecast Starting with TODAY in the City of:" : ''
 console.log(i)

 
  //this gets repeated for each p tag
  var nameEl = document.createElement("p")
  nameEl.innerHTML = `${currCity.value}`;
  div.appendChild(nameEl)

  var imgEl = document.createElement("img")
  imgEl.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
  div.appendChild(imgEl)

  var dateEl = document.createElement("p")
  dateEl.innerHTML = `Date: ${data.dt_txt}`
  div.appendChild(dateEl)

  // var descriptionEl = document.createElement("p")
  // descriptionEl.innerHTML = data.weather[0].description
  // div.appendChild(descriptionEl)

  var tempEl = document.createElement("p")
  tempEl.innerHTML = `Temp: ${data.main.temp}°F`
  div.appendChild(tempEl)

  var windEl = document.createElement("p")
  windEl.innerHTML = `Wind Speed: ${data.wind.speed}mph`
  div.appendChild(windEl)

  var humidityEl = document.createElement("p")
  humidityEl.innerHTML = `Humidty: ${data.main.humidity}%`
  div.appendChild(humidityEl)
  // div.innerHTML = `<p>${data.dt_txt}</p>
  //                  <p>${data.weather[0].description}</p>
  //                  <p>Temp: ${data.main.temp}</p>
  //                  <p>Wind: ${data.wind.speed}</p>
  //                  <p>Humidity: ${data.main.humidity}</p>`;
  if (i === 0) {
    todayDiv.appendChild(div)

  } else {
    forecastDiv.appendChild(div)

  }
}


//local storage
function readFromLocalStorage() {  
  savedSearches = JSON.parse(localStorage.getItem('petspace-saved-searches')) || [];
}

function saveToLocalStorage() {
  readFromLocalStorage();
  
  // new search string
  var newItem = {
      displayStr: storeString,
      queryStr: queryString,
  }

  // Compare to existing and only add new unique searches
  var isNewSearch = (savedSearches.filter(savedSearches => savedSearches.queryStr == newItem.queryStr).length === 0);
  if(isNewSearch){
      savedSearches.push(newItem);
      localStorage.setItem('petspace-saved-searches', JSON.stringify(savedSearches)); 
  } else {
      console.log("Not a new search parameters...");
  }
}
