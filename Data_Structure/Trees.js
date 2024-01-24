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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.right.left = new Node(9);
console.log(tree);
