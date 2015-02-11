class SinglyNode
  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next  = nil
  end
end

class DoublyNode < SinglyNode
  attr_accessor :prev

  def initialize(value)
    super
    @prev = nil
  end
end

# Singly Linked List
class SinglyLinkedList
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

# Doubly Linked List
class DoublyLinkedList
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


# Queue


# Binary Search Tree


# Hash Table