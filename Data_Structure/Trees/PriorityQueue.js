//Priority Queue is  a data type which is like a regular queue or stack data structure, but where additionally each element has a “priority” associated with it. In a priority queue, an element with high priority is served before an element with low priority (or vice versa depending on the queue setup).

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//this is priority using Binary Heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //this will add element from last element
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  // this will correct new element and then check parent always max/biggest/largest than child and this will save like traverseBreadthFirstSearch()
  bubbleUp() {
    let idx = this.values.length - 1; //this for get last index
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //this will get parent of element
      let parent = this.values[parentIdx];
      //this for stop when element less equel than parent element
      if (element.priority >= parent.priority) break;
      //this for swap element to parent element
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  //this for removing parent element/biggest element by low priority to high priority
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      //swap end to parent/fisrt element
      this.values[0] = end;

      this.sinkDown();
    }

    return min;
  }

  //this will correct parent element after deleted
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      //this 2 for know index childs of index [0]
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      //this for set swap value with index and check left and right elements
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      //this will break when all rightChild and leftChild is done
      if (swap === null) break;
      //this for swapping value
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in food", 3);

console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
