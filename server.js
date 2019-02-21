const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

let city = 'Los Angeles';
let api = '26318328797296678be8b407dcc293ad';
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=imperial`;

app.get('/', (req, res) => {
  request(url, (error, response, body) => {
    
    let weather_json = JSON.parse(body);
    console.log('working');
 
    let weather = {
      city,
      temperature: Math.round(weather_json.list[0].main.temp),
      description: weather_json.list[0].weather[0].description,
      icon: weather_json.list[0].weather[0].icon,
    };

    let weather_data = {weather: weather}

    console.log(weather_data)
    res.status(200).json(weather_data);
  });
});

app.listen(8000);