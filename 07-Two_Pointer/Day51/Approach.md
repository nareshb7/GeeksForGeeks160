# Notes for Day 51: Count all triplets with given sum in sorted array

## Approach:

- Two-Pointer Technique: The outer loop fixes one element (arr[i]).
- The inner while loop uses two pointers (left and right) to find pairs that, with arr[i], add up to the target.
- Duplicate Handling: If the values at left and right are the same, calculate the combinations of indices where they appear.
- If left and right values differ, count all possible pairs of these values.
- Count Calculation: Use c1 and c2 to track the frequency of the elements at left and right.

## Complexity

- Time Complexity: O(n^ 2)
- Space Complexity: O(1)
