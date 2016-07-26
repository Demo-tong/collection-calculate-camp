'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码

  let result = [];

  collection_a.filter(function(itema){
    let exist = collection_b.find(function(itemb){
      return itema === itemb;
    });

    if(exist){
      result.push(itema);
    }else{
      result.push(exist);
    }
  })

  return result;
}

module.exports = get_union;

