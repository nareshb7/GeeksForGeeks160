# Notes for Day 10: Kadane's algorithm (Array's)

## Approach

Initialize variables:

maxSoFar: Keeps track of the maximum sum encountered so far.
maxEndingHere: Keeps track of the maximum sum for the subarray ending at the current index.
Iterate through the array:

For each element, calculate whether to add it to the existing subarray (maxEndingHere + arr[i]) or start a new subarray (arr[i]).
Update maxSoFar to hold the maximum value between the current maxSoFar and maxEndingHere.
Return the result:

maxSoFar contains the maximum sum of any subarray in the array.

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
