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
  this.value = value;
  this.next  = null;
};

var SinglyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

SinglyLinkedList.prototype.addToHead = function (node) {
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
};

SinglyLinkedList.prototype.addToTail = function (node) {
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

SinglyLinkedList.prototype.removeFromHead = function () {
  if (this.isEmpty()) return null;

  var remove = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return remove;
};

SinglyLinkedList.prototype.removeFromTail = function () {
  if (this.isEmpty()) return null;

  var remove = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    var node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    this.tail = node;
    this.tail.next = null;
  }

  return remove;
};

SinglyLinkedList.prototype.contains = function (node) {
  if (this.isEmpty()) return false;
  var start = this.head;

  while (start !== null) {
    if (start === node) return true;
    start = start.next;
  }
  return false;
};

SinglyLinkedList.prototype.isEmpty = function () {
  return this.head === null && this.tail === null;
};

var DoublyLinkedListNode = function (value) {
  this.value = value;
  this.next  = null;
  this.prev  = null;
};

var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToHead = function (node) {
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node; // current head's previous will be node
    node.next = this.head; // new node's next will be current head
    this.head = node;      // new node will be new head
  }
};

DoublyLinkedList.prototype.addToTail = function (node) {
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node; // current tail's next will be node
    node.prev = this.tail; // new node's previous will be current tail
    this.tail = node;      // new node will be new tail
  }
};

DoublyLinkedList.prototype.removeFromHead = function () {
  if (this.isEmpty()) return null;

  var remove = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  return remove;
};

DoublyLinkedList.prototype.removeFromTail = function () {
  if (this.isEmpty()) return null;

  var remove = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  return remove;
};

DoublyLinkedList.prototype.contains = function (node) {
  if (this.isEmpty()) return false;

  var start = this.head;
  while (start !== null) {
    if (start === node) return true;
    start = start.next;
  }
  return false;
};

DoublyLinkedList.prototype.isEmpty = function () {
  return this.head === null && this.tail === null;
};

var Stack = function () {
  this.storage = {};
  this.size = 0;
};

Stack.prototype.push = function (value) {
  this.storage[ this.size ] = value;
  this.size += 1;
};

Stack.prototype.pop = function () {
  if ( this.size > 0 ) {
    var remove = this.storage[ this.size - 1 ];
    delete this.storage[ this.size - 1 ];
    this.size -= 1;

    return remove;
  }
};

Stack.prototype.peek = function () {
  return this.storage[ this.size - 1 ];
};

Stack.prototype.getSize = function () {
  return this.size;
};

var Queue = function () {
  this.storage = {};
  this.start   = 0;
  this.end     = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[ this.end ] = value;
  this.end += 1;
};

Queue.prototype.dequeue = function () {
  if ( this.getSize() > 0 ) {
    var remove = this.storage[ this.start ];
    delete this.storage[ this.start ];
    this.start += 1;

    return remove;
  }
};

Queue.prototype.top = function () {
  return this.storage[ this.start ];
};

Queue.prototype.getSize = function () {
  return this.end - this.start;
};

var BinarySearchTreeNode = function (value) {
  this.value = value;
  this.left  = null;
  this.right = null;
};

var BinarySearchTree = function () {
  this.root = null;
};

BinarySearchTree.prototype.insert = function (node) {
  if (this.isEmpty()) {
    this.root = node;
  } else {
    _insert(this.root, node);
  }
};

var _insert = function (start, node) {
  if (node.value <= start.value) {
    if (!start.left) {
      start.left = node;
    } else {
      _insert(start.left, node);
    }
  } else {
    if (!start.right) {
      start.right = node;
    } else {
      _insert(start.right, node);
    }
  }
};

BinarySearchTree.prototype.remove = function (node) {
  if (this.isEmpty()) return false;
  this.root = _remove.call(this, this.root, node);
  return true;
};

var _remove = function (start, node) {
  if (start === null) {
    start = null;
  } else if (node.value < start.value) {
    start.left = _remove(start.left, node);
  } else if (node.value > start.value) {
    start.right = _remove(start.right, node);
  } else if (start.left && start.right) {
    var minRight = this.findMinValue(start.right);
    start.value  = minRight.value;
    start.right  = _remove(start.right, minRight);
  } else {
    start = start.left || start.right;
  }
  return start;
};

BinarySearchTree.prototype.contains = function (node) {
  if (this.isEmpty()) return false;
  return _contains(this.root, node);
};

var _contains = function (start, node) {
  if (start === null) return false;
  if (node === start) return true;
  if (node.value < start.value) return _contains(start.left, node);
  return _contains(start.right, node);
};

BinarySearchTree.prototype.findMaxValue = function (start) {
  if (this.isEmpty()) return false;
  return _findMaxValue(start || this.root);
};

var _findMaxValue = function (start) {
  while (start.right) {
    start = start.right;
  }
  return start;
};

BinarySearchTree.prototype.findMinValue = function (start) {
  if (this.isEmpty()) return false;
  return _findMinValue(start || this.root);
};

var _findMinValue = function (start) {
  while (start.left) {
    start = start.left;
  }
  return start;
};

BinarySearchTree.prototype.getHeight = function (node) {
  if (this.isEmpty()) return -1;
  return _getHeight(node || this.root) - 1;
};

var _getHeight = function (node) {
  if (!node) return 0;
  return 1 + Math.max( _getHeight(node.left), _getHeight(node.right) );
};

BinarySearchTree.prototype.isEmpty = function () {
  return this.root === null;
};

BinarySearchTree.prototype.depthFirstSearch = function (callback) {
  if (!this.isEmpty()) {
    _depthFirstSearch.call(this, this.root, callback);
  }
};

var _depthFirstSearch = function (node, callback) {
  // in order
  if (!node) return;
  _depthFirstSearch(node.left, callback);
  callback.call(null, node);
  _depthFirstSearch(node.right, callback);
};

BinarySearchTree.prototype.breadthFirstSearch = function (callback) {
  if (!this.isEmpty()) {
    _breadFirstSearch.call(this, this.root, callback);
  }
};

var _breadFirstSearch = function (node, callback) {
  var q = new Queue();
  q.enqueue(node);

  while (q.getSize() > 0) {
    var remove = q.dequeue();
    callback.call(null, remove);

    if (remove.left) {
      q.enqueue(remove.left);
    }

    if (remove.right) {
      q.enqueue(remove.right);
    }
  }
};

var HashTable = function (storageSize) {
  this.storage = [];
  this.storageSize = storageSize;
};

HashTable.prototype.insert = function (key, value) {
  var idx = getIndexBelowMaxForKey(key, this.storageSize);
  var bucket = this.storage[ idx ] || [];

  for (var i = 0; i < bucket.length; i += 1) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value;
      return;
    }
  }

  bucket.push( [key, value] );
  this.storage[ idx ] = bucket;
};

HashTable.prototype.retrieve = function (key) {
  var idx = getIndexBelowMaxForKey(key, this.storageSize);
  var bucket = this.storage[ idx ] || [];

  for (var i = 0; i < bucket.length; i += 1) {
    if (bucket[i][0] === key) return bucket[i][1];
  }
};

HashTable.prototype.remove = function (key) {
  var idx = getIndexBelowMaxForKey(key, this.storageSize);
  var bucket = this.storage[ idx ] || [];

  for (var i = 0; i < bucket.length; i += 1) {
    if (bucket[i][0] === key) {
      var value = bucket.splice(i, 1);
      return value;
    }
  }
};

var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};