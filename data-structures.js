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
    var s       = {};
    var storage = {};
    var size    = 0;

    s.push = function (value) {
      storage[size] = value;
      size += 1;
    };

    s.pop = function () {
      var result;
      if (!s.isEmpty()) {
        result = storage[size - 1];
        delete storage[size - 1];
        size -= 1;
        return result;
      }
    };

    s.top = function () {
      return storage[size - 1];
    };

    s.isEmpty = function () {
      return size <= 0;
    };

    return s;
  };

  _ds.queue = function () {
    var q       = {};
    var storage = {};
    var start   = 0;
    var end     = 0;

    q.enqueue = function (value) {
      storage[end] = value;
      end += 1;
    };

    q.dequeue = function () {
      var result;
      if (!q.isEmpty()) {
        result = storage[start];
        start += 1;
        return result;
      }
    };

    q.peek = function () {
      if (!q.isEmpty()) {
        return storage[start];
      }
    };

    q.isEmpty = function () {
      return start >= end;
    };

    return q;
  };

  _ds.tree = function () {

  };

  _ds.binarySearchTree = function () {
    var bst = {};
    bst.root = null;

    bst.insert = function (value, node) {
      var newNode = binaryTreeNode(value);

      // check if root node is null
      if (bst.isEmpty()) {
        bst.root = newNode;
        return;
      }

      // initialize node: node is either root node or node that's passed in
      if (node === void 0) {
        node = bst.root;
      }

      // compare node's value to value passed in
      if (value <= node.value) {
        // check if current node is a leaf node
        if (node.left === null) {
          node.left = newNode;
        } else {
          bst.insert(value, node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          bst.insert(value, node.right);
        }
      }
    };

    bst.remove = function () {
      return 'pointer to root node';
    };

    bst.contains = function (value, node) {
      if (bst.isEmpty()) {
        return false;
      } else {
        // initialize node
        if (node === void 0) {
          node = bst.root;
        }

        if (value === node.value) {
          return true;
        } else if (value < node.value) {
          // check if node is leaf node
          if (node.left === null) {
            return false;
          } else {
            return bst.contains(value, node.left);
          }
        } else {
          if (node.right === null) {
            return false;
          } else {
            return bst.contains(value, node.right);
          }
        }
      }
    };

    bst.findMin = function () {
      // min value is always the left most leaf node

      var node;
      if (!bst.isEmpty()) {
        node = bst.root;
        while (node.left !== null) {
          node = node.left;
        }
        // at this point, node.left is pointing to null
        return node.value;
      }
    };

    bst.findMax = function () {
      // max value is always the right most leaf node

      var node;
      if (!bst.isEmpty()) {
        node = bst.root;
        while (node.right !== null) {
          node = node.right;
        }
        // at this point, node.right is pointing to null
        return node.value;
      }
    };

    bst.getHeight = function (node) {
      if (!bst.isEmpty()) {
        // initialize node
        if (node === void 0) {
          node = bst.root;
        }

        // base case of leaf node
        if (node.left === null && node.right === null) {
          return 0;
        } else if (node.left === null) {
          return 1 + bst.getHeight(node.right);
        } else if (node.right === null) {
          return 1 + bst.getHeight(node.left);
        } else {
          return 1 + Math.max( bst.getHeight(node.left), bst.getHeight(node.right) );
        }
      }
    };

    bst.isEmpty = function () {
      return bst.root === null;
    };

    return bst;
  };

  _ds.graph = function () {

  };

  global._ds = _ds;
})(window);