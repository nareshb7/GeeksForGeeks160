# Notes for Day 157: Find Only Repetitive Element from 1 to n-1

## Approach:

- Initialize two variables:
- xorArr = 0 → To store XOR of all elements in the array.
- xorNatural = 0 → To store XOR of all numbers from 1 to n-1.
- XOR all elements in the array and store in xorArr.
- XOR all numbers from 1 to n-1 and store in xorNatural.
- Final Result = xorArr ^ xorNatural
- This cancels out all non-repeating elements.
- Only the repeating number will remain.

## Complexity

- Time: O(n)
- Space: O(1)
