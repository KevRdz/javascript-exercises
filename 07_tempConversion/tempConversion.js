const convertToCelsius = function(cel) {
  let convert = ((cel - 32) * 5/9)
  return Math.round(convert * 10) / 10
};

const convertToFahrenheit = function(fah) {
  let convert = ((fah * 1.8) + 32)
  return Math.round(convert * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
