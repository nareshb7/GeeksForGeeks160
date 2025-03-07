class Solution {
  longestPalinSubseq(s) {
    // code here
    let n = s.length;

    let dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
    }

    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        let j = i + len - 1;
        if (s[i] == s[j]) {
          dp[i][j] = 2 + dp[i + 1][j - 1];
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[0][n - 1];
  }
}

// Longest Palindromic Subsequence

// Given a string s, return the length of the longest palindromic subsequence.

// A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements.

// A palindromic sequence is a sequence that reads the same forward and backward.

// Examples:

// Input: s = "bbabcbcab"
// Output: 7
// Explanation: Subsequence "babcbab" is the longest subsequence which is also a palindrome.
