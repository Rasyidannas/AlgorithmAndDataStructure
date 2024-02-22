//Binary Heap is part of binary tree but have some rules:
/**
 * 1. Shape property: a binary heap is a complete binary tree; that is, all levels of the tree, except possibly
 * the last one (deepest) are completely filled, and, if the last level of the tree is not complete, the nodes of
 * that level are filled from left to right.
 *
 * 2. Heap property --> for find parent = (index - 1) / 2
 *    I. In a max heap, parent nodes are awayse larger than child node
 *    II. In a min heap, parent nodes are always smaller than child nodes
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // this will correct the parent always max/biggest/largest than child and this will save like traverseBreadthFirstSearch()
  bubbleUp() {
    let idx = this.values.length - 1; //this for get last index
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //this will get parent of element
      let parent = this.values[parentIdx];
      //this for stop when element less equel than parent element
      if (element <= parent) break;
      //this for swap element to parent element
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
//this will save according like traverseBreadthFirstSearch and max/biggest/largest will always be parents
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
