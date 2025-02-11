# Notes for Day 89: Check for BST

## Approach:

- Use a helper function: Create a recursive function checkIsValid(node, min, max).
- Base Case: If the current node is null, return true (an empty tree is a BST).
- Check BST Condition:
- The node's value should be greater than min.
- The node's value should be less than max.
- If it violates this condition, return false.
- Recursive Calls:
- Check the left subtree with an updated max value (max = node.data).
- Check the right subtree with an updated min value (min = node.data).
- Return the result: If both left and right subtrees are valid, return true; otherwise, return false.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(h)
