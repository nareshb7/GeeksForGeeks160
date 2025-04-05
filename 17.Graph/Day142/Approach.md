# Notes for Day 142: Find the number of islands

## Approach:

- Traverse the entire grid.
- Every time you find an unvisited 'L', it's the start of a new island → increase the count.
- From that cell, run DFS and mark all connected land cells as visited.
- Consider all 8 directions from a cell (horizontal, vertical, and diagonal).
- Use directions array to handle movement in all 8 directions.
- return the count

## Complexity

- Time Complexity: O(n \* m)
- Space Complexity: O(n \*m)
