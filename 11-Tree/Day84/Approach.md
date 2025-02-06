# Notes for Day 84: Construct Tree from Inorder & Preorder

## Approach:

- Identify Root: The first element of the preorder traversal is always the root of the tree.
- Find Root in Inorder: Locate this root element in the inorder array. The elements to the left of it form the left subtree, and the elements to the right form the right subtree.
- Recursive Construction: Recursively repeat this process for left and right subtrees using corresponding subarrays of inorder and preorder.
- Postorder Output: After constructing the tree, return the postorder traversal as output

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
