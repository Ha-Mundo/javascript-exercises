const repeatString = function (str = "", num) {
  let result = "";

  if (num === -1) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    if (num > 0) result += str;
  }
  return result;
};

const number = Math.floor(Math.random() * 1000);

repeatString("hey", number);

// Do not edit below this line
module.exports = repeatString;
