# Notes for Day 56: Indexes of Subarray Sum

## Approach: (Two Pointers)

- Variables Initialization:
- start = 0: Starting index of the sliding window.
- end = 0: Ending index of the sliding window.
- sum = 0: Stores the current sum of the sliding window.
- n = arr.length: Total number of elements in the array.
- Sliding Window Technique:
- Iterate while start < n and end <= n:
- If sum > target:
- Remove arr[start] from sum (shrink the window from the left).
- Move start forward.
- Otherwise: Add arr[end] to sum (expand the window from the right).
- Move end forward.
- Check for Target: After adjusting the sum, if sum == target, return [start + 1, end].
start + 1 and end are used because the output requires 1-based indices.
- No Subarray Found: If the loop ends without finding the target sum, return [-1].

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
