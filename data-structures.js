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
      var newNode = makeNode(value);
      // if empty, set head and tail to new node
      if (list.isEmpty()) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        // else, set newNode's next to head and then set head to newNode
        newNode.next = list.head;
        list.head    = newNode;
      }
    };

    list.addToTail = function (value) {
      var newNode = makeNode(value);
      if (list.isEmpty()) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        list.tail.next = newNode;
        list.tail      = newNode;
      }
    };

    list.removeFromHead = function () {

    };

    list.removeFromTail = function () {

    };

    list.contains = function (value, node) {

    };

    list.isEmpty = function () {
      return list.head === null && list.tail === null;
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