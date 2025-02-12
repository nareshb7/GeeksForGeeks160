class Solution {
  kthSmallest(root, k) {
    // code here
    let smallest = -1;
    let count = 0;

    const dfs = (node) => {
      if (!node || smallest != -1) return;

      dfs(node.left);

      count++;
      if (count === k) {
        smallest = node.data;
        return;
      }

      dfs(node.right);
    };

    dfs(root);

    return smallest;
  }
}

// k-th Smallest in BST

// Given a BST and an integer k, the task is to find the kth smallest element in the BST. If there is no kth smallest element present then return -1.

// Examples:

// Input: root = [2, 1, 3], k = 2

// Output: 2
// Explanation: 2 is the 2nd smallest element in the BST.
