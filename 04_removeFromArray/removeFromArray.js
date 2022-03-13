const removeFromArray = function (...args) {
  const array = args[0];
  return array.filter(item => !args.includes(item));
};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
// Do not edit below this line
module.exports = removeFromArray;
