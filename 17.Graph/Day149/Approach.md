# Notes for Day 149: Flood fill Algorithm

## Approach: (DFS):

- Store the originalColor at the starting cell (sr, sc).
- If originalColor === newColor, there's nothing to change — return the image.
- Use DFS to visit and update all connected pixels with the same originalColor to newColor.
- Explore the 4 directions: up, down, left, right.

## Complexity

- Time Complexity: O(n);
- Space Complexity: O(n);
