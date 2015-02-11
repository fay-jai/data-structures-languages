class Singly_Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next  = nil
  end
end

class Doubly_Node < Singly_Node
  attr_accessor :prev

  def initialize(value)
    super
    @prev = nil
  end
end

class Binary_Search_Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left  = nil
    @right = nil
  end
end

# Singly Linked List
class Singly_Linked_List
  attr_reader :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  # modifies linked list to add node as head
  def append_to_head(node)
    # if linked list is empty
    if is_empty?
      # set head and tail to node
      @head = node
      @tail = node
    else
      # set new node's next value to current head
      node.next = @head
      # set new node as new head
      @head     = node
    end
  end

  # modifies linked list to add node as tail
  def append_to_tail(node)
    # if linked list is empty
    if is_empty?
      # set head and tail to node
      @head = node
      @tail = node
    else
      # set current tail's next value to node
      @tail.next = node
      # set node as new tail
      @tail      = node
    end
  end

  # modifies linked list by removing node from head and returning node
  def remove_from_head
    # if linked list is not empty
    if not is_empty?
      # save a reference to the head node
      remove = @head

      # if linked list only has one item
      if @head == @tail
        # set both head and tail to nil
        @head = nil
        @tail = nil
      else
        # set new head as current head's next value
        @head = @head.next
      end

      # set reference's next value to nil
      remove.next = nil
      # return saved node
      return remove
    end
  end

  # modifies linked list by removing node from tail and returning node
  def remove_from_tail
    # if linked list is not empty
    if not is_empty?
      # save reference to tail node
      remove = @tail

      # if linked list has one item
      if @head == @tail
        # set both head and tail to nil
        @head = nil
        @tail = nil
      else
        # set up a loop that starts at @head and stops at the node prior to @tail
        start = @head
        until start.next == @tail do
          start = start.next
        end
        # set that node as the new tail
        @tail      = start
        # point new tail's next value to nil
        @tail.next = nil
      end
      # return saved node
      return remove
    end
  end

  # returns true or false depending on whether linked list contains target node
  def contains?(node)
    # if linked list is empty
      # return false
    return false if is_empty?

    start = @head
    until start == nil do
      # set up a loop that starts at @head and compares each node with target node
      # if the two nodes are identically equal, return true
      return true if start == node
      start = start.next
    end
    # reaching here means that target node is not found in linked list, return false
    return false
  end

  # returns true or false depending on whether linked list contains any nodes
  def is_empty?
    @head == nil && @tail == nil
  end
end

# Doubly Linked List
class Doubly_Linked_List
  attr_reader :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  # modifies linked list to add node as head
  def append_to_head(node)
    if is_empty?
      @head = node
      @tail = node
    else
      node.next  = @head
      @head.prev = node
      @head      = node
    end
  end

  # modifies linked list to add node as tail
  def append_to_tail(node)
    if is_empty?
      @head = node
      @tail = node
    else
      node.prev  = @tail
      @tail.next = node
      @tail      = node
    end
  end

  # modifies linked list by removing node from head and returning node
  def remove_from_head
    if not is_empty?
      remove = @head

      if @head == @tail
        @head = nil
        @tail = nil
      else
        @head      = @head.next
        @head.prev = nil
      end

      remove.next = nil
      return remove
    end
  end

  # modifies linked list by removing node from tail and returning node
  def remove_from_tail
    if not is_empty?
      remove = @tail

      if @head == @tail
        @head = nil
        @tail = nil
      else
        @tail      = @tail.prev
        @tail.next = nil
      end

      remove.prev = nil
      return remove
    end
  end

  # returns true or false depending on whether linked list contains target node
  def contains?(node)
    return false if is_empty?

    start = @head
    until start == nil do
      return true if start == node
      start = start.next
    end

    return false
  end

  # returns true or false depending on whether linked list contains any nodes
  def is_empty?
    @head == nil && @tail == nil
  end
end

# Stack
class Stack
  def initialize
    @storage = {}
    @size    = 0
  end

  def push(value)
    # add value to @storage and increment @size
    @storage[ @size ] = value
    @size += 1

    return value
  end

  def pop
    if not is_empty?
      # remove item in @storage at index @size - 1 and return the removed item
      remove = @storage[ @size - 1 ]
      @storage.delete(@size - 1)
      @size -= 1

      return remove
    end

  end

  def peek
    # return a reference to the value at @storage's @size - 1 index
    @storage[ @size - 1 ]
  end

  def is_empty?
    # returns true or false depending on whether stack is empty
    @size == 0
  end
