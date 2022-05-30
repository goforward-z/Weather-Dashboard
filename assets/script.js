//fetch API 

var key = "bc9ef8171a91c60f25b7a47e9d7f2910";

//requesting current weather api
var getCityWeather = function(city){
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
    
    //if response was successful
    fetch(apiURL). then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data);
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

getCityWeather();
