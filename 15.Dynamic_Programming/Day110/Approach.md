# Notes for Day 110: Longest Increasing Subsequence

## Approach:

- Create a dp array where dp[i] stores the length of LIS ending at index i.
- Initialize dp with 1 because every element itself is a subsequence of length 1.
- Iterate over the array, and for each arr[i], check all previous elements arr[j] (where j < i).
- If arr[j] < arr[i], update dp[i] as dp[i] = max(dp[i], dp[j] + 1).
- The answer will be the maximum value in dp.

## Complexity

- Time Complexity: O(n2)
- Space Complexity: O(n)
