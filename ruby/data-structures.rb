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
  def initialize
    @head = nil
    @tail = nil
  end

  def append_to_head(node)
    # modifies linked list to add node as head
  end

  def append_to_tail(node)
    # modifies linked list to add node as tail
  end

  def remove_from_head
    # modifies linked list by removing node from head and returning node
  end

  def remove_from_tail
    # modifies linked list by removing node from tail and returning node
  end

  def contains?(node)
    # returns true or false depending on whether linked list contains target node
  end

  def is_empty?
    # returns true or false depending on whether linked list contains any nodes
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
  end

  def pop
    # remove item in @storage at index @size - 1 and return the removed item
    # be sure to delete the item from @storage
  end

  def peek
    # return a reference to the value at @storage's @size - 1 index
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
    # increment @end value
  end

  def dequeue
    # remove item from @storage at index @start
    # increment @start value
  end
end

# Binary Search Tree
class Binary_Search_Tree
  def initialize
    @root = nil
  end

  def add(node)
    # add node to @root if @root is empty
    # else add node to end of previous node
  end

  def remove(node)
    # traverse through binary search tree and remove first occurence of target node
  end

  def contains?(node)
    # return true or false depending on whether binary search tree contains target node
  end

  def find_min_node
    # return the node with the minimum value
  end

  def find_max_node
    # return the node with the maximum value
  end

  def get_depth
    # return the depth or -1
  end

  def is_empty?
    @root == nil
  end

  def _add(start, node)

  end

  def _remove(start, node)

  end

  def _contains(start, node)

  end

  def _find_min_node(start)

  end

  def _find_max_node(start)

  end

  def _get_depth(start)

  end

  private :_add, :_remove, :_contains, :_find_min_node, :_find_max_node, :_get_depth
end


# Hash Table
class Hash_Table
  def initialize(size_limit)
    @storage    = []
    @size_limit = size_limit
  end

  def insert(key, value)
    # determine idx to add [key, value] within @storage
    # add new array into @storage or modify existing array with new value
  end

  def retrieve(key)
    # return value at key if it exists
    # else return nil
  end

  def remove(key)
    # look for key within @storage
    # if it exists, remove the [key, value] pair from @storage at specific idx and return [key, value] pair
    # else return nil
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