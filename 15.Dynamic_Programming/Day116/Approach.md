# Notes for Day 116: Edit Distance

## Approach:

- We use Bottom-Up Dynamic Programming with a 2D dp table where:
- dp[i][j] represents the minimum number of operations required to convert s1[0...i-1] to s2[0...j-1].
- Recurrence Relation: If s1[i-1] === s2[j-1]:
- → No operation needed, so dp[i][j] = dp[i-1][j-1].
- Otherwise, consider the three operations:
- Insert: dp[i][j] = 1 + dp[i][j-1]
- Remove: dp[i][j] = 1 + dp[i-1][j]
- Replace: dp[i][j] = 1 + dp[i-1][j-1]
- Take the minimum of these three values.

## Complexity

- Time Complexity: O(m\* n),
- Space Complexity: O(m\*n)
