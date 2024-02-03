//////TREE//////
//Tree Traversal is how the algorithm traverse the node in tree
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Inserting is adding node
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    //for root not null
    var current = this.root;
    //this is make recursively or iteratively
    while (true) {
      //this is for same value
      if (value === current.value) return undefined;
      if (value < current.value) {
        //this is for left
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        //this is for right
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  //Finding is seach or find a node
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    //this will recursively or iteratively
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    //this is for value not found
    if (!found) return undefined;

    return current;
  }

  // Breadth First Search this is traverse horizontal
  traverseBreadthFirstSearch() {
    var node = this.root,
      data = [],
      queue = [];

    queue.push(node);

    //this will recursively
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree);
// console.log(tree.root.right);
// console.log(tree.root.left);
console.log(tree.traverseBreadthFirstSearch());
