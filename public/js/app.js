document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('ready');
});

const showCity = () => {
  console.log('poop shoot')
  let x, y, cityName, a, b, answer;
  x = document.getElementsByTagName('form')[0];
  y = x.getAttribute(['name']).value;
  console.log("You searched " + y);
}