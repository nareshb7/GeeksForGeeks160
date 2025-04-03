# Notes for Day 140: Rotten Oranges

## Approach:

- Use a queue (BFS approach):
- Store all the initial rotten oranges (value = 2) in a queue with their positions.
- Also, count the total number of fresh oranges (value = 1).
- BFS Traversal: Process all rotten oranges level by level (each level = 1 unit of time).
- For each rotten orange, try to rot its adjacent fresh oranges (up, down, left, right).
- Reduce the count of fresh oranges.
- If fresh oranges remain after BFS completes, return -1 (not possible to rot all).
- Track Time: Use a time variable to track the minutes elapsed.
- If no fresh oranges remain after BFS, return time, else return -1

## Complexity

- Time Complexity: O(n *m)
- Space Complexity: O(n *m)
