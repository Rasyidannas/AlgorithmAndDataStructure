//////TREE//////
//Tree is defined as a collection of nodes (starting at the root node), where each node is a data structure consisting of a value and a list of references to nodes (the “children”), with the constraints that there are no duplicate references, and no references point to the root. These references are often referred to as edges.

//////Kind of Tree//
//Binary Tree is  is a tree in which each node has at most two children, which are referred to as the left child and the right child.
//////Kind of Binary Tree//////
//Binary Search Tree is a binary tree in which each node (except leaf nodes) satisfies the
// following rules:
// • all values of the right subtree of a node must be greater than the node value itself/parent,
// • all values of the left subtree of a node must be less than the node value itself/parent
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// console.log(tree);
// console.log(tree.root.right);
// console.log(tree.root.left);
console.log(tree.find(20));
