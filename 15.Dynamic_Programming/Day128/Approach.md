# Notes for Day 128: Stickler Thief II

## Approach:

- Two Cases to Consider:
- Exclude the first house and solve the problem for the subarray [1, n-1].
- Exclude the last house and solve the problem for the subarray [0, n-2].
- Take the maximum of these two cases.
- Use the House Robber I (Linear DP) Approach
- Define dp[i] as the maximum amount that can be stolen up to the i-th house.
- Transition: dp[i] = max(dp[i-1], dp[i-2] + arr[i]) (either take the current house or skip it).
- Base cases:
- dp[0] = arr[0]
- dp[1] = max(arr[0], arr[1])
- Return the Maximum of Both Cases: max(rob_linear(arr, 0, n-2), rob_linear(arr, 1, n-1))

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(1)
