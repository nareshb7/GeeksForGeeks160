class Solution {
  lis(arr) {
    // code here
    let n = arr.length;
    if (n == 0) return 0;

    let dp = new Array(n).fill(1);

    let maxLis = 1;

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }

      maxLis = Math.max(maxLis, dp[i]);
    }

    return maxLis;
  }
}

// Longest Increasing Subsequence

// Given an array arr[] of non-negative integers, the task is to find the length of the Longest Strictly Increasing Subsequence (LIS).

// A subsequence is strictly increasing if each element in the subsequence is strictly less than the next element.

// Examples:

// Input: arr[] = [5, 8, 3, 7, 9, 1]
// Output: 3
// Explanation: The longest strictly increasing subsequence could be [5, 7, 9], which has a length of 3.
