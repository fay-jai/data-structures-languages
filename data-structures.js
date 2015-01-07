(function (global) {
  var _ds = {};
  var _tt = {};

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
      var newNode = makeNode( value );
      // if empty, set head and tail to new node
      if ( list.isEmpty() ) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        // else, set newNode's next to head and then set head to newNode
        newNode.next = list.head;
        list.head    = newNode;
      }
    };

    list.addToTail = function (value) {
      var newNode = makeNode( value );
      if ( list.isEmpty() ) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        list.tail.next = newNode;
        list.tail      = newNode;
      }
    };

    list.removeFromHead = function () {
      var result;
      if ( !list.isEmpty() ) {
        result = list.head.value;

        // edge case where there's only one element in linked list
        if ( list.head === list.tail ) {
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

      if ( !list.isEmpty() ) {
        result = list.tail.value;

        if ( list.head === list.tail ) {
          list.head = null;
          list.tail = null;
        } else {
          /*
           * because this is a singly linked list with no access
           * to the previous node, will need to iterate through
           * all nodes and find the node prior to the tail
          */
          node = list.head;
          while ( node.next.next !== null ) {
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
      if ( list.isEmpty() ) return false;

      // initialize node
      if ( node === void 0 ) node = list.head;

      // base case
      if ( node === null ) return false;
      if ( node.value === value ) return true;
      return list.contains( value, node.next );
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
      storage[ size ] = value;
      size += 1;
    };

    s.pop = function () {
      var result;
      if ( !s.isEmpty() ) {
        result = storage[ size - 1 ];
        delete storage[ size - 1 ];
        size -= 1;
        return result;
      }
    };

    s.top = function () {
      return storage[ size - 1 ];
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
      storage[ end ] = value;
      end += 1;
    };

    q.dequeue = function () {
      var result;
      if ( !q.isEmpty() ) {
        result = storage[ start ];
        start += 1;
        return result;
      }
    };

    q.peek = function () {
      if ( !q.isEmpty() ) return storage[ start ];
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
      var newNode = binaryTreeNode( value );

      // check if root node is null
      if ( bst.isEmpty() ) {
        bst.root = newNode;
        return;
      }

      // initialize node: node is either root node or node that's passed in
      if ( node === void 0 ) node = bst.root;

      // compare node's value to value passed in
      if ( value <= node.value ) {
        // check if current node is a leaf node
        if ( node.left === null ) {
          node.left = newNode;
        } else {
          bst.insert( value, node.left );
        }
      } else {
        if ( node.right === null ) {
          node.right = newNode;
        } else {
          bst.insert( value, node.right );
        }
      }
    };

    bst.remove = function ( value, node ) {
      var minValue;

      if ( !bst.isEmpty() ) {
        // initialize node
        if ( node === void 0 ) node = bst.root;

        if ( value < node.value ) {
          // check if there are any node's to the left of current node
          if ( node.left !== null ) node.left = bst.remove( value, node.left );

          /*
           * The other scenario that can happen here is that node.left === null.
           * In this case, that means the value we're searching for can't be
           * found in the tree. Since we're always returning a pointer to a node,
           * we're just simply returning the node at line 270.
          */
        } else if ( value > node.value ) {
          // check if there are any node's to the right of current node
          if ( node.right !== null ) node.right = bst.remove( value, node.right );
        } else {
          // node.value === value

          // check if current node is leaf node
          if ( node.left === null && node.right === null ) {
            if ( bst.getHeight( node ) === 0 ) {
              bst.root = null;
              return null;
            } else {
              node = null;
            }
          } else if ( node.left === null ) {
            node = node.right;
          } else if ( node.right === null ) {
            node = node.left;
          } else {
            minValue   = bst.findMin( node.right );
            node.value = minValue;
            node.right = bst.remove( minValue, node.right );
          }
        }
        return node;
      }
    };

    bst.contains = function (value, node) {
      if ( bst.isEmpty() ) return false;

      // initialize node
      if ( node === void 0 ) node = bst.root;

      if ( value === node.value ) return true;
      if ( value < node.value ) {
        // check if node is leaf node
        return node.left === null ? false : bst.contains( value, node.left );
      } else {
        return node.right === null ? false : bst.contains( value, node.right );
      }
    };

    bst.findMin = function (node) {
      // min value is always the left most leaf node
      if ( !bst.isEmpty() ) {
        if ( node === void 0 ) node = bst.root;

        while ( node.left !== null ) {
          node = node.left;
        }
        // at this point, node.left is pointing to null
        return node.value;
      }
    };

    bst.findMax = function (node) {
      // max value is always the right most leaf node
      if ( !bst.isEmpty() ) {
        if ( node === void 0 ) node = bst.root;

        while ( node.right !== null ) {
          node = node.right;
        }
        // at this point, node.right is pointing to null
        return node.value;
      }
    };

    bst.getHeight = function (node) {
      if ( !bst.isEmpty() ) {
        // initialize node
        if ( node === void 0 ) node = bst.root;

        // base case of leaf node
        if ( node.left === null && node.right === null ) return 0;
        if ( node.left === null  ) return 1 + bst.getHeight( node.right );
        if ( node.right === null ) return 1 + bst.getHeight( node.left  );
        return 1 + Math.max( bst.getHeight( node.left ), bst.getHeight( node.right ) );
      }
    };

    bst.isEmpty = function () {
      return bst.root === null;
    };

    return bst;
  };

  _ds.hashTable = function (arrayLimit) {
    var h       = {};
    var storage = {};

    var hashFunction = function (str, max) {
      var hash = 0;
      var i;
      for ( i = 0; i < str.length; i += 1 ) {
        hash = ( hash<<5 ) + hash + str.charCodeAt( i );
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs( hash );
      }
      return hash % max;
    };

    h.insert = function (key, value) {
      // Get idx of where [key, value] array should be stored within storage object
      var idx = hashFunction( key, arrayLimit );
      var i;

      /*
       * Create bucket variable and set it to the array that
       * exists at storage[idx] or a new empty array.
       * Bucket is an array of arrays.
      */
      var bucket = storage[idx] || [];

      // Check whether 'key' already exists in bucket
      for ( i = 0; i < bucket.length; i += 1 ) {
        // If it does, modify existing value with new 'value'
        if ( bucket[i][0] === key ) {
          bucket[i][1] = value;
          return;
        }
      }

      // Since key doesn't already exist, push [key, value] into bucket
      bucket.push( [key, value] );

      // This rebinding is necessary because bucket could be a new array
      storage[ idx ] = bucket;
    };

    h.retrieve = function (key) {
      var idx    = hashFunction( key, arrayLimit );
      var bucket = storage[idx] || [];
      var i;

      for ( i = 0; i < bucket.length; i += 1 ) {
        if ( bucket[i][0] === key ) {
          return bucket[i][1];
        }
      }
    };

    h.remove = function (key) {
      var idx    = hashFunction( key, arrayLimit );
      var bucket = storage[idx];
      var i;

      // Check whether bucket exists
      if ( bucket ) {
        for ( i = 0; i < bucket.length; i += 1 ) {
          if ( bucket[i][0] === key ) {
            bucket.splice( i, 1 );
            break;
          }
        }
      }
    };

    return h;
  };

  _ds.graph = function (v) {
    // v is an array of vertices, where the vertice's value will be used to represent it
    var g         = {};
    g.vertex      = v;
    g.visited     = {};
    g.edges       = {};
    g.numVertices = v.length;
    g.numEdges    = 0;


    v.forEach(function (vertex) {
      g.edges[ vertex.value ] = g.edges[ vertex.value ] || [];
      g.visited[ vertex.value ] = false;
    });

    g.addEdge = function (vertex1, vertex2) {
      // check if both vertex1 and vertex2 are in the graph
      var v1Found = false;
      var v2Found = false;
      var i;

      for ( i = 0; i < g.vertex.length; i += 1 ) {
        if ( vertex1.value === g.vertex[i] ) {
          v1Found = true;
        } else if ( vertex2.value === g.vertex[i] ) {
          v2Found = true;
        }
      }

      // vertex1 is not found
      if ( !v1Found ) {
        g.vertex.push( vertex1 );
        g.numVertices += 1;
        g.visted[ vertex1.value ] = false;
        g.edges[ vertex1.value ] = [];
      }

      // vertex2 is not found
      if ( !v2Found ) {
        g.vertex.push( vertex2 );
        g.numVertices += 1;
        g.visted[ vertex2.value ] = false;
        g.edges[ vertex2.value ] = [];
      }

      g.edges[ vertex1.value ].push( vertex2.value );
      g.edges[ vertex2.value ].push( vertex1.value );
      g.numEdges += 1;
    };

    return g;
  };

  var makeVertex = function (value) {
    return {
      value   : value
    };
  };

  _ds.set = function () {
    var s     = {};
    s.storage = {};

    s.add = function (value) {

    };

    s.remove = function (value) {

    };

    s.size = function () {

    };

    s.union = function (otherSet) {

    };

    s.intersect = function (otherSet) {

    };

    s.isSubset = function (otherSet) {

    };

    s.difference = function (otherSet) {

    };

    return s;
  };

  _tt.depthFirstSearch = function (treeNode, fn) {
    fn = fn || function (x) { console.log( x ); };

    // Preorder
    // fn(treeNode.value);
    // if (treeNode.left) {
    //   _tt.depthFirstSearch(treeNode.left, fn);
    // }
    // if (treeNode.right) {
    //   _tt.depthFirstSearch(treeNode.right, fn);
    // }

    // Inorder
    if ( treeNode.left ) {
      _tt.depthFirstSearch( treeNode.left, fn );
    }

    fn( treeNode.value );

    if ( treeNode.right ) {
      _tt.depthFirstSearch( treeNode.right, fn );
    }

    // Postorder
    // if ( treeNode.left ) {
    //   _tt.depthFirstSearch( treeNode.left, fn );
    // }
    //
    // if ( treeNode.right ) {
    //   _tt.depthFirstSearch( treeNode.right, fn );
    // }
    //
    // fn( treeNode.value );
  };

  _tt.breadthFirstSearch = function (treeNode, fn) {
    // assume treeNode is a valid node

    var q, node;
    fn = fn || function (x) { console.log( x ); };

    // create a queue
    q = _ds.queue();
    q.enqueue( treeNode );

    while ( !q.isEmpty() ) {
      // process first item in queue
      node = q.dequeue();
      fn( node.value );

      // add children onto queue
      if ( node.left ) {
        q.enqueue( node.left );
      }

      if ( node.right ) {
        q.enqueue( node.right );
      }
    }
  };

  global._ds = _ds;
  global._tt = _tt;
})( window );