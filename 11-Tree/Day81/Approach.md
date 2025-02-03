# Notes for Day 81: Height of Binary Tree

## Approach:

- The height of a binary tree is the number of edges on the longest path from the root to a leaf.
- If the tree is empty, return -1 (or 0 based on the convention).
- Otherwise, recursively compute the height of the left and right subtrees.
- The height of the current node is 1 + max(leftHeight, rightHeight).

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(h)
