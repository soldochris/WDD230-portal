// Code for responsive navigation
const hamButton = document.querySelector('#hamBtn');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => { navigation.classList.toggle('appear') }, false);

//last update date
let lastUpdated = document.lastModified;
document.getElementById("updatedDate").textContent = lastUpdated;

//current weather data
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=c704063b98daaa9a962869e196e217ee';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('iconWeather').setAttribute('src', "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png");
    document.getElementById('curr').innerText = jsObject.weather[0].description;
    document.getElementById('temp').innerText = jsObject.main.temp_max;
    document.getElementById('hum').innerText = jsObject.main.humidity;
  });

//5 days forecast
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=c704063b98daaa9a962869e196e217ee';
  fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
      const forecast = jsObject['list'];

      for (let i = 0; i < forecast.length; i += 3) {
        console.log(forecast[i]);
        //document.getElementById(`imgForecast${i}`).setAttribute('src', "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png");
        //document.getElementById(`tempForecast${i}`).innerText = forecast[i].main.temp;
      }

    });