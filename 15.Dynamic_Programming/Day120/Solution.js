class Solution {
  count(coins, sum) {
    // code here
    let dp = new Array(sum + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
      for (let i = coin; i <= sum; i++) {
        dp[i] += dp[i - coin];
      }
    }

    return dp[sum];
  }
}

// Coin Change (Count Ways)

// Given an integer array coins[ ] representing different denominations of currency and an integer sum, find the number of ways you can make sum by using different combinations from coins[ ]. 
// Note: Assume that you have an infinite supply of each type of coin. Therefore, you can use any coin as many times as you want.
// Answers are guaranteed to fit into a 32-bit integer. 

// Examples:

// Input: coins[] = [1, 2, 3], sum = 4
// Output: 4
// Explanation: Four Possible ways are: [1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3].
