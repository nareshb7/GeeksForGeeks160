# Notes for Day 12: Max Circular Subarray Sum (Array's)

## Approach


- kadaneVal is a function that computes either:
- Maximum subarray sum (type === "MAX")
- Minimum subarray sum (type === "MIN")
- It loops through the array and keeps track of the best subarray sum so far.
- Compute Total Sum: Add all elements in the array to get totalSum.

- Use kadaneVal to get:
- maxSubarraySum → Maximum subarray sum (non-circular case).
- minSubarraySum → Minimum subarray sum (used to compute the circular case).
- If all elements are negative, the result is the maximum element (handled by maxSubarraySum).

- Subtract the minimum subarray sum from the total sum (totalSum - minSubarraySum).
- This gives the maximum sum for the circular subarray.
- Return the larger of maxSubarraySum (non-circular) and the circular sum (totalSum - minSubarraySum).

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