end


# Queue
class Queue
  def initialize
    @storage = {}
    @start   = 0
    @end     = 0
  end

  def enqueue(value)
    # add value to @storage at index @end
    @storage[ @end ] = value
    # increment @end value
    @end += 1

    return value
  end

  def dequeue
    if not is_empty?
      # remove item from @storage at index @start
      remove = @storage[ @start ]
      @storage.delete @start
      # increment @start value
      @start += 1

      return remove
    end
  end

  def top
    @storage[ @start ]
  end

  def is_empty?
    @start >= @end
  end
end

# Binary Search Tree
class Binary_Search_Tree
  attr_reader :root

  def initialize
    @root = nil
  end

  def add(node)
    # add node to @root if @root is empty
    if is_empty?
      @root = node
    else
      _add @root, node
    end

    node
  end

  def remove(node)
    # traverse through binary search tree and remove first occurence of target node
    return nil if is_empty?

    @root = _remove @root, node
    return @root
  end

  def contains?(node)
    # return true or false depending on whether binary search tree contains target node
    return false if is_empty?
    _contains? @root, node
  end

  def find_min_node
    # return the node with the minimum value
    return nil if is_empty?
    _find_min_node @root
  end

  def find_max_node
    # return the node with the maximum value
    return nil if is_empty?
    _find_max_node @root
  end

  def get_depth
    # return the depth or -1
    return -1 if is_empty?
    _get_depth(@root) - 1
  end

  def is_empty?
    @root == nil
  end

  def _add(start, node)
    if node.value <= start.value
      if start.left
        _add start.left, node
      else
        start.left = node
      end
    else
      if start.right
        _add start.right, node
      else
        start.right = node
      end
    end
  end

  def _remove(start, node)
    if start
      if node.value < start.value
        start.left = _remove start.left, node
      elsif node.value > start.value
        start.right = _remove start.right, node
      elsif start.left && start.right
        min_right = _find_min_node start.right
        start.value = min_right.value
        start.right = _remove start.right, min_right
      else
        start = start.left || start.right
      end
    end
    return start
  end

  def _contains?(start, node)
    return false if start == nil
    return true  if start == node
    return _contains? start.left, node if node.value <= start.value
    _contains? start.right, node
  end

  def _find_min_node(start)
    until start.left == nil do
      start = start.left
    end
    start
  end

  def _find_max_node(start)
    until start.right == nil do
      start = start.right
    end
    start
  end

  def _get_depth(start)
    return 0 if start == nil
    return 1 + [ _get_depth(start.left) , _get_depth(start.right) ].max
  end

  private :_add, :_remove, :_contains?, :_find_min_node, :_find_max_node, :_get_depth
end


# Hash Table
class Hash_Table
  def initialize(size_limit)
    @storage    = []
    @size_limit = size_limit
  end

  def insert(key, value)
    # determine idx to add [key, value] within @storage
    idx    = hash_function(key, @size_limit)
    bucket = @storage[ idx ] || []
    len    = bucket.length

    for i in 0...len do
      if bucket[ i ][ 0 ] == key
        bucket[i][1] = value
        return value
      end
    end

    # add new array into @storage or modify existing array with new value
    bucket.push( [key, value] )
    @storage[ idx ] = bucket
    return value
  end

  def retrieve(key)
    idx    = hash_function(key, @size_limit)
    bucket = @storage[ idx ] || []
    len    = bucket.length

    # return value at key if it exists
    for i in 0...len do
      if bucket[ i ][ 0 ] == key
        return bucket[i][1]
      end
    end

    return nil
  end

  def remove(key)
    idx    = hash_function(key, @size_limit)
    bucket = @storage[ idx ] || []
    len    = bucket.length

    for i in 0...len do
      # look for key within @storage
      if bucket[ i ][ 0 ] == key
        # if it exists, remove the [key, value] pair from @storage at specific idx and return [key, value] pair
        remove = bucket.slice!(i, 1)[0]
        return remove
      end
    end

    return nil
  end

  def hash_function(string, max)
    hash = 0

    string.each_char do |char|
      hash = (hash << 5) + hash + char.ord
      hash = hash & hash
      hash = hash.abs
    end

    hash % max
  end

  private :hash_function
end