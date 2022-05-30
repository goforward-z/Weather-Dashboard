// DOM elements to display on page 
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-input");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var currentWeather = document.querySelector("#current-weather");
var previousCityEl = document.getElementById("search-container");
var fiveDayEl = document.querySelector("#forecast-cards");
var currentUvEl = document.querySelector("#uv-input")

var cityArray = [];

//fetch API 

var key = "bc9ef8171a91c60f25b7a47e9d7f2910";

//requesting current weather api
var getCityWeather = function(city){
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
    
    //if response was successful
    fetch(apiURL). then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                displayCityWeather(data, city);
            });
        } else {
            alert("Error:" + response.statusText);
        }
    })
    // if network error
    .catch(function(error) {
        alert("Unable to connect to open weather");
    })
 
}

//requesting UV index api
var searchCityUV = function(lon, lat, city) {
    var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?q=" + city + "&appid=" + key + "&lat=" + lat + "&lon=" + lon; 

    fetch(uvUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(lon, lat, city) {
                displayCurrentUv(lon, lat, city);
            });
        } else {
            alert("Error:" + response.statusText);
        }
        })
        
        // if network error 
        .catch(function(error) {
            alert("Unable to connect to Open Weather");
    })
};

