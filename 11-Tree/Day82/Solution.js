class Solution {
  /**
   * @param {Node} root
   * @returns {number}
   */
  diameter(root) {
    // Your code here
    let maxDiameter = 0;

    const dfs = (node) => {
      if (!node) return 0;

      const leftHeight = dfs(node.left);
      const rightHeight = dfs(node.right);

      maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

      return Math.max(leftHeight, rightHeight) + 1;
    };

    dfs(root);

    return maxDiameter;
  }
}

// Diameter of a Binary Tree

// Given a binary tree, the diameter (also known as the width) is defined as the number of edges on the longest path between two leaf nodes in the tree. This path may or may not pass through the root. Your task is to find the diameter of the tree.

// Examples:

// Input: root[] = [1, 2, 3]

// Output: 2
// Explanation: The longest path has 2 edges (node 2 -> node 1 -> node 3).
