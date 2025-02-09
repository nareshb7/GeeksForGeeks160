class Solution {
  // Function to return maximum path sum from any node in a tree.
  findMaxSum(root) {
    // your code here
    let maxSum = -Infinity;

    const dfs = (node) => {
      if (!node) return 0;

      const leftSum = Math.max(0, dfs(node.left));
      const rightSum = Math.max(0, dfs(node.right));

      const currentMax = node.data + leftSum + rightSum;

      maxSum = Math.max(currentMax, maxSum);

      return node.data + Math.max(leftSum, rightSum);
    };

    dfs(root);

    return maxSum;
  }
}

// Maximum path sum from any node

// Given a binary tree, the task is to find the maximum path sum. The path may start and end at any node in the tree.

// Examples:

// Input: root[] = [10, 2, 10, 20, 1, N, -25, N, N, N, N, 3, 4]
// Output: 42
