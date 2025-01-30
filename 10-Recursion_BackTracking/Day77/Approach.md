# Notes for Day 77: N-Queen Problem

## Approach:

- Use Backtracking: Place queens one by one in each column.
- Move to the next column if placement is valid.
- If a valid placement isn't found, backtrack to the previous column.
- Use Boolean Arrays for Quick Validity Checks
- col[i] → Checks if column i is occupied.
- ndiag[currR + i] → Checks / diagonal (row + column).
- rdiag[currR - i + n - 1] → Checks \ diagonal (row - column).
- Base Case (All Queens Placed)
- If currR === n, store the current solution.
- Iterate Over Rows
- Try placing a queen in each row (0 to n-1).
- If valid, mark as occupied, place the next queen, then backtrack.
- Backtracking: If placing a queen doesn't lead to a solution, remove it and try another row.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
