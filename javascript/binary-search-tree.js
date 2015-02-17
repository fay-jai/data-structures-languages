var binarySearchTreeNode = function (value) {
  return {
    value : value,
    left  : null,
    right : null
  };
};

var binarySearchTree = function () {
  var tree  = Object.create( binarySearchTreeMethods );
  tree.root = null;
  return tree;
};

var binarySearchTreeMethods = (function () {
  var add = function (node) {
    if (this.isEmpty()) {
      this.root = node;
    } else {
      _add.call(this, this.root, node);
    }
  };

  var _add = function (start, node) {
    if (node.value <= start.value) {
      if (start.left) {
        _add.call(this, start.left, node);
      } else {
        start.left = node;
      }
    } else {
      if (start.right) {
        _add.call(this, start.right, node);
      } else {
        start.right = node;
      }
    }
  };

  var remove = function (node) {
    if (this.isEmpty()) {
      return null;
    } else {
      this.root = _remove.call(this, this.root, node);
    }
  };

  var _remove = function (start, node) {
    if (start) {
      if (node.value < start.value) {
        start.left = _remove.call(this, start.left, node);
      } else if (node.value > start.value) {
        start.right = _remove.call(this, start.right, node);
      } else if (start.left && start.right) {
        var minRightNode = _getMinNode.call(this, start.right);
        start.value      = minRightNode.value;
        start.right      = _remove.call(this, start.right, minRightNode);
      } else {
        start = start.left || start.right;
      }
    }
    return start;
  };

  var contains = function (node) {
    if (this.isEmpty()) return false;
    return _contains.call(this, this.root, node);
  };

  var _contains = function (start, node) {
    if (start === null) return false;
    if (node === start) return true;
    if (node.value <= start.value) return _contains.call(this, start.left, node);
    return _contains.call(this, start.right, node);
  };

  var getMaxNode = function () {
    if (this.isEmpty()) return null;
    return _getMaxNode.call(this, this.root);
  };

  var _getMaxNode = function (start) {
    while (start.right) {
      start = start.right;
    }
    return start;
  };

  var getMinNode = function () {
    if (this.isEmpty()) return null;
    return _getMinNode.call(this, this.root);
  };

  var _getMinNode = function (start) {
    while (start.left) {
      start = start.left;
    }
    return start;
  };

  var getDepth = function (node) {
    if (this.isEmpty()) return -1;
    return _getDepth.call(this, node || this.root) - 1;
  };

  var _getDepth = function (node) {
    if (node === null) return 0;
    return 1 + Math.max( _getDepth.call(this, node.left),
                         _getDepth.call(this, node.right) );
  };

  var isEmpty = function () {
    return this.root === null;
  };

  var depthFirstSearch = function (start, callback) {
    if (!this.isEmpty()) {
      callback = callback || function (node) { console.log(node.value); };
      _depthFirstSearch.call(this, start || this.root, callback);
    }
  };

  var _depthFirstSearch = function (start, callback) {
    if (start === null) return;
    _depthFirstSearch.call(this, start.left, callback);
    callback.call(this, start);
    _depthFirstSearch.call(this, start.right, callback);
  };

  var breadthFirstSearch = function (start, callback) {
    if (!this.isEmpty()) {
      callback = callback || function (node) { console.log(node.value); };
      _breadFirstSearch.call(this, start || this.root, callback);
    }
  };

  var _breadFirstSearch = function (start, callback) {
    var queue = [];
    queue.push(start);

    while (queue.length > 0) {
      var remove = queue.shift();
      callback.call(this, start);

      if (remove.left) {
        queue.push(remove.left);
      }

      if (remove.right) {
        queue.push(remove.right);
      }
    }
  };

  return {
    add                : add,
    remove             : remove,
    contains           : contains,
    getMaxNode         : getMaxNode,
    getMinNode         : getMinNode,
    getDepth           : getDepth,
    isEmpty            : isEmpty,
    depthFirstSearch   : depthFirstSearch,
    breadthFirstSearch : breadthFirstSearch
  };
})();