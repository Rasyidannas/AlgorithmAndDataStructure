class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //this for adding vertex/node/point
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

  //this for remove vertex and edges
  removeVertex(vertex) {
    //this for remove all edges
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }

  //Depth First Search is explore as far as possible down one branch before "backtracking". 
  //Depth First Search is an algorithm for traversing or searching a tree or graph data structures. The idea of the algorithm is to start at some specific node (or vertex) and explore as far as posiible along each branch before bactracking.
   depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    //this is invoke self function
    (function dfs(vertex){
      if(!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      
      adjacencyList[vertex];
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor)
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start]
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
      //console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
  
  //Breadth FIrst visit neighbors at current depth first!
  //Breadth First Search is an algorithm for traversing or searching tree or graph data structure. it start at some arbitrary vertex of a graph, and explores all of the neighbor vertices at the present depth prior to moving on to the nodes at the next depth level.
  breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
  }
} 

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
//console.log(g.depthFirstRecursive("A"))
//console.log(g.depthFirstIterative("A"))
console.log(g.breadthFirst("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
