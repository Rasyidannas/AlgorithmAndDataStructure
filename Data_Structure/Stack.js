//Stack is a LIFO (Last-in-First-Out) is the last element added to the stack will be the first element removed from the stack.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //adding from beginning
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  //removing from beginning
  pop() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp;
  }
}

const stack = new Stack();
stack.push("Rasyid");
stack.push("Ciko");
stack.push("Coki");
stack.pop();
console.log(stack);
