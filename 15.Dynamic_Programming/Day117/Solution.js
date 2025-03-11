class Solution {
  countWays(n) {
    // code here
    if (n == 1) return 1;
    if (n == 2) return 2;

    let dp = new Array(n);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
  }
}

// Ways to Reach the n'th Stair

// There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Your task is to count the number of ways, the person can reach the top (order does matter).

// Examples:

// Input: n = 1
// Output: 1
// Explanation: There is only one way to climb 1 stair. 
