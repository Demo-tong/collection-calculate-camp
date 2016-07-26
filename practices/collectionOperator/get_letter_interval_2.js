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

  let maxer = number_a >= number_b ? number_a : number_b;
  let miner = number_a < number_b ? number_a : number_b;

  for (let i = miner - 1; i < maxer; ++i) {
    let temp1 = parseInt(i / 26);
    let temp2 = i % 26;

    result.push(second[temp1] + first[temp2]);
  }

  return number_a < number_b ? result : result.reverse();
}

module.exports = get_letter_interval_2;

