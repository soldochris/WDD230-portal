const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
  .then((response) => response.json())
  .then((jsObject) =>{

    const list = document.getElementById('listEvents');

    for(let i = 0; i < jsObject.towns.length; i++){
      
      if (jsObject.towns[i].name == "Soda Springs") {
        
        for (let j = 0; j < jsObject.towns[i].events[j].length; j++) {
          
          let event = document.createElement('li');
          event.textContent = jsObject.towns[i].events[j];
          list.appendChild(event);
          console.log(jsObject.towns[i].events[j]);
          
        }

      }
      
    }
  });

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=c704063b98daaa9a962869e196e217ee';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('curr').innerText = jsObject.weather[0].description;
    document.getElementById('tempH').innerText = jsObject.main.temp_max;
    document.getElementById('hum').innerText = jsObject.main.humidity;
    document.getElementById('wSpeed').innerText = jsObject.wind.speed;
  });


const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=c704063b98daaa9a962869e196e217ee';
fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    const forecast = jsObject['list'];

    for (let i = 3; i < forecast.length; i += 8) {
      document.getElementById(`imgForecast${i}`).setAttribute('src', "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png");
      document.getElementById(`tempForecast${i}`).innerText = forecast[i].main.temp;
    }

  });