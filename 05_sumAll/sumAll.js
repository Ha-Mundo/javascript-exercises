// hard version
const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  // if (isNaN(a) || isNaN(b)) return "ERROR"; // <- this doesn't work for type coercion
  if (a < 0 || b < 0) return "ERROR";

  let min = Math.min(a, b);
  let max = Math.max(a, b);

  let range = [];

  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  console.log(range);

  return range.reduce((a, b) => a + b);
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
