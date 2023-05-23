const convertToCelsius = function(fahrenheit) {
  let celsConv = (fahrenheit - 32)* 5 / 9 
  if(isNaN(fahrenheit)) {return false} 
  else return Math.round(celsConv * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let fahrRound = celsius * 1.8 + 32
  if(isNaN(celsius)) {return false}
  else return Math.round(fahrRound * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
