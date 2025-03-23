# Notes for Day 129: Total Decoding Messages

## Approach:

- Base Cases: dp[0] = 1 (An empty string has one way to decode: do nothing.)
- If digits[0] == '0', return 0 (Leading zeros are invalid.)
- State Transition: If digits[i-1] is not '0', add dp[i-1] to dp[i] (consider single-digit decoding).
- If the two-digit number digits[i-2]digits[i-1] forms a valid encoding (between 10 and 26), add dp[i-2] to dp[i] (consider two-digit decoding).
- Final Answer: dp[n] (where n is the length of digits) gives the total ways

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(n)
