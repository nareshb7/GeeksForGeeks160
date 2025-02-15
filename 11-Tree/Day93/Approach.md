# Notes for Day 93: Lowest Common Ancestor in a BST

## Approach:

- If both n1 and n2 are smaller than the current node, move to the left subtree.
- If both n1 and n2 are greater than the current node, move to the right subtree.
- Otherwise, the current node is the LCA.

## Complexity

- Time Complexity: O(h)
- Space Complexity: O(1)
