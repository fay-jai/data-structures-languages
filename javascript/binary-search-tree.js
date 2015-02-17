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

  };

  var _add = function (start, node) {

  };

  var remove = function (node) {

  };

  var _remove = function (start, node) {

  };

  var contains = function (node) {

  };

  var _contains = function (start, node) {

  };

  var getMaxNode = function () {

  };

  var _getMaxNode = function (start) {

  };

  var getMinNode = function () {

  };

  var _getMinNode = function (start) {

  };

  var getDepth = function () {

  };

  var _getDepth = function (start) {

  };

  var isEmpty = function () {

  };

  var depthFirstSearch = function () {

  };

  var _depthFirstSearch = function (start, callback) {

  };

  var breadthFirstSearch = function () {

  };

  var _breadFirstSearch = function (start, callback) {

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