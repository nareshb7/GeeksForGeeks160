class Solution {
  isBridge(V, edges, c, d) {
    // code here
    const adj = Array.from({ length: V }, () => []);

    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const dfs = (node, visited, blockedEdge) => {
      visited[node] = true;

      for (const neighbour of adj[node]) {
        if (
          (node === blockedEdge[0] && neighbour == blockedEdge[1]) ||
          (node === blockedEdge[1] && neighbour == blockedEdge[0])
        ) {
          continue;
        }
        if (!visited[neighbour]) {
          dfs(neighbour, visited, blockedEdge);
        }
      }
    };

    const visited = new Array(V).fill(false);
    dfs(c, visited, [c, d]);

    return !visited[d];
  }
}

// Bridge edge in a graph

// Given an undirected graph with V vertices numbered from 0 to V-1 and E edges, represented by 2d array edges[][], where edges[i]=[u,v] represents the edge between the vertices u and v. Determine whether a specific edge between two vertices (c, d) is a bridge.

// Note:

// An edge is called a bridge if removing it increases the number of connected components of the graph.
// if there’s only one path between c and d (which is the edge itself), then that edge is a bridge.
// Examples :

// Input: 0 -> 1 -> 2-> 3

// c = 1, d = 2
// Output: true
// Explanation: From the graph, we can clearly see that blocking the edge 1-2 will result in disconnection of the graph.
// Hence, it is a Bridge.
