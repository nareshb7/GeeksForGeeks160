# Notes for Day 148: Dijkstra Algorithm

## Approach: (DFS):

- Use an adjacency list to represent the graph.
- Use a min-heap (priority queue) to always pick the node with the current shortest distance.
- Initialize all distances to Infinity, except the source (set to 0).
- While the queue is not empty:
- Pop the node with the smallest distance.
- Relax all adjacent nodes.
- Return the distances array.

## Complexity

- Time Complexity: O(V + E)
- Space Complexity: O(V + E)
