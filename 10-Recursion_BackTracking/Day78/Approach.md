# Notes for Day 78: Solve the Sudoku

## Approach:

- Find an empty cell → (0,2)
- Try placing 1-9 and check if valid.
- Recursively continue until the board is filled.
- If a number doesn’t fit, backtrack and try the next one.
- Return the filled board when done.

## Complexity

- Time Complexity: O(9 \*\* n)
- Space Complexity: O(1)
