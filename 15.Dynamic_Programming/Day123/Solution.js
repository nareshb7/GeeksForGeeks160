class Solution {
  isSubsetSum(arr, sum) {
    // code here
    let n = arr.length;
    let dp = new Array(n + 1).fill().map(() => Array(sum + 1).fill(false));

    for (let i = 0; i <= n; i++) dp[i][0] = true;

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
        if (arr[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
        }
      }
    }

    return dp[n][sum];
  }
}

// Subset Sum Problem

// Given an array of positive integers arr[] and a value sum, determine if there is a subset of arr[] with sum equal to given sum. 

// Examples:

// Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 9
// Output: true 
// Explanation: Here there exists a subset with target sum = 9, 4+3+2 = 9.
