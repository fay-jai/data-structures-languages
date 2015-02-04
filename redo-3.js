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
    if (this.isEmpty()) {
      // set both head and tail to point to node
      this.head = node;
      this.tail = node;
    } else {
      // update head to point to node and node.next to point to previous head
      node.next = this.head;
      this.head = node;
    }
  },
  appendToTail: function (node) {
    // if linked list is empty
    if (this.isEmpty()) {
      // set both head and tail to point to node
      this.head = node;
      this.tail = node;
    } else {
      // update tail to point to node and tail.prev to point to new tail
      this.tail.next = node;
      this.tail      = node;
    }
  },
  removeFromHead: function () {
    // if linked list is empty
      // don't do anything
    var remove;
    if (!this.isEmpty()) {
      // save head node
      remove = this.head;

      // if linked list only has one item
      if (this.head === this.tail) {
        // reset both head and tail to null
        this.head = null;
        this.tail = null;
      } else { // linked list has more than one item
        // assign head to head.next
        this.head = this.head.next;
      }
      // for saved head node, bind next value to null
      remove.next = null;

      // return saved head node
      return remove;
    }
  },
  removeFromTail: function () {
    // if linked list is empty
      // don't do anything
    var remove, current;
    if (!this.isEmpty()) {
      // save tail node
      remove = this.tail;

      // if linked list only has one item
      if (this.head === this.tail) {
        // reset both head and tail to null
        this.head = null;
        this.tail = null;
      } else { // linked list has more than one item
        // assign tail.prev to tail
        current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        this.tail      = current;
        this.tail.next = null;
      }
      // return saved tail node
      return remove;
    }
  },
  contains: function (node) {
    // if linked list is empty
    var start;
    if (!this.isEmpty()) return false;

    // start at head value and iterate across all nodes in linked list
    start = this.head;
    while (start) {
      // check whether each node is equal to the target node
      // if at any point it is equal, return true
      if (start === node) return true;
      start = start.next;
    }
    // after checking all nodes, return false
    return false;
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
    // if linked list is empty
    if (this.isEmpty()) {
      // set both head and tail to node
      this.head = node;
      this.tail = node;
    } else { // (linked list is not empty)
      // make the new node's next value point to the previous head
      node.next      = this.head;
      // make the previous head's prev value point to new node
      this.head.prev = node;
      // make the new node the new head
      this.head      = node;
    }
  },
  appendToTail: function (node) {
    // if linked list is empty
    if (this.isEmpty()) {
      // set both head and tail to node
      this.head = node;
      this.tail = node;
    } else { // (linked list is not empty)
      // make the previous tail point to the new node
      this.tail.next = node;
      // make the new node's previous value point to the previous tail
      node.prev = this.tail;
      // make the new node the new tail
      this.tail = node;
    }
  },
  removeFromHead: function () {
    // if linked list is empty
      // don't do anything
    var remove;
    if (!this.isEmpty()) {
      // save head node
      remove = this.head;

      // if linked list has only one item
      if (this.head === this.tail) {
        // reset both head and tail to null
        this.head = null;
        this.tail = null;
      } else { // (linked list has more than one item)
        // update head.next as the new head value
        // update the new head's previous value to point to null
        // update the saved head node's next value to point to null
        this.head = this.head.next;
        this.head.prev = null;
      }
      // return saved head node
      remove.next = null;
      return remove;
    }
  },
  removeFromTail: function () {
    // if linked list is empty
      // don't do anything
    var remove;
    if (!this.isEmpty()) {
      // save tail node
      remove = this.tail;

      // if linked list has only one item
      if (this.head === this.tail) {
        // reset both head and tail to null
        this.head = null;
        this.tail = null;
      } else { // (linked list has more than one item)
        // update tail.prev as the new tail value
        // update the new tail's next value to point to null
        // update the saved tail node's prev value to point to null
        this.tail      = this.tail.prev;
        this.tail.next = null;
      }
      // return saved tail node
      remove.prev = null;
      return remove;
    }
  },
  contains: function (node) {
    // if linked list is empty
    var start;
    if (this.isEmpty()) return false;

    // start at the head node and iterate across all nodes
    start = this.head;
    // check if the current node is identically equal to the target node
    while (start) {
      if (start === node) return true;
      start = start.next;
    }
    // after iterating across all nodes, return false
    return false;
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
    this.storage[ this.size ] = value;
    this.size += 1;
  },
  pop: function () {
    var remove;
    if (this.size > 0) {
      remove = this.storage[ this.size - 1 ];
      delete this.storage[ this.size - 1 ];
      this.size -= 1;
      return remove;
    }
  },
  peek: function () {
    return this.storage[ this.size - 1 ];
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
    this.storage[ this.end ] = value;
    this.end += 1;
  },
  dequeue: function () {
    var remove;
    if (!this.isEmpty()) {
      remove = this.storage[ this.start ];
      delete this.storage[ this.start ];
      this.start += 1;
      return remove;
    }
  },
  top: function () {
    return this.storage[ this.start ];
  },
  isEmpty: function () {
    return this.end <= this.start;
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
    if (this.isEmpty()) {
      this.root = node;
    } else {
      _insert.call( this, this.root, node );
    }
  };

  var _insert = function (start, node) {
    if (start.value <= node.value) {
      if (start.left) {
        _insert.call( this, start.left, node );
      } else {
        start.left = node;
      }
    } else {
      if (start.right) {
        _insert.call( this, start.right, node );
      } else {
        start.right = node;
      }
    }
  };

  var remove = function (node) {
    if (!this.isEmpty()) {
      this.root = _remove.call( this, this.root, node );
    }
  };

  var _remove = function (start, node) {
    if (start) {
      if (node.value < start.value) {
        start.left = _remove.call( this, start.left, node );
      } else if (node.value > start.value) {
        start.right = _remove.call( this, start.right, node );
      } else if (start.left && start.right) {
        var minRightNode = findMinNode.call( this, start.right );
        start.value = minRightNode.value;
        start.right = _remove.call( this, start.right, minRightNode );
      } else {
        start = start.left || start.right;
      }
    }
    return start;
  };

  var contains = function (node) {
    return this.isEmpty() ? false : _contains.call( this, this.root, node );
  };

  var _contains = function (start, node) {
    if (start === null) return false;
    if (start === node) return true;
    if (start.value < node.value) return _contains.call( this, start.right, node );
    return _contains.call( this, start.left, node );
  };

  var findMinNode = function (start) {
    if (!this.isEmpty()) {
      return _findMinNode.call( this, start || this.root );
    }
  };

  var _findMinNode = function (start) {
    while (start.left) {
      start = start.left;
    }
    return start;
  };

  var findMaxNode = function (start) {
    if (!this.isEmpty()) {
      return _findMaxNode.call( this, start || this.root );
    }
  };

  var _findMaxNode = function (start) {
    while (start.right) {
      start = start.right;
    }
    return start;
  };

  var getHeight = function (start) {
    if (this.isEmpty()) return -1;
    return _getHeight.call( this, start || this.root ) - 1;
  };

  var _getHeight = function (start) {
    if (!start) return 0;
    return 1 + Math.max( _getHeight.call(this, start.left), _getHeight.call(this, start.right) );
  };

  var isEmpty = function () {
    return this.root === null;
  };

  var dfs = function (callback) {
    var fn;
    if (!this.isEmpty()) {
      fn = function (node) { return node; };
      _dfs.call( this, this.root, callback || fn );
    }
  };

  var _dfs = function (start, callback) {
    // inorder traversal
    if (!start) return;
    _dfs.call( this, start.left, callback );
    callback( start );
    _dfs.call( this, start.right, callback );
  };

  var bfs = function (callback) {
    var fn;
    if (!this.isEmpty()) {
      fn = function (node) { return node; };
      _bfs.call( this, this.root, callback || fn );
    }
  };

  var _bfs = function (start, callback) {
    var q = Queue();
    var remove;

    q.enqueue( start );

    while (!q.isEmpty()) {
      remove = q.dequeue();
      callback( remove );

      if (remove.left) {
        q.enqueue( remove.left );
      }

      if (remove.right) {
        q.enqueue( remove.right );
      }
    }
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
    var idx    = this.getIndexBelowMaxForKey(key, this.storageLimit);
    var bucket = this.storage[ idx ] || [];
    var len    = bucket.length;
    var i;

    for (i = 0; i < len; i += 1) {
      // check if the key already exists as an array in bucket
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // reaching here implies that the [key, value] pair doesn't exist in bucket
    bucket.push( [key, value] );
    this.storage[ idx ] = bucket;
  },
  retrieve: function (key) {
    var idx    = this.getIndexBelowMaxForKey(key, this.storageLimit);
    var bucket = this.storage[ idx ] || [];
    var len    = bucket.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (bucket[i][0] === key) return bucket[i][1];
    }

    // return null if the key doesn't exist in hash table
    return null;
  },
  remove: function (key) {
    var idx    = this.getIndexBelowMaxForKey(key, this.storageLimit);
    var bucket = this.storage[ idx ] || [];
    var len    = bucket.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (bucket[i][0] === key) {
        return bucket.splice(i, 1)[0];
      }
    }

    // return null if the key doesn't exist in hash table
    return null;
  },
  getIndexBelowMaxForKey: function (str, max) {
    var hash = 0;
    var len  = str.length;
    var i;

    for (i = 0; i < len; i += 1) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }
};