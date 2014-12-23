(function (_ds) {

  var assert = function (expression, comment) {
    if (expression) {
      console.log('\n');
      console.log(comment);
    }
  };

  /* 
   * Linked List
  */
  assert(true, '- Start: linkedList Tests -');
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

  assert(true, '- End: linkedList Tests -');


  /* 
   * Stack
  */

  /* 
   * Queue
  */

  /* 
   * Tree
  */

  /* 
   * Binary Search Tree
  */

  /* 
   * Graph
  */


})(_ds);