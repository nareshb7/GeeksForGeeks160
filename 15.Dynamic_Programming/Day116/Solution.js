class Solution {
  editDistance(s1, s2) {
    // code here
    let m = s1.length,
      n = s2.length;
    let dp = new Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }

    return dp[m][n];
  }
}

// Edit Distance

// Given two strings s1 and s2. Return the minimum number of operations required to convert s1 to s2.
// The possible operations are permitted:

// Insert a character at any position of the string.
// Remove any character from the string.
// Replace any character from the string with any other character.
// Examples:

// Input: s1 = "geek", s2 = "gesek"
// Output: 1
// Explanation: One operation is required, inserting 's' between two 'e' in s1.
