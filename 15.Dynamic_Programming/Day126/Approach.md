# Notes for Day 126: Stock Buy and Sell – Max 2 Transactions Allowed

## Approach:

- Initialize firstBuy with Infinity (to find the minimum price).
- Initialize firstProfit, secondBuy, and secondProfit with 0.
- Traverse through prices:
- Update firstBuy to track the lowest price for the first purchase.
- Update firstProfit after selling once.
- Update secondBuy considering the profit from the first transaction.
- Update secondProfit to get the maximum profit after two transactions.

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(1)
