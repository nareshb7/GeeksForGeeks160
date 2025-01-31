# Notes for Day 78: Solve the Sudoku

## Approach:

- Find an empty cell (represented by 0 in the matrix).
- Try placing numbers from 1 to 9, ensuring that the number is valid in the row, column, and 3×3 sub-grid.
- Recursively attempt to fill the rest of the board.
- If a placement leads to a dead end, backtrack and try the next valid number.
- Once the board is filled, return the solution.

## Complexity

- Time Complexity: O(9 \*\* n)
- Space Complexity: O(1)
