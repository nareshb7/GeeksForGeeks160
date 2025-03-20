class Solution {
  maxProfit(prices) {
    // code here
    let firstBuy = Infinity,
      firstProfit = 0;
    let secondBuy = Infinity,
      secondProfit = 0;

    for (let price of prices) {
      firstBuy = Math.min(firstBuy, price);
      firstProfit = Math.max(firstProfit, price - firstBuy);
      secondBuy = Math.min(secondBuy, price - firstProfit);
      secondProfit = Math.max(secondProfit, price - secondBuy);
    }

    return secondProfit;
  }
}

// Stock Buy and Sell – Max 2 Transactions Allowed

// In daily share trading, a trader buys shares and sells them on the same day. If the trader is allowed to make at most 2 transactions in a day, find out the maximum profit that a share trader could have made.

// You are given an array prices[] representing stock prices throughout the day. Note that the second transaction can only start after the first one is complete (buy->sell->buy->sell).

// Examples:

// Input: prices[] = [10, 22, 5, 75, 65, 80]
// Output: 87
// Explanation: 
// Trader will buy at 10 and sells at 22. 
// Profit earned in 1st transaction = 22 - 10 = 12. 
// Then he buys at 5 and sell at 80. 
// Profit earned in 2nd transaction = 80 - 5 = 75. 
// Total profit earned = 12 + 75 = 87. 
