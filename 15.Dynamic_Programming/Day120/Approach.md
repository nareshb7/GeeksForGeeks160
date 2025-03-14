# Notes for Day 120: Coin Change (Count Ways)

## Approach:

- Initialize DP array:
- dp[0] = 1 (There's only one way to make sum 0, by choosing nothing)
- dp[i] = 0 for all other values initially.
- Iterate over each coin:
- For each coin, update dp[j] for all j >= coin, since we can use this coin multiple times.
- Transition Formula: dp[j] += dp[j - coin]
- This means that the number of ways to make j includes:
- The ways to make j without this coin.
- The ways to make j - coin, since we can use this coin.

## Complexity

- Time Complexity: O(n\* sum),
- Space Complexity: O(sum)
