# Notes for Day 91: Pair Sum in BST

## Approach:

- Use a HashSet: Store visited node values to check for the required complement (target - current node).
- DFS Traversal: Perform an in-order traversal to visit nodes in sorted order.
- Check for Pair: If (target - node value) exists in the set, return true; otherwise, add the node value to the set.
- Stop Early: As soon as a valid pair is found, stop further traversal for optimization.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
