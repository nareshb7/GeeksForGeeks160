# Notes for Day 145: Bridge edge in a graph

## Approach: (DFS):

- Perform DFS from vertex c, excluding the edge (c, d).
- If d is not reachable from c, then (c, d) is a bridge.
- Otherwise, it is not a bridge.

## Complexity

- Time Complexity: O(V + E)
- Space Complexity: O(V + E)
