/*
 * Linked List (Singly)
 * Linked List (Doubly)
 * Stack
 * Queue
 * Tree
 * Binary Search Tree
 * Hash Table
*/

// Nodes
var SinglyLinkedListNode = function (value) {
  return {
    value : value,
    next  : null
  };
};

var DoublyLinkedListNode = function (value) {
  return {
    value : value,
    next  : null,
    prev  : null
  };
};

var TreeNode = function (value) {
  return {
    value    : value,
    children : []
  };
};

var BinaryTreeNode = function (value) {
  return {
    value : value,
    left  : null,
    right : null
  };
};

// Singly Linked List
var SinglyLinkedList = function () {
  var obj  = Object.create( SinglyLinkedListMethods );
  obj.head = null;
  obj.tail = null;
  return obj;
};

var SinglyLinkedListMethods = {
  appendToHead: function (node) {

  },
  appendToTail: function (node) {

  },
  removeFromHead: function () {

  },
  removeFromTail: function () {

  },
  contains: function (node) {

  },
  isEmpty: function () {

  }
};

// Doubly Linked List
var DoublyLinkedList = function () {
  var obj  = Object.create( DoublyLinkedListMethods );
  obj.head = null;
  obj.tail = null;
  return obj;
};

var DoublyLinkedListMethods = {
  appendToHead: function (node) {

  },
  appendToTail: function (node) {

  },
  removeFromHead: function () {

  },
  removeFromTail: function () {

  },
  contains: function (node) {

  },
  isEmpty: function () {

  }
};

// Stack
var Stack = function () {
  var obj     = Object.create( StackMethods );
  obj.storage = {};
  obj.size    = 0;
  return obj;
};

var StackMethods = {
  push: function (value) {

  },
  pop: function () {

  },
  peek: function () {

  },
  isEmpty: function () {

  }
};

// Queue
var Queue = function () {
  var obj     = Object.create( QueueMethods );
  obj.storage = {};
  obj.start   = 0;
  obj.end     = 0;
  return obj;
};

var QueueMethods = {
  enqueue: function (value) {

  },
  dequeue: function () {

  },
  top: function () {

  },
  isEmpty: function () {

  }
};

// Tree


// Binary Search Tree
var BinarySearchTree = function () {
  var obj  = Object.create( BinarySearchTreeMethods );
  obj.root = null;
  return obj;
};

var BinarySearchTreeMethods = (function () {
  var insert = function (node) {

  };

  var remove = function (node) {

  };

  var contains = function (node) {

  };

  var findMinNode = function () {

  };

  var findMaxNode = function () {

  };

  var getHeight = function () {

  };

  var isEmpty = function () {

  };

  var dfs = function (callback) {

  };

  var bfs = function (callback) {

  };

  return {
    insert      : insert,
    remove      : remove,
    contains    : contains,
    findMinNode : findMinNode,
    findMaxNode : findMaxNode,
    getHeight   : getHeight,
    isEmpty     : isEmpty,
    dfs         : dfs,
    bfs         : bfs
  };
})();

// Hash Table