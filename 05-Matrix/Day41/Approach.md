# Notes for Day 41: Set Matrix Zeroes (Matrix)

## Approach:

- Use the first row and first column of the matrix as markers to identify which rows and columns should be set to zero.
- Traverse the matrix, and for each zero element, mark the corresponding row and column by setting the elements in the first row and first column to zero.
- Use the markers to set the matrix elements to zero, excluding the first row and column initially.
- Finally, handle the first row and first column separately, based on their markers.

## Complexity

- Time Complexity: O(log (n \* m)), where n is the number of rows and m is the number of columns
- Space Complexity: O(1) (no extra space used).
