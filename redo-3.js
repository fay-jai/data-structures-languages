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


// Queue


// Tree


// Binary Search Tree


// Hash Table