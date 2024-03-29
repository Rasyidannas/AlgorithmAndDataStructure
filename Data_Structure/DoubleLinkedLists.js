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

  //Shifting is a removing node from the beginning of the Doubly Linked List
  shift() {
    if (this.length === 0) return undefined;

    var oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  //unshifting is adding a node to the begining of the Doubly Linked List
  unshift(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //getting is a accessing a node in a Doubly Linked List by it position
  get(index) {
    if (index < 0 || index >= this.length) return null;

    var count, current;

    if (index <= this.length / 2) {
      // console.log("Working From Start");
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      //this will be reverse loping/start from end, so from tail
      // console.log("Working From End");
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //set is replacing the value of a node to the in a Doubly Linked List
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  //insert is adding a node in a Dobly Linked List by a certian position
  insert(index, val) {
    if(index < 0 || index > this.length) return false;

    if(index === 0) return !!this.unshift(val);

    if(index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;

    this.length++;
    return true;
  }

  //remove is removing a node in a Doubly Linked List by a certain position
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;

    if(index === 0) return this.shift();

    if(index === this.length - 1) return this.pop();

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkdeList();
list.push(99);
list.push(100);
list.push(70);
list.push(50);
list.push(200);
// list.pop();
// list.shift();
// list.unshift(150);
// console.log(list.get(4));
// console.log(list.set(2, 30));
// console.log(list.set(10, 30));
// console.log(list.insert(5, 30));
console.log(list.remove(1));
console.log(list);
