# Notes for Day 119: 0 - 1 Knapsack Problem

## Approach:

- Create a 2D DP table where dp[i][j] represents the maximum value possible using the first i items and a knapsack of capacity j.
- If the weight of the current item is greater than j, we skip it.
- Otherwise, we take the maximum of:
- Skipping the item (dp[i-1][j]).
- Taking the item (val[i-1] + dp[i-1]j - wt[i-1]]).

## Complexity

- Time Complexity: O(n\* W),
- Space Complexity: O(n \* W)
