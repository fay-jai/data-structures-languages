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
    // if linked list is empty
      // set both head and tail to point to node
    // else (linked list is not empty)
      // update head to point to node and head.next to point to previous head
  },
  appendToTail: function (node) {
    // if linked list is empty
      // set both head and tail to point to node
    // else (linked list is not empty)
      // update tail to point to node and tail.prev to point to new tail
  },
  removeFromHead: function () {
    // if linked list is empty
      // don't do anything
    // else (linked list is not empty)
      // save head node
      // if linked list only has one item
        // reset both head and tail to null
      // else  (linked list has more than one item)
        // assign head to head.next
        // for saved head node, bind next value to null
      // return saved head node
  },
  removeFromTail: function () {
    // if linked list is empty
      // don't do anything
    // else (linked list is not empty)
      // save tail node
      // if linked list only has one item
        // reset both head and tail to null
      // else  (linked list has more than one item)
        // assign tail.prev to tail
      // return saved tail node
  },
  contains: function (node) {
    // if linked list is empty
      // return false
    // else (linked list is not empty)
      // start at head value and iterate across all nodes in linked list
      // checking whether each node is equal to the target node
        // if at any point it is equal, return true
      // after checking all nodes, return false
  },
  isEmpty: function () {
    return this.head === null && this.tail === null;
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
    return this.head === null && this.tail === null;
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
    return this.size <= 0;
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
var HashTable = function (arrayLimit) {
  var obj          = Object.create( HashTableMethods );
  obj.storage      = [];
  obj.storageLimit = arrayLimit;
  return obj;
};

var HashTableMethods = {
  insert: function (key, value) {

  },
  retrieve: function (key) {

  },
  remove: function (key) {

  },
  getIndexBelowMaxForKey: function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }
};