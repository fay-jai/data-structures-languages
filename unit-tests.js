(function (_ds) {

  var assert = function (expression, comment) {
    if (expression) {
      console.log(comment);
    } else {
      console.log('Test Failed!');
    }
  };

  /* 
   * Linked List
  */
  assert(true, '- Start: linkedList Tests - \n');
  var ll = _ds.linkedList();
  assert(ll.head === null, '* ll.head is null');
  assert(ll.tail === null, '* ll.tail is null');

  assert(true, '- addToHead -');
  ll.addToHead(18);
  assert(ll.head.value === 18, '* ll.head\'s value is correct');
  assert(ll.tail.value === 18, '* ll.tail\'s value is correct');
  ll.addToHead(15);
  assert(ll.head.value === 15, '* ll.head\'s value is correct');
  assert(ll.tail.value === 18, '* ll.tail\'s value is correct');

  assert(true, '- addToTail -');
  ll.addToTail(13);
  assert(ll.head.value === 15, '* ll.head\'s value is correct');
  assert(ll.tail.value === 13, '* ll.tail\'s value is correct');

  var ll2 = _ds.linkedList();
  ll2.addToTail(1);
  assert(ll2.head.value === 1, '* ll.head\'s value is correct');
  assert(ll2.tail.value === 1, '* ll.tail\'s value is correct');

  assert(true, '- contains -');
  assert(ll.contains(1) === false, '* contains is correct');
  assert(ll2.contains(1) === true, '* contains is correct');
  assert(ll.contains(13) === true, '* contains is correct');
  assert(ll.contains(15) === true, '* contains is correct');
  assert(ll.contains(18) === true, '* contains is correct');
  assert(ll.contains(19) === false, '* contains is correct');
  assert(ll2.contains(2) === false, '* contains is correct');
  assert(ll2.contains(0) === false, '* contains is correct');

  assert(true, '- removeFromHead -');
  assert(ll.removeFromHead() === 15, '* removeFromHead is correct');
  assert(ll.head.value === 18, '* head value is correct after removeFromHead');
  assert(ll.tail.value === 13, '* tail value is correct after removeFromHead');

  assert(true, '- removeFromTail -');
  assert(ll.removeFromTail() === 13, '* remove is correct');
  assert(ll.head.value === 18, '* head value is correct after removeFromTail');
  assert(ll.tail.value === 18, '* tail value is correct after removeFromTail');

  assert(true, '- removeFromHead -');
  assert(ll.removeFromHead() === 18, '* removeFromHead is correct');
  assert(ll.head === null, '* head value is correct after removeFromHead');
  assert(ll.tail === null, '* tail value is correct after removeFromHead');
  assert(ll.removeFromHead() === void 0, '* removeFromHead correctly produces undefined');
  assert(ll.removeFromTail() === void 0, '* removeFromTail correctly produces undefined');

  assert(true, '- removeFromTail -');
  assert(ll2.removeFromTail() === 1, '* removeFromTail is correct');
  assert(ll2.head === null, '* head value is correct after removeFromTail');
  assert(ll2.tail === null, '* tail value is correct after removeFromTail');
  assert(ll.removeFromHead() === void 0, '* removeFromHead correctly produces undefined');
  assert(ll.removeFromTail() === void 0, '* removeFromTail correctly produces undefined');
  assert(true, '- End: linkedList Tests - \n');


  /* 
   * Stack
  */
  assert(true, '- Start: Stack Tests - \n');
  var s = _ds.stack();
  assert(s.isEmpty() === true, '* stack is empty');
  assert(s.top() === void 0, '* stack does not have a top');

  s.push(1);
  assert(s.isEmpty() === false, '* stack is not empty');
  assert(s.top() === 1, '* top is correct');

  s.push(2);
  assert(s.isEmpty() === false, '* stack is not empty');
  assert(s.top() === 2, '* top is correct');

  assert(s.pop() === 2, '* pop produces correct value');
  assert(s.isEmpty() === false, '* stack is not empty');
  assert(s.top() === 1, '* top is correct');

  assert(s.pop() === 1, '* pop produces correct value');
  assert(s.isEmpty() === true, '* stack is empty');
  assert(s.top() === void 0, '* top is correct');

  assert(s.pop() === void 0, '* pop produces correct value');
  assert(s.isEmpty() === true, '* stack is empty');
  assert(s.top() === void 0, '* top is correct');
  assert(true, '- End: Stack Tests - \n');

  /* 
   * Queue
  */
  assert(true, '- Start: Queue Tests - \n');
  var q = _ds.queue();
  assert(q.isEmpty() === true, '* queue is empty');
  assert(q.peek() === void 0, '* peek is correct');

  q.enqueue(1);
  assert(q.isEmpty() === false, '* queue is not empty after enqueue');
  assert(q.peek() === 1, '* peek produces correct value');

  q.enqueue(2);
  assert(q.isEmpty() === false, '* queue is not empty after enqueue');
  assert(q.peek() === 1, '* peek produces correct value');

  assert(q.dequeue() === 1, '* dequeue produces correct value');
  assert(q.isEmpty() === false, '* queue is not empty');
  assert(q.peek() === 2, '* peek produces correct value');

  assert(q.dequeue() === 2, '* dequeue produces correct value');
  assert(q.isEmpty() === true, '* queue is empty');
  assert(q.peek() === void 0, '* peek produces correct value');

  assert(q.dequeue() === void 0, '* dequeue produces correct value');
  assert(q.isEmpty() === true, '* queue is empty');
  assert(q.peek() === void 0, '* peek produces correct value');
  assert(true, '- End: Queue Tests - \n');

  /* 
   * Tree
  */

  /* 
   * Binary Search Tree
  */
  assert(true, '- Start: tree Tests - \n');
  var bst = _ds.binarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(1);
  bst.insert(8);
  bst.insert(7);
  bst.insert(6);
  bst.insert(20);
  bst.insert(15);
  bst.insert(23);
  bst.insert(13);
  bst.insert(18);
  bst.insert(21);
  bst.insert(30);

  assert(true, '- After inserting values -');
  assert(bst.findMin() === 1, '* findMin is correct');
  assert(bst.findMax() === 30, '* findMax is correct');
  assert(bst.getHeight() === 4, '* getHeight is correct');

  assert(true, '- contains -');
  assert(bst.contains(10) === true, '* contains is correct');
  assert(bst.contains(2) === false, '* contains is correct');
  assert(bst.contains(-1) === false, '* contains is correct');
  assert(bst.contains(18) === true, '* contains is correct');
  assert(bst.contains(100) === false, '* contains is correct');

  assert(true, '- breadthFirstSearch -');
  _tt.breadthFirstSearch(bst.root);

  assert(true, '- depthFirstSearch: inorder -');
  _tt.depthFirstSearch(bst.root);

  assert(true, '- remove -');
  bst.remove(30);
  assert(bst.findMin() === 1, '* findMin is correct');
  assert(bst.findMax() === 23, '* findMax is correct');
  assert(bst.getHeight() === 4, '* getHeight is correct');

  bst.remove(100);
  assert(bst.findMin() === 1, '* findMin is correct');
  assert(bst.findMax() === 23, '* findMax is correct');
  assert(bst.getHeight() === 4, '* getHeight is correct');

  bst.remove(1);
  assert(bst.findMin() === 5, '* findMin is correct');
  assert(bst.findMax() === 23, '* findMax is correct');
  assert(bst.getHeight() === 4, '* getHeight is correct');

  bst.remove(8);
  assert(bst.findMin() === 5, '* findMin is correct');
  assert(bst.findMax() === 23, '* findMax is correct');
  assert(bst.getHeight() === 3, '* getHeight is correct');

  bst.remove(20);
  assert(bst.findMin() === 5, '* findMin is correct');
  assert(bst.findMax() === 23, '* findMax is correct');
  assert(bst.getHeight() === 3, '* getHeight is correct');
  assert(true, '- End: tree Tests - \n');

  /* 
   * Graph
  */


})(_ds);