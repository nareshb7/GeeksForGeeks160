# Notes for Day 114: Longest Palindrome in a String

## Approach:

- Step 1: Create a DP table, where dp[i][j] will be true if the substring s[i...j] is a palindrome.
- Step 2: Initialize all substrings of length 1 as palindromes (dp[i][i] = true).
- Step 3: Check for substrings of length 2 (dp[i][i+1] = true if s[i] === s[i+1]).
- Step 4: Expand for substrings of length 3 or more (dp[i][j] = true if s[i] === s[j] and dp[i+1][j-1] is true).
- Step 5: Track the starting index and max length of the longest palindrome found.

## Complexity

- Time Complexity: O(n2),
- Space Complexity: O(n2)
