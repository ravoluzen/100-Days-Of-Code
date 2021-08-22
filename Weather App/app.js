"use strict";

let lon;
let lat;

let temperature = document.querySelector(".temp");
let forecast = document.querySelector(".forecast");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const apiID = "9986230831a410fb97bd0f3c2929b0d2";

            const apiURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=${apiID}`;

            fetch(apiURL)
              .then((response) =>{
                  return response.json();
              })
              .then ((data) => {
                  console.log(data);
                  temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                  forecast.textContent = data.weather[0].description;
                  loc.textContent = data.name + "," + data.sys.country;
                  let icon1 = data.weather[0].icon;
                  icon.innerHTML = 
                      `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
                      
              });
        });
    }
});