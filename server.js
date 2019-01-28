const express = require('express');
const request = require('request');

const app = express();

app.set('view engine', 'ejs');

let city = 'Seattle';
let api = '26318328797296678be8b407dcc293ad';
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=imperial`;

app.get('/', (req, res) => {
  request(url, (error, response, body) => {
    
    let weather_json = JSON.parse(body);
    console.log(weather_json.list[0]);

    let weather = {
      city,
      temperature: Math.round(weather_json.list[0].main.temp),
      description: weather_json.list[0].weather[0].description,
      icon: weather_json.list[0].weather[0].icon,
    };

    let weather_data = {weather: weather}

    res.render('weather', weather_data);
  });
});

app.listen(8000);