# Notes for Day 112: Longest Common Subsequence

## Approach:

- Create a 2D DP table of size (m+1) x (n+1) where m and n are the lengths of s1 and s2.
- If- s1[i] === s2[j], we add 1 to dp[i-1][j-1].
- Otherwise, take the maximum of dp[i-1][j] and dp[i][j-1].
- The final value at dp[m][n] gives the length of the LCS

## Complexity

- Time Complexity: O(m\*n),
- Space Complexity: O(m\* n)
