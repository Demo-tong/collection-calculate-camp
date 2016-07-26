'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码

  let result = [];

  let maxer = number_a >= number_b ? number_a : number_b;
  let miner = number_a < number_b ? number_a : number_b;

  for (let i = miner; i <= maxer; ++i) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return number_a <= number_b ? result : result.reverse();

}

module.exports = get_integer_interval_2;
