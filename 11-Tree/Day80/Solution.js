class Solution {
  /**
   * @param {Node} node
   * @returns {number[][]}
   */
  levelOrder(root) {
    // Your code here
    const result = [];

    const queue = [root];

    while (queue.length > 0) {
      const len = queue.length;
      const currentLevel = [];
      for (let i = 0; i < len; i++) {
        const currentNode = queue.shift();
        currentLevel.push(currentNode.data);

        if (currentNode.left) queue.push(currentNode.left);

        if (currentNode.right) queue.push(currentNode.right);
      }

      result.push(currentLevel);
    }

    return result;
  }
}

// Level order traversal

// Given a root of a binary tree with n nodes, the task is to find its level order traversal. Level order traversal of a tree is breadth-first traversal for the tree.

// Examples:

// Input: root[] = [1, 2, 3]

// Output: [[1], [2, 3]]
