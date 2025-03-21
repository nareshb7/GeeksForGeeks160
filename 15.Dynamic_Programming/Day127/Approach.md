# Notes for Day 127: Stickler Thief

## Approach:

- Define State: Let dp[i] represent the maximum amount that can be looted up to the i-th house.
- Recurrence Relation:
- For each house i, the thief has two choices:
- Loot the current house: Add arr[i] to dp[i-2] (because adjacent houses can't be robbed).
- Skip the current house: Take dp[i-1] (maximum loot up to previous house).
- So, the formula becomes: dp[i]=max(dp[i−1],arr[i]+dp[i−2])
- Base Cases:
- dp[0] = arr[0] (If only one house exists, loot it).
- dp[1] = max(arr[0], arr[1]) (Choose the maximum of the first two houses).
- Optimized Space Complexity: Instead of maintaining a full dp array, we can use two variables (prev1 and prev2) to keep track of the last two computed values.

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(n)
