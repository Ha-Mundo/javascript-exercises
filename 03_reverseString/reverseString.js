const reverseString = function (str) {
  /* let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join(""); */

  return str.split("").reverse().join("");
};

console.log(reverseString("hello"));
reverseString("");

// Do not edit below this line
module.exports = reverseString;
