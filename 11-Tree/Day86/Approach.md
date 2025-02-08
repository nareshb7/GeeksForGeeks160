# Notes for Day 86: Tree Boundary Traversal

## Approach:

- Left Boundary: Traverse from root to the leftmost node, preferring the left child. Exclude leaf nodes.
- Leaf Nodes: Collect all leaf nodes using an in-order traversal.
- Reverse Right Boundary: Traverse from the rightmost leaf node up to the root, preferring the right child, and store it in reverse order.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
