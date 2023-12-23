//Singly Linked List a data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null. A linked list is a collection of entities which are not stored in sequential order. Instead, each entity has a pointer to the next entity. Each entity, also referred to as a node, is composed of data and a reference (in other words, a link) to the next node in the sequence.

//piece of data - val
//reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //this is method for adding new node to the end of the Linked List
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      // this is for if linked list empty
      this.head = newNode;
      this.tail = this.head;
    } else {
      //this for if linked list not empty
      this.tail.next = newNode; //this is for add new node
      this.tail = newNode; //this is for reassign/redclare tail properti
    }
    this.length++;
    return this;
  }

  //removing node from end of the Linked List
  pop() {
    //this is for no node or empty and try to pop()
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    //this will loop to the next untul next null
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null; //this is for remove end node
    this.length--;

    //this is for if empty and set head and tail properties to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; //this is a node removed
  }

  //removing node from begining of the Linked List
  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head; //this for store value this.head
    this.head = currentHead.next; //this will be reassign this.head but currentHead still has old value
    this.length--;

    //this is for if empty and set head and tail properties to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  //adding new node from begining of the Linked List
  unshift(val) {
    var newNode = new Node(val);
    //this is for empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; //this add current head property be next property for newNode
      this.head = newNode; //reassign head property
    }

    this.length++;

    return this;
  }

  //Retriving a node by it's position in the Linked List
  get(index) {
    if (index < 0 || index >= this.length) return null;

    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  //changing the calue of a node based on it's position in the Linked list
  set(index, val) {
    //this using get method in above
    var foundNode = this.get(index);

    //this if index found
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  //Adding a node to the Linked List at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); //this use push because add in end position in Linked List and !! it will be converting value boolean (true or false)
    if (index === 0) return !!this.unshift(val); //this use unshift becasue add in begining position in Linked List

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next; //this save prev.next in variable because it will be gone if not like this
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  //removing a node from the Linked List a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);
    var removed = previousNode.next; //current index will remove
    previousNode.next = removed.next; //reassign previousNode.next with removed.next

    this.length--;
    return removed;
  }

  //Reversing the Linked List in place
  reverse() {
    //this is for swap head to tail and tail to head
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    var prev = null;

    //this will loop and set element reverse
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  //Print the Linked List in array
  print() {
    var arr = [];
    var current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

//instantiate class and assign next node
// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("Goodbye");

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list.unshift("Test"));
// console.log(list.get(1));

// console.log(list.set(0, "Hai"));

// console.log(list.insert(1, "Test Insert"));
// console.log(list.insert(-1, "Test Insert"));
// console.log(list.insert(100, "Test Insert"));

// console.log(list.remove(1));
// console.log(list.remove(1));

// console.log(list);
list.reverse();
list.print();
