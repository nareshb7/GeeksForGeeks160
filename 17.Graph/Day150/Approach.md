# Notes for Day 150: Account Merge

## Approach: (DFS):

- Build an adjacency list (graph) where emails are nodes and there’s an edge between emails in the same account.
- Map each email to its owner name using a dictionary.
- Use DFS or BFS to traverse the graph and find all connected components (emails belonging to the same person).
- Sort emails in each component and return them with the owner’s name.

## Complexity

- Time Complexity: O(n \*k);
- Space Complexity: O(n \* k);
