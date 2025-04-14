# Notes for Day 151: Alien Dictionary

## Approach: (DFS):

- Initialize graph and indegree map for all unique characters.
- Build edges by comparing adjacent words.
- Detect invalid input (e.g. abc before ab is invalid).
- Topological Sort using BFS (Kahn’s Algorithm).
- Return sorted order if valid, else "".

## Complexity

- Time Complexity: O(N \* L + C + E);
- Space Complexity: O(C + E);
