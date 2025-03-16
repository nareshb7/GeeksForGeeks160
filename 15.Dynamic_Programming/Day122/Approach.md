# Notes for Day 122: Minimum Jumps

## Approach:

- Initialize three variables:
- jumps: Tracks the minimum jumps needed.
- currEnd: The farthest index we can reach in the current jump.
- currFarthest: The farthest index we can reach overall.
- Iterate through the array:
- For each index i, update currFarthest as max(currFarthest, i + arr[i]).
- If we reach currEnd, increment jumps and update currEnd = currFarthest.
- Edge Cases:
- If arr[0] == 0 and length is greater than 1, return -1 (since we can't move).
- If the array has only one element, return 0 (already at the last position)

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(1)
