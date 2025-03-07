# Notes for Day 113: Longest Palindromic Subsequence

## Approach:

- Define dp[i][j] as the length of the longest palindromic subsequence in s[i:j].
- If s[i] === s[j], then dp[i][j] = 2 + dp[i+1][j-1] (both characters contribute to the LPS).
- If s[i] !== s[j], then dp[i][j] = max(dp[i+1][j], dp[i][j-1]) (either include s[i] or s[j] but not both).
- Base Case: A single character is always a palindrome of length 1 (dp[i][i] = 1).
- Fill the dp table diagonally and return dp[0][n-1], which represents the LPS of the entire string.

## Complexity

- Time Complexity: O(n2),
- Space Complexity: O(n2)
