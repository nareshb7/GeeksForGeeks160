# Notes for Day 121: Coin Change (Minimum Coins)

## Approach:

- We use Dynamic Programming (DP) with a bottom-up approach.
- Create a dp array of size sum + 1, initialized with Infinity (Infinity represents an impossible case).
- dp[0] = 0 (because zero coins are needed to make sum 0).
- For each coin, update the dp array for sums that can be formed by using that coin.
- The final result will be in dp[sum], if it's still Infinity, return -1.

## Complexity

- Time Complexity: O(n\* m),
- Space Complexity: O(n)
