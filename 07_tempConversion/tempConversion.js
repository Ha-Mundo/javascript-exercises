const ftoc = function (temp) {
  //	[°C] = ([°F] − 32) × 5⁄9

  let celsius = ((temp - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const ctof = function (temp) {
  // [°F] = [°C] × 9⁄5 + 32

  let fahrenheit = temp * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

ftoc(-32);
ctof(0);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
