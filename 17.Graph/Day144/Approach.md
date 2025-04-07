# Notes for Day 144: Directed Graph Cycle

## Approach: (DFS with recursion stack):

- Visited Array: To track all nodes that have been visited.
- RecStack Array: To track nodes currently in the recursive call stack (i.e., current path).
- For each unvisited node, do a DFS:
- Mark it visited and add it to the recursion stack.
- Recur for all its neighbors.
- If any neighbor is already in the recursion stack, a cycle is detected.
- After processing, remove the node from the recursion stack

## Complexity

- Time Complexity: O(V + E)
- Space Complexity: O(V + E)
