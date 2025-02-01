# Notes for Day 79: Word Search

## Approach:

- Starting Point: We iterate through each cell in the matrix and call the dfs function when the first character matches.
- DFS Details:
- Base Case: If the current index equals the word length, we've successfully found the word.
- Boundary Conditions: Check if indices are out of bounds or if the current character doesn't match.
- Marking Visited Cells: We replace the current cell's value with '#' to mark it visited, preventing re-visits.
- Backtracking: After the DFS call, we restore the cell's original value to explore other possible paths.

## Complexity

- Time Complexity: O(n *m * L**4)
- Space Complexity: O(L)
