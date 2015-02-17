var hashTable = function (sizeLimit) {
  var ht = Object.create( hashTableMethods );
  ht.storage   = [];
  ht.sizeLimit = sizeLimit;
  return ht;
};

var hashTableMethods = (function () {
  var insert = function (key, value) {
    var idx    = hashFunction(key, this.sizeLimit);
    var bucket = this.storage[ idx ] || [];
    var len    = bucket.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push( [key, value] );
    this.storage[ idx ] = bucket;
  };

  var retrieve = function (key) {
    var idx    = hashFunction(key, this.sizeLimit);
    var bucket = this.storage[ idx ] || [];
    var len    = bucket.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (bucket[i][0] === key) return bucket[i][1];
    }

    return null;
  };

  var remove = function (key) {
    var idx    = hashFunction(key, this.sizeLimit);
    var bucket = this.storage[ idx ] || [];
    var len    = bucket.length;
    var i, remove;

    for (i = 0; i < len; i += 1) {
      if (bucket[i][0] === key) {
        remove = bucket.splice(i, 1)[0];
        return remove;
      }
    }

    return null;
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