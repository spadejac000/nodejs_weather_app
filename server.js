let express = require('express');

let app = express();

app.set('view engine', 'ejs');

let city = 'Seattle';
let api = '26318328797296678be8b407dcc293ad';
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`;

app.get('/', (req, res) => {
  res.render('weather');
});

app.listen(8000);