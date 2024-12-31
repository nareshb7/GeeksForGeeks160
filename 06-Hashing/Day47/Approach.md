# Notes for Day 47: Longest Consecutive Subsequence (Hashing)

## Approach: Hashing

- Use a set to store all elements of the array for O(1) lookups.
- Traverse through the array. For each element, check if it's the start of a sequence by verifying that there is no element num - 1 in the set.
- If it's the start of a sequence:
- Initialize a counter and check for consecutive numbers (num + 1, num + 2, ...) in the set.
- Keep counting the length of the sequence.
- Keep track of the maximum length of sequences encountered.
- Return the maximum length.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
