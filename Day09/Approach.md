# Notes for Day 08: Stock Buy and Sell – Max one Transaction Allowed (Array's)

## Approach

- We have to buy and sell only one time
- We will take two variables to track of `maxProfit` and `min`, take zero'th day price is the `min` price
- Use for loop to traverse the array in that check min price by comparing today price
- If today price is less than the min price, update min value
- Update the maxProfit by comparing today's profit with maxProfit
- Today's profit is nothing but the diff between curr day price and price
- return the maxProfit

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
