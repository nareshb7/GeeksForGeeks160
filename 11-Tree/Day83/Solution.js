class Solution {
  /**
   * @param {Node} node
   * @return {void}
   */
  // Function to convert a binary tree into its mirror tree.
  mirror(node) {
    // your code here
    if (!node) return null;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    this.mirror(node.left);
    this.mirror(node.right);

    return node;
  }
}

// Mirror Tree

// Given a binary tree, convert the binary tree to its Mirror tree.

// Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.

// Examples:

// Input: root[] = [1, 2, 3, N, N, 4]
// Output: [1, 3, 2, N, 4]
// Explanation:

// In the inverted tree, every non-leaf node has its left and right child interchanged.
