
const apiURL = "//api.openweathermap.org/data/2.5/weather?q=accra&units=imperial&appid=711fe49e37cbe5b266a5f38ba8238bbb" ;

 fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
 console.log(jsObject);
 document.querySelector('#current_weather_conditions').textContent = jsObject.main.temp;

 const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
 const weatherdescription = jsObject.weather[0].description;
 const humid = jsObject.main.humidity;
 document.querySelector('#weathericon').setAttribute('src', iconsrc);
 document.querySelector('#weathericon').setAttribute('alt', weatherdescription);
 document.querySelector('#weatherdescription').textContent = weatherdescription;
 document.querySelector('#humidityLvl').textContent = humid;
 const sped = jsObject.wind.speed;
 document.querySelector('#speed').textContent = sped;
});
