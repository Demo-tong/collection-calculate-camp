'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];

  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; ++i) {
      result.push(97 + i - 1);
    }
  } else {
    for (let i = number_a; i >= number_b; --i) {
      result.push(97 + i - 1);
    }
  }

  let temp = result.map(function (item) {
    return String.fromCharCode(item);
  });

  return temp;
}

module.exports = get_letter_interval;
