var hashTable = function (sizeLimit) {
  var ht = Object.create( hashTableMethods );
  ht.storage   = [];
  ht.sizeLimit = sizeLimit;
  return ht;
};

var hashTableMethods = (function () {
  var insert = function (key, value) {

  };

  var retrieve = function (key) {

  };

  var remove = function (key) {

  };

  var hashFunction = function (str, max) {
    var hash = 0;
    var len  = str.length;
    var i;

    for (i = 0; i < len; i += 1) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  return {
    insert   : insert,
    retrieve : retrieve,
    remove   : remove
  };
})();