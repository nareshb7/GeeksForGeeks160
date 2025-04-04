# Notes for Day 141: Undirected Graph Cycle

## Approach:

- Create Adjacency List: Convert the edge list to an adjacency list for easier traversal.
- Initialize Visited Array
- Keep track of visited nodes using a visited[] array.
- Run DFS for Each Component
- For each unvisited node, perform DFS (to handle disconnected graphs).
- DFS Logic
- Mark current node as visited.
- For every adjacent node:
- If it's not visited, recursively call DFS.
- If it's already visited and not the parent, then a cycle is found.
- If Cycle Found → return true
- Otherwise, after traversing all, return false

## Complexity

- Time Complexity: O(V+E)
- Space Complexity: O(V+E)
