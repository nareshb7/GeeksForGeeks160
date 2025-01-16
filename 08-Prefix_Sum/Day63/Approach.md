# Notes for Day 63: Largest subarray of 0's and 1's

## Approach:

- Transform the array: Replace all 0s in the array with -1. This transformation allows us to reduce the problem to finding the longest subarray with a sum of 0.
- Use a prefix sum with a hash map: Maintain a running sum (prefix_sum) as we traverse the array.
- Use a hash map to store the first occurrence of each prefix sum. If the same prefix sum is encountered again, it means the subarray between the two occurrences has a sum of 0.
- Calculate the maximum length: For each prefix sum, check if it exists in the hash map. If yes, calculate the length of the subarray and update the maximum length.
- Edge cases: If the array is empty, return 0.
- If no subarray with equal 0s and 1s exists, return 0

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
