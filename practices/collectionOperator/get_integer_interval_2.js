'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let first = [];
  let second = [];

  for(let i = 0; i < 26; ++i){
    first.push(String.fromCharCode(97 + i));
  }

  return first;
 // return result;
}

module.exports = get_integer_interval_2;
