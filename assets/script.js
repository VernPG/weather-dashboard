// var city = "";
// var listGroup = "";
// var futureFore = $("#future-forecast");
// var currDate = $("#dateCurr");
// var currImg = $("#imgCurr");
// var currTemp = $("#tempCurr");
// var currWind = $("#windCurr");
// var curHumiduty = $("#humidCurr");
// var currentDayDisplayEl = $("#currentDay");

var weather = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");
var currCity = document.getElementById("currCity");


function getApi(lat,lon) {
  console.log(lat)
  console.log(lon)
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=f2165315a927629b82c1512a361fb24c";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].html_url;
        weather.appendChild(listItem);
        console.log(data)
      }
    });
}

function getLocation() {
  var city = currCity.value
  console.log(city)
  var requestUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=f2165315a927629b82c1512a361fb24c";
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
        getApi(data[0].lat,data[0].lon)
      }
    )
}
    // getLocation()


fetchButton.addEventListener("click", getLocation);

//call the current weather
// var today = dayjs().format("MMM DD, YYYY [at] hh:mm a");
// function displayCurrentDay() {
//   currentDayDisplayEl.text(today);
// }

// displayCurrentDay();
// setInterval(displayCurrentDay, 1000);

// get api
// var apiKey = "f2165315a927629b82c1512a361fb24c";


//search for city results

//display 5 day outlook

//save search history
