class Solution {
  knapsack(W, val, wt) {
    // code here
    let n = val.length;
    let dp = new Array(n + 1).fill().map(() => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= W; w++) {
        if (wt[i - 1] > w) {
          dp[i][w] = dp[i - 1][w];
        } else {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            val[i - 1] + dp[i - 1][w - wt[i - 1]]
          );
        }
      }
    }

    return dp[n][W];
  }
}

// 0 - 1 Knapsack Problem

// Given n items, each with a specific weight and value, and a knapsack with a capacity of W, the task is to put the items in the knapsack such that the sum of weights of the items <= W and the sum of values associated with them is maximized.

// Note: You can either place an item entirely in the bag or leave it out entirely. Also, each item is available in single quantity.

// Examples :

// Input: W = 4, val[] = [1, 2, 3], wt[] = [4, 5, 1]
// Output: 3
// Explanation: Choose the last item, which weighs 1 unit and has a value of 3.
