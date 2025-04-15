# Notes for Day 152: Bellman-Ford

## Approach: (DFS):

- Initialize a dist array with size V, all set to 108 (unreachable), and set dist[src] = 0.
- Perform V-1 iterations where we try to relax all edges.
- In the end, perform one more pass over all edges to check for negative weight cycles.
- If any distance gets updated, it means there's a negative cycle → return [-1].

## Complexity

- Time Complexity: O(V \* E);
- Space Complexity: O(V);
