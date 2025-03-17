# Notes for Day 123: Subset Sum Problem

## Approach:

- Create a dp[][] table where dp[i][j] is true if a subset with sum j can be formed using first i elements.
- Base case:
- dp[0][0] = true (empty subset sums to 0).
- dp[i][0] = true (sum 0 can always be achieved).
- dp[0][j] = false for all j > 0 (no elements, no sum).
- Transition Formula:
- If arr[i-1] > sum, copy the previous value: dp[i][j] = dp[i-1][j]
- Otherwise, check:
- Exclude element: dp[i-1][j]
- Include element: dp[i-1]j - arr[i-1]]
- If- either is true, set dp[i][j] = true.

## Complexity

- Time Complexity: O(n \* sum),
- Space Complexity: O(n \* sum)
