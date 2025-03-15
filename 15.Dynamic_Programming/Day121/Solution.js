class Solution {
  minCoins(coins, sum) {
    // your code here
    let dp = new Array(sum + 1).fill(Infinity);

    dp[0] = 0;

    for (let coin of coins) {
      for (let i = coin; i <= sum; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }

    return dp[sum] === Infinity ? -1 : dp[sum]
  }
}

// Coin Change (Minimum Coins)
// Difficulty: MediumAccuracy: 26.74%Submissions: 243K+Points: 4
// You are given an array coins[], where each element represents a coin of a different denomination, and a target value sum. You have an unlimited supply of each coin type {coins1, coins2, ..., coinsm}.

// Your task is to determine the minimum number of coins needed to obtain the target sum. If it is not possible to form the sum using the given coins, return -1.

// Examples:

// Input: coins[] = [25, 10, 5], sum = 30
// Output: 2
// Explanation: Minimum 2 coins needed, 25 and 5 