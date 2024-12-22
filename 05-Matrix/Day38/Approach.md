# Notes for Day 38: Search in a Row-Column sorted matrix (Matrix)

## Approach:

- Start from the top-right corner of the matrix.
- Compare the current element with the target:
- If the current element equals the target, return the position.
- If the current element is greater than the target, move left to the previous column.
- If the current element is less than the target, move down to the next row.
- If you move out of bounds, the target is not in the matrix.

## Complexity

- Time Complexity: O(n + m), where n is the number of rows and m is the number of columns
- Space Complexity: O(1) (no extra space used).
