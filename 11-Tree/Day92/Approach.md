# Notes for Day 91: Fixing Two Nodes of a BST

## Approach:

- Perform an in-order traversal to identify the misplaced nodes.
- If the BST is valid, elements should appear in sorted order during in-order traversal.
- Identify the two swapped nodes:
- The first misplaced node occurs when a node has a greater value than the next node.
- The second misplaced node appears later when another incorrect order is detected.
- Swap the values of these two nodes.
- Return 1 as only one swap operation is required.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(h)
