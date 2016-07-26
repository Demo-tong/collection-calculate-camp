'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  collection_b.map(function (itemb) {
    let exist = collection_a.find(function (itema) {
      return itema === itemb;
    });

    if (exist) {
      result.push(exist);
    }
  });

  return result;
}

module.exports = get_intersection;
