class Solution {
  equalPartition(arr) {
    // your code here
    let sum = arr.reduce((sum, num) => sum + num, 0);

    if (sum % 2 !== 0) return false;

    let target = sum / 2;

    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of arr) {
      for (let j = target; j >= num; j--) {
        dp[j] = dp[j] || dp[j - num];
      }
    }

    return dp[target];
  }
}

// Partition Equal Subset Sum

// Given an array arr[], determine if it can be partitioned into two subsets such that the sum of elements in both parts is the same.

// Note: Each element must be in exactly one subset.

// Examples:

// Input: arr = [1, 5, 11, 5]
// Output: true
// Explanation: The two parts are [1, 5, 5] and [11].
