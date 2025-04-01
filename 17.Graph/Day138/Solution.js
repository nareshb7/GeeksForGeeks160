class Solution {
  // Function to return a list containing the DFS traversal of the graph.
  dfs(adj) {
    // code here
    let result = [];

    let visited = new Array(adj.length).fill(false);

    const traverse = (node) => {
      visited[node] = true;
      result.push(node);
      for (let neighbour of adj[node]) {
        if (!visited[neighbour]) {
          traverse(neighbour);
        }
      }
    };

    traverse(0);
    return result;
  }
}

// DFS of Graph

// Given a connected undirected graph represented by a 2-d adjacency list adj[][], where each adj[i] represents the list of vertices connected to vertex i. Perform a Depth First Search (DFS) traversal starting from vertex 0, visiting vertices from left to right as per the given adjacency list, and return a list containing the DFS traversal of the graph.

// Note: Do traverse in the same order as they are in the given adjacency list.

// Examples:

// Input: adj[][] = [[2, 3, 1], [0], [0, 4], [0], [2]]

// Output: [0, 2, 4, 3, 1]
// Explanation: Starting from 0, the DFS traversal proceeds as follows:
// Visit 0 → Output: 0 
// Visit 2 (the first neighbor of 0) → Output: 0, 2 
// Visit 4 (the first neighbor of 2) → Output: 0, 2, 4 
// Backtrack to 2, then backtrack to 0, and visit 3 → Output: 0, 2, 4, 3 
// Finally, backtrack to 0 and visit 1 → Final Output: 0, 2, 4, 3, 1
