class Solution {
  maxProfit(prices, k) {
      // code here
      let n = prices.length;
      
      if (n== 0) return 0;
      
      if (k >= n/2) {
          let maxProfit =0;
          
          for (let i=1; i<n ; i++) {
              if (prices[i] > prices[i-1]) {
                  maxProfit+= prices[i]- prices[i-1]
              }
          }
          
          return maxProfit;
      }
      
      let dp = Array(k+1).fill().map(() => Array(n).fill(0))
      
      for (let i=1; i<=k ; i++) {
          let  maxDiff = -prices[0];
          
          for (let j = 1; j<n; j++) {
              dp[i][j] = Math.max(dp[i][j-1], prices[j]+maxDiff);
              maxDiff = Math.max(maxDiff, dp[i-1][j] - prices[j])
          }
      }
      
      
      return dp[k][n-1]
  }
}

// Stock Buy and Sell – Max K Transactions Allowed

// In the stock market, a person buys a stock and sells it on some future date. You are given an array prices[] representing stock prices on different days and a positive integer k, find out the maximum profit a person can make in at-most k transactions.

// A transaction consists of buying and subsequently selling a stock and new transaction can start only when the previous transaction has been completed.

// Examples :

// Input: prices[] = [10, 22, 5, 80], k = 2
// Output: 87
// Explaination:
// 1st transaction: Buy at 10 and sell at 22. 
// 2nd transaction : Buy at 5 and sell at 80.
// Total Profit will be 12 + 75 = 87.