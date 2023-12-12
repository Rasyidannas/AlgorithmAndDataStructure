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

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());

console.log(list);
