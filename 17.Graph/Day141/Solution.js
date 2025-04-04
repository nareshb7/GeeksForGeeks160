class Solution {
  isCycle(V, edges) {
    // Code here
    let adj = Array.from({ length: V }, () => []);

    for (let [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const visited = new Array(V).fill(false);

    const dfs = (node, parent) => {
      visited[node] = true;

      for (const neighbour of adj[node]) {
        if (!visited[neighbour]) {
          if (dfs(neighbour, node)) return true;
        } else if (neighbour !== parent) {
          return true;
        }
      }

      return false;
    };

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (dfs(i, -1)) return true;
      }
    }

    return false;
  }
}

// Undirected Graph Cycle

// Given an undirected graph with V vertices and E edges, represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge between vertices u and v, determine whether the graph contains a cycle or not.

// Examples:

// Input: V = 4, E = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]]
// Output: true
// Explanation:

// 1 -> 2 -> 0 -> 1 is a cycle.
