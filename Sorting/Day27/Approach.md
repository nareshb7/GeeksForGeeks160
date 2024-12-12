# Notes for Day 27: Merge Two Sorted Arrays Without Extra Space (Sorting)

## Approach

- Iterate Through the First Array (a):
- For every element in a, check if it is greater than the smallest element in b.
- Swap if Necessary:
- If an element in a is greater than the first element of b, swap them.
- Re-sort the Second Array (b):
- After swapping, re-sort b to maintain its sorted order.
- Continue Until Both Arrays Are Sorted:
- Repeat the above steps for all elements in a.

## Complexity

- Time complexity: O(n \*m)
- Space complexity: O(1)
