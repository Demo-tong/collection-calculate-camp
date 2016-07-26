'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = [];

  for (let itemb of collection_b) {
    let exist = collection_a.find(function (itema) {
      return itema === itemb;
    });
    if (!exist) {
      result.push(itemb);
    }
  }

  result = collection_a.concat(result);

  return result;
}

module.exports = get_union;

