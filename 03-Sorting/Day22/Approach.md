# Notes for Day 22: Find H-Index (Sorting)

## Approach

- Sort the array in descending order.
- take a variable `hIndex` with value 0.
- Iterate through the sorted array.
- For each paper i, check if the number of papers with at least i+1 citations is ≥i+1. The largest i+1 that satisfies the condition is the `hIndex`.
- retunr the hIndex

## Complexity

- Time complexity: O(n logn)
- Space complexity: O(1)
