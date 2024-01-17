//Queue is A queue is a collection of entities in which the entities are kept in First-In-First-Out (FIFO) order. In a FIFO data structure, the first element added to the queue is the first one removed
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //adding data from end
  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  //removing data from begining
  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return temp.value;
  }
}

const queue = new Queue();
queue.enqueue("Rasyid");
queue.enqueue("Coki");
queue.enqueue("Ciko");
console.log(queue.dequeue());
console.log(queue);
