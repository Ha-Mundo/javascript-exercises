const ftoc = function (temp) {
  //	[°C] = ([°F] − 32) × 5⁄9
  let celsius = ((temp - 32) * 5) / 9;
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const ctof = function (temp) {
  // [°F] = [°C] × 9⁄5 + 32
  let fahrenheit = temp * (9 / 5) + 32;
  let roundedfahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedfahrenheit;
};

console.log(ftoc(-32), ctof(0));
ftoc(-32);
ctof(0);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
