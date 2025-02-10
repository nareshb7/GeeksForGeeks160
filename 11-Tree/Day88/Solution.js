class Solution {
  sumK(root, K) {
    // code here
    let prefixSum = new Map();
    prefixSum.set(0, 1);

    const dfs = (node, currentSum, k, prefixSum) => {
      if (!node) return 0;

      currentSum += node.data;

      let count = prefixSum.get(currentSum - k) || 0;

      prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);

      count += dfs(node.left, currentSum, k, prefixSum);
      count += dfs(node.right, currentSum, k, prefixSum);

      prefixSum.set(currentSum, prefixSum.get(currentSum) - 1);

      return count;
    };

    return dfs(root, 0, K, prefixSum);
  }
}

// K Sum Paths

// Given a binary tree and an integer k, determine the number of downward-only paths where the sum of the node values in the path equals k. A path can start and end at any node within the tree but must always move downward (from parent to child).

// Examples:

// Input: k = 7
// 8 4 5 3 2 N 2 3 -2 N 1

// Your Output: 3
