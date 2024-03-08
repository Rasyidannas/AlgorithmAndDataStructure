////// GRAPHS //////
// A Graph is a collection of vertices and edges that connect all or some of those vertices together. A Graph may be directed or undirected. In a directed graph each edge has a direction (like a one-way street). You may access an end-node from a start-node but not the other way around. In undirected graphs the edges don’t have a specific direction (like a two-way street) and thus every two vertices that are connected together have access to each other.

// Graphs is A graph data structure consists of a finite (and possibily mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for  a directed graph.

////Type of Graphs////
// 1. Dericted Graphs is  a directed graph each edge has a direction (like a one-way street)
// 2. Undericted Graphs is a undirected graphs the edges don’t have a specific direction (like a two-way street) and thus every two vertices that are connected together have access to each other.
// 3. Weighted Graph is a graph where each edge has a weight associated with it. Depending on the context, the edge weight may represent different concepts like “distance”, “traffic”, “cost”, “resistance” and so on. So, it has two kind: Dericted Weighted Graphs and Undericted Weighted Graphs

////// Undericted Graphs //////
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //this for ading vertex/node/point
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  //this for make edge or connection and this is Graph Undericted Graph
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //this for remove edge or connection and this is Graph Undericted Graph
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
}

const graph = new Graph();
console.log(graph.addVertex("Tokyo"));
console.log(graph.addVertex("Dallas"));
console.log(graph.addVertex("Aspen"));
console.log(graph.addEdge("Dallas", "Tokyo"));
console.log(graph.addEdge("Dallas", "Aspen"));
console.log(graph);
console.log(graph.removeEdge("Dallas", "Aspen"));
console.log(graph);
