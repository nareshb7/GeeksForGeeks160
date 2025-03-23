class Solution {
  countWays(digits) {
      // code here
      if (digits[0] == "0") return 0;
      
      let n = digits.length;
      let dp = new Array(n+1).fill(0);
      dp[0] = 1;
      dp[1] = 1;
      
      
      for (let i=2; i<=n ; i++) {
          let oneDigit = parseInt(digits[i-1]);
          let twoDigit = parseInt(digits[i-2]+ digits[i-1]);
          
          if (oneDigit> 0) {
              dp[i] +=dp[i-1]
          }
          
          if (twoDigit >= 10 && twoDigit <= 26) {
              dp[i]+=dp[i-2]
          }
      }
      
      return dp[n]
  }
}

// Total Decoding Messages

// A message containing letters A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// You are given a string digits. You have to determine the total number of ways that message can be decoded.

// Examples:

// Input: digits = "123"
// Output: 3
// Explanation: "123" can be decoded as "ABC"(1, 2, 3), "LC"(12, 3) and "AW"(1, 23).