# Notes for Day 82: Diameter of a Binary Tree

## Approach:

- The diameter is the longest path between any two leaf nodes in the tree.
- We use DFS (Postorder Traversal) to calculate the height of each node and track the maximum diameter encountered.
- At each node:
- Compute the left height and right height.
- Update the maximum diameter as left height + right height.
- Return the maximum diameter as the final result.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(h)
