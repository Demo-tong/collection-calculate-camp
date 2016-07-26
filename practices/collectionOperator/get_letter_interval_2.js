'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];

  let first = [];
  let second = [""];

  for (let i = 0; i < 26; ++i) {
    first.push(String.fromCharCode(97 + i));
    second.push(String.fromCharCode(97 + i));
  }

  if(number_a < number_b){
    for(let i = number_a - 1; i < number_b; ++i){
      let temp1 = parseInt(i / 26);
      let temp2 = i % 26;

      result.push(second[temp1] + first[temp2]);
    }
  }else{
    for(let i = number_a - 1; i >= number_b - 1; --i){
      let temp1 = parseInt(i / 26);
      let temp2 = i % 26;

      result.push(second[temp1] + first[temp2]);
    }
  }

  return result;
}

module.exports = get_letter_interval_2;

