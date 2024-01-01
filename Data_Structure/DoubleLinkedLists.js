//Double Linked Lists (almost identical to Singly Linked Lists, except every node has another pointer, to the prevoius node!)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkdeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Adding a node to the end of the Doubly Linked List
  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //Removing a node from the end of the Doubly Linked List(can do it reverse/from back)
  pop() {
    if (!this.head) return undefined;

    var poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; //this will access end of Double Linked List
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkdeList();
list.push(99);
list.push(100);
// list.push(50);
list.pop();
console.log(list);
