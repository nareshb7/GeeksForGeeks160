# Notes for Day 62: Longest Subarray with Sum K

## Approach:

- Initialize Variables:
- Use a hash map prefixSumMap to store the first occurrence of each prefix sum.
- Set currentSum to 0 to track the running sum of the array.
- Set maxLength to 0 to store the length of the longest subarray.
- Iterate Over the Array:
- Add the current element to currentSum.
- Check if currentSum equals k. If yes, update maxLength to the current index + 1.
- If (currentSum - k) exists in prefixSumMap, it means there's a subarray ending at the current index with sum equal to k. Update maxLength if the length of this subarray is greater than the current maxLength.
- If currentSum is not already in prefixSumMap, store it with its index.
- Return maxLength

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
