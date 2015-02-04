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

var SinglyLinkedList = function () {
  var obj  = Object.create( SinglyMethods );
  obj.head = null;
  obj.tail = null;
  return ob;
};

var SinglyMethods = {
  addToHead: function (node) {
    // check if linked list is empty
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  },
  addToTail: function (node) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  },
  removeFromHead: function () {
    // check if linked list is empty
    var remove;
    if (!this.isEmpty()) {
      remove = this.head;

      // there's only one item in the linked list
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }

      return remove;
    }
  },
  removeFromTail: function () {
    var remove, node;
    if (!this.isEmpty()) {
      remove = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        // iterate to node prior to tail
        node = this.head;
        while (node.next !== this.tail) {
          node = node.next;
        }
        this.tail = node;
        this.tail.next = null;
      }

      return remove;
    }
  },
  contains: function (node) {
    var start;
    if (!this.isEmpty()) {
      start = this.head;
      while (start !== null) {
        if (start === node) {
          return true;
        }
        start = start.next;
      }
      return false;
    }
  },
  isEmpty: function () {
    return this.head === null && this.tail === null;
  }
};

var DoublyLinkedListNode = function (value) {
  return {
    value : value,
    next  : null,
    prev  : null
  };
};

var DoublyLinkedList = function () {
  var obj  = Object.create( DoublyMethods );
  obj.head = null;
  obj.tail = null;
  return obj;
};

var DoublyMethods = {
  addToHead: function (node) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next      = this.head;
      this.head.prev = node;
      this.head      = node;
    }
  },
  addToTail: function (node) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev      = this.tail;
      this.tail.next = node;
      this.tail      = node;
    }
  },
  removeFromHead: function () {
    var remove;
    if (this.isEmpty()) {
      return null;
    } else {
      remove = this.head;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return remove;
    }
  },
  removeFromTail: function () {
    var remove;
    if (this.isEmpty()) {
      return null;
    } else {
      remove = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      return remove;
    }
  },
  contains: function (node) {
    var start;
    if (this.isEmpty()) {
      return false;
    } else {
      start = this.head;
      while (start !== null) {
        if (start === node) { return true; }
        start = start.next;
      }
      return false;
    }
  },
  isEmpty: function () {
    return this.head === null && this.tail === null;
  }
};

var Stack = function () {
  var obj     = Object.create( StackMethods );
  obj.storage = {};
  obj.size    = 0;
  return obj;
};

var StackMethods = {
  push: function (obj) {
    this.storage[ this.size ] = obj;
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
  getSize: function () {
    return this.size;
  }
};

var Queue = function () {
  var obj     = Object.create( QueueMethods );
  obj.storage = {};
  obj.start   = 0;
  obj.end     = 0;

  return obj;
};

var QueueMethods = {
  enqueue: function (obj) {
    this.storage[ this.end ] = obj;
    this.end += 1;
  },
  dequeue: function () {
    var remove;
    if (this.getSize() > 0) {
      remove = this.storage[ this.start ];
      delete this.storage[ this.start ];
      this.start += 1;

      return remove;
    }
  },
  top: function () {
    return this.storage[ this.start ];
  },
  getSize: function () {
    return this.end - this.start;
  }
};

var TreeNode = function (value) {
  return {
    value    : value,
    children : []
  };
};

var Tree = function () {

};

var BinarySearchTreeNode = function (value) {
  return {
    value : value,
    left  : null,
    right : null
  };
};

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
    // compare start node's value to node's value
    if (node.value <= start.value) {
      // check if left node exists
      if (start.left) {
        _insert.call( this, start.left, node );
      } else {
        start.left = node;
      }
    } else {
      // check if right node exists
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
        var rightMin = _findMinNode.call( this, start.right );
        start.value = rightMin.value;
        start.right = _remove.call( this, start.right, rightMin );
      } else {
        start = start.left || start.right;
      }
    }
    return start;
  };

  var contains = function (node) {
    if (this.isEmpty()) {
      return false;
    } else {
      return _contains.call( this, this.root, node );
    }
  };

  var _contains = function (start, node) {
    // base case
    if (start === null) { return false; }

    // check if start is node
    if (start === node) { return true; }
    if (start.value > node.value) {
      return _contains.call( this, start.left, node );
    } else {
      return _contains.call( this, start.right, node );
    }
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
    if (this.isEmpty()) {
      return -1;
    } else {
      return _getHeight.call( this, start || this.root ) - 1;
    }
  };

  var _getHeight = function (start) {
    // base case
    if (start === null) { return 0; }
    return 1 + Math.max( _getHeight.call( this, start.left ), _getHeight.call( this, start.right ) );
  };

  var isEmpty = function () {
    return this.root === null;
  };

  var depthFirstSearch = function (fn) {
    if (!this.isEmpty()) {
      _depthFirstSearch.call( this, this.root, fn );
    }
  };

  var _depthFirstSearch = function (start, fn) {
    fn = fn || function (node) { return node.value; };

    // base case
    if (start === null) { return; }

    // inorder
    _depthFirstSearch.call( this, start.left );
    fn( start );
    _depthFirstSearch.call( this, start.right );
  };

  var breadthFirstSearch = function (fn) {
    if (!this.isEmpty()) {
      _breadthFirstSearch.call( this, this.root, fn );
    }
  };

  var _breadthFirstSearch = function (start, fn) {
    fn = fn || function (node) { return node.value; };

    var queue = Queue();
    var popped;

    queue.enqueue( start );

    while (!queue.isEmpty()) {
      popped = queue.dequeue();
      fn( popped );

      if (popped.left) {
        queue.enqueue( popped.left );
      }

      if (popped.right) {
        queue.enqueue( popped.right );
      }
    }
  };

  return {
    insert             : insert,
    remove             : remove,
    contains           : contains,
    findMinNode        : findMinNode,
    findMaxNode        : findMaxNode,
    getHeight          : getHeight,
    isEmpty            : isEmpty,
    depthFirstSearch   : depthFirstSearch,
    breadthFirstSearch : breadthFirstSearch
  };
})();

var HashTable = function (sizeLimit) {
  var obj       = Object.create( HashTableMethods );
  obj.storage   = [];
  obj.sizeLimit = sizeLimit;

  return obj;
};

var HashTableMethods = {
  insert: function (key, value) {
    var idx = this.getIndexBelowMaxForKey( key, this.sizeLimit );
    var bucket = this.storage[ idx ] || [];

    // check if key already exists in hash table
    for (var i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // key doesn't exist in hash table
    bucket.push( [key, value] );
    this.storage[ idx ] = bucket;
  },
  retrieve: function (key) {
    var idx = this.getIndexBelowMaxForKey( key, this.sizeLimit );
    var bucket = this.storage[ idx ] || [];

    for (var i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  },
  remove: function (key) {
    var idx = this.getIndexBelowMaxForKey( key, this.sizeLimit );
    var bucket = this.storage[ idx ] || [];

    // check if key exists in hash table
    for (var i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        return bucket.splice(i, 1);
      }
    }
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