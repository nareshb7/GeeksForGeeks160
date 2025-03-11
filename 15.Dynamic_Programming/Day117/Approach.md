# Notes for Day 117: Ways to Reach the n'th Stair

## Approach:

- This problem follows the Fibonacci pattern, where the number of ways to reach the nth stair is the sum of the ways to reach (n-1) and (n-2) stairs.
- If n = 1, there is only one way: [1].
- If n = 2, there are two ways: [1, 1] and [2].
- If n = 3, there are three ways: [1,1,1], [1,2], [2,1].
- This leads to the recurrence relation: dp[n]=dp[n−1]+dp[n−2]
- where: dp[i] represents the number of ways to reach the ith stair

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(1)
