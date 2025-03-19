# Notes for Day 125: Stock Buy and Sell – Max K Transactions Allowed

## Approach:

- Create a 2D DP array dp[k+1][n], where n is the number of days.
- Base Case:
- If k == 0 (no transactions allowed), then dp[i][j] = 0.
- If j == 0 (only one day available), then dp[i][j] = 0 since we cannot sell without buying.
- Recurrence Relation:
- The formula for each transaction i at each day j: dp[i][j]=max(dp[i][j−1],prices[j]+maxDiff)
- where maxDiff keeps track of the maximum dp[i-1][m] - prices[m] seen so far (m is a previous day).
- Iterate through transactions and days, updating the dp table.
- The result will be in dp[k][n-1].

## Complexity

- Time Complexity: O(k \* n),
- Space Complexity: O(k \* n)
