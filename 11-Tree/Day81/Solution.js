class Solution {
  /**
   * @param {Node} node
   * @returns {number}
   */

  height(node) {
      // code here
      if (node === null) return -1;
      
      return 1+ Math.max(this.height(node.left), this.height(node.right))
  }
}

// Height of Binary Tree

// Given a binary tree, find its height.

// The height of a tree is defined as the number of edges on the longest path from the root to a leaf node. A leaf node is a node that does not have any children.

// Examples:

// Input: root[] = [12, 8, 18, 5, 11] 
 
// Output: 2
// Explanation: One of the longest path from the root (node 12) goes through node 8 to node 5, which has 2 edges.