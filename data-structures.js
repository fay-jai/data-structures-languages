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
      var result;
      if (!list.isEmpty()) {
        result = list.head.value;

        // edge case where there's only one element in linked list
        if (list.head === list.tail) {
          list.head = null;
          list.tail = null;
        } else {
          list.head = list.head.next;
        }

        return result;
      }
    };

    list.removeFromTail = function () {
      var node, result;

      if (!list.isEmpty()) {
        result = list.tail.value;

        if (list.head === list.tail) {
          list.head = null;
          list.tail = null;
        } else {
          /*
           * because this is a singly linked list with no access
           * to the previous node, will need to iterate through
           * all nodes and find the node prior to the tail
          */
          node = list.head;
          while (node.next.next !== null) {
            node = node.next;
          }
          // when loop breaks, node will be pointing to the node prior to tail
          list.tail      = node;
          list.tail.next = null;
        }

        return result;
      }
    };

    list.contains = function (value, node) {
      if (list.isEmpty()) {
        return false;
      }

      // initialize node
      if (node === void 0) {
        node = list.head;
      }

      // base case
      if (node === null) {
        return false;
      } else if (node.value === value) {
        return true;
      } else {
        return list.contains(value, node.next);
      }
    };

    list.isEmpty = function () {
      return list.head === null && list.tail === null;
    };

    return list;
  };

  _ds.stack = function () {
    var s       = {},
        storage = {},
        top     = -1;

    s.push = function (value) {
      top         += 1;
      storage[top] = value;
    };

    s.pop = function () {
      var result;
      if (!s.isEmpty()) {
        result = storage[top];
        top   -= 1;
        return result;
      }
    };

    s.top = function () {
      return storage[top];
    };

    s.isEmpty = function () {
      return top === -1;
    };

    return s;
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