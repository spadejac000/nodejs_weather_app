const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(cors());
let city;

app.get('/', (req, res) => {
  let api = '26318328797296678be8b407dcc293ad';
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=imperial`;

  request(url, (error, response, body) => {
    
    let weather_json = JSON.parse(body);
 
    let weather = {
      city,
      temperature: Math.round(weather_json.list[0].main.temp),
      description: weather_json.list[0].weather[0].description,
      icon: weather_json.list[0].weather[0].icon,
    };

    let weather_data = {weather: weather}

    res.status(200).json(weather_data);
    city = '';
  });
});

app.post('/', (req, res) => {
  city = req.body.city;
  res.redirect('/')
});

app.listen(5000);