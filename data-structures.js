(function (global) {
  var _ds = {};

  var makeNode = function (value) {
    var node = {
      value : value,
      next  : null
    };

    return node;
  };

  var binaryTreeNode = function (value) {
    var node = {
      value : value,
      left  : null,
      right : null
    };

    return node;
  };

  _ds.linkedList = function () {
    var list = {};
    list.head = null;
    list.tail = null;

    list.addToHead = function (value) {

    };

    list.addToTail = function (value) {

    };

    list.removeFromHead = function () {

    };

    list.removeFromTail = function () {

    };

    list.contains = function (value, node) {

    };

    list.isEmpty = function () {

    };

    return list;
  };

  _ds.stack = function () {

  };

  _ds.queue = function () {

  };

  _ds.tree = function () {

  };

  _ds.binarySearchTree = function () {

  };

  _ds.graph = function () {

  };

  global._ds = _ds;
})(window);