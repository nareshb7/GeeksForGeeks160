class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, edges) {
    {
      // code here
      const adj = Array.from({ length: V }, () => []);

      for (const [u, v] of edges) {
        adj[u].push(v);
      }

      const visited = new Array(V).fill(false);
      const recStack = new Array(V).fill(false);

      const dfs = (node) => {
        visited[node] = true;
        recStack[node] = true;

        for (let neighbour of adj[node]) {
          if (!visited[neighbour]) {
            if (dfs(neighbour)) return true;
          } else if (recStack[neighbour]) {
            return true;
          }
        }

        recStack[node] = false;
        return false;
      };

      for (let i = 0; i < V; i++) {
        if (!visited[i]) {
          if (dfs(i)) return true;
        }
      }

      return false;
    }
  }
}

// Directed Graph Cycle

// Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
// The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from verticex u to v.

// Examples:

// Input: V = 4, edges[][] = [[0, 1], [1, 2], [2, 3], [3, 3]]

// Output: true
// Explanation: 3 -> 3 is a cycle
