# Notes for Day 118: Min Cost Climbing Stairs

## Approach:

- Define DP State, Let dp[i] represent the minimum cost to reach step i.
- Base Case: You can start at cost[0] or cost[1], so:
- dp[0] = cost[0]
- dp[1] = cost[1]
- Transition Formula: To reach step i, you can come from i-1 or i-2: dp[i]=cost[i]+min(dp[i−1],dp[i−2])
- Result: The minimum cost to reach the top will be min(dp[n-1], dp[n-2])

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(n)
