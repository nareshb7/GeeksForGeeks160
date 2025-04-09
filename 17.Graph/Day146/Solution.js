class Solution {
  articulationPoints(V, edges) {
    // code here
    const adj = Array.from({ length: V }, () => []);

    for (let [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    let time = 0;
    const disc = new Array(V).fill(-1);
    const low = Array(V).fill(-1);
    const visited = Array(V).fill(false);
    const parent = Array(V).fill(-1);
    const ap = Array(V).fill(false);

    const dfs = (u) => {
      visited[u] = true;
      disc[u] = low[u] = time++;
      let children = 0;

      for (let v of adj[u]) {
        if (!visited[v]) {
          parent[v] = u;
          children++;
          dfs(v);
          low[u] = Math.min(low[u], low[v]);

          if (parent[u] !== -1 && low[v] >= disc[u]) {
            ap[u] = true;
          }

          if (parent[u] == -1 && children > 1) {
            ap[u] = true;
          }
        } else if (v !== parent[u]) {
          low[u] = Math.min(low[u], disc[v]);
        }
      }
    };

    for (let i = 0; i < V; i++) {
      if (!visited[i]) dfs(i);
    }

    const result = [];
    for (let i = 0; i < V; i++) {
      if (ap[i]) result.push(i);
    }

    return result.length ? result : [-1];
  }
}

// Articulation Point - II

// You are given an undirected graph with V vertices and E edges. The graph is represented as a 2D array edges[][], where each element edges[i] = [u, v] indicates an undirected edge between vertices u and v.
// Your task is to return all the articulation points (or cut vertices) in the graph.
// An articulation point is a vertex whose removal, along with all its connected edges, increases the number of connected components in the graph.

// Note: The graph may be disconnected, i.e., it may consist of more than one connected component.
// If no such point exists, return {-1}.

// Examples :

// Input: V = 5, edges[][] = [[0, 1], [1, 4], [4, 3], [4, 2], [2, 3]]

// Output: [1, 4]
