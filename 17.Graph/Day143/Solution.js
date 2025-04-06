class Solution {
  topoSort(V, edges) {
      // code here
      const adj = Array.from({length: V}, () => []);
      const indegree = new Array(V).fill(0);
      
      for (let [u, v] of edges) {
          adj[u].push(v);
          indegree[v]++
      }
      
      const queue = [];
      const result =[];
      
      for (let i=0; i<V; i++) {
          if (indegree[i] == 0) {
              queue.push(i)
          }
      }
      
      while(queue.length > 0) {
          let node = queue.shift();
          result.push(node);
          
          for (const neighbour of adj[node]) {
              indegree[neighbour]--;
              if (indegree[neighbour] == 0) {
                  queue.push(neighbour)
              }
          }
          
      }
      
      return result.length === V ? result : [];
      
  }
}

// Topological sort

// Given a Directed Acyclic Graph (DAG) of V (0 to V-1) vertices and E edges represented as a 2D list of edges[][], where each entry edges[i] = [u, v] denotes an directed edge u -> v. Return topological sort for the given graph.

// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering.
// Note: As there are multiple Topological orders possible, you may return any of them. If your returned Topological sort is correct then the output will be true else false.

// Examples:

// Input: V = 4, E = 3, edges[][] = [[3, 0], [1, 0], [2, 0]]

// Output: true
// Explanation: The output true denotes that the order is valid. Few valid Topological orders for the given graph are:
// [3, 2, 1, 0]
// [1, 2, 3, 0]
// [2, 3, 1, 0]