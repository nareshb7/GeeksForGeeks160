# Notes for Day 87: Maximum path sum from any node

## Approach:

- Use DFS (Depth First Search) to traverse the tree.
- For each node:
- Compute the left subtree max path sum.
- Compute the right subtree max path sum.
- Consider four possibilities:
- The node itself.
- The node + left path.
- The node + right path.
- The node + left + right paths (forming a complete subtree).
- Up-date the global max sum at each node.
- Return the best single-path sum (either left or right added to the node) to continue the recursion

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
