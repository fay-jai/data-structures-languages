/*
 * Linked List (Singly)
 * Linked List (Doubly)
 * Stack
 * Queue
 * Tree
 * Binary Search Tree
 * Hash Table
*/

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