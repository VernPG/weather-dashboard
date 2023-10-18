var city=""
var searchBtn= ".btn";
var listGroup= "";
var futureFore= $("#future-forecast");

//search for city results


function getApi () {
    var requestUrl="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={f2165315a927629b82c1512a361fb24c}";
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data[0].html_url)
        // const pTag
        }
    )
}
  
  function renderWeatherData() {
    var weatherDataEL = $("#exampleDataList");
  }

//enter api 

//call the current weather

//display 5 day outlook

//save search history