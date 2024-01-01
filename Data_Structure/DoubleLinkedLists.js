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
}
