class Solution {
  // Function to check whether a Binary Tree is BST or not.
  isBST(root) {
    // your code here
    const checkIsValid = (node, min, max) => {
      if (!node) return true;

      if (min >= node.data || node.data >= max) {
        return false;
      }

      return (
        checkIsValid(node.left, min, node.data) &&
        checkIsValid(node.right, node.data, max)
      );
    };

    return checkIsValid(root, -Infinity, Infinity);
  }
}

// Check for BST

// Given the root of a binary tree. Check whether it is a BST or not.
// Note: We are considering that BSTs can not contain duplicate Nodes.
// A BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Examples:

// Input: root = [2, 1, 3, N, N, N, 5]
// Output: true 
// Explanation: The left subtree of every node contains smaller keys and right subtree of every node contains greater keys. Hence, the tree is a BST.
