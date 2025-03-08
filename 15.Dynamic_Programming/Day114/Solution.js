class Solution {
  longestPalindrome(s) {
    // code here
    let n = s.length;

    if (n <= 1) return s;

    let dp = Array.from({ length: n }, () => Array(n).fill(false));

    let start = 0,
      maxLength = 1;
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }

    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        maxLength = 2;
      }
    }

    for (let len = 3; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        let j = i + len - 1;
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
          start = i;
          maxLength = len;
        }
      }
    }

    return s.substring(start, start + maxLength);
  }
}

// Longest Palindrome in a String

// Given a string s, your task is to find the longest palindromic substring within s.

// A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

// A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

// Note: If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring from left to right.

// Examples :

// Input: s = “forgeeksskeegfor”
// Output: “geeksskeeg”
// Explanation: There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. But the substring “geeksskeeg” is the longest among all.
