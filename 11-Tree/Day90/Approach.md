# Notes for Day 90: k-th Smallest in BST

## Approach:

- Use in-order DFS traversal (since BST in-order traversal gives sorted order).
- Maintain a counter count to track the k-th smallest element.
- Stop the traversal early once we find the k-th smallest element, reducing unnecessary recursion

## Complexity

- Time Complexity: O(H+k)
- Space Complexity: O(H)
