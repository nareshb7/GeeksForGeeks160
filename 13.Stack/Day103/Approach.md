# Notes for Day 103: Histogram Max Rectangular Area

## Approach:

- Find the nearest smaller element to the left (NSL):
- This tells us where a rectangle of a given height can start.
- Use a monotonic increasing stack to keep track of indices.
- Find the nearest smaller element to the right (NSR):
- This tells us where a rectangle of a given height can extend.
- Again, use a monotonic increasing stack, but traverse from right to left.
- Calculate width and area:
- Width of a rectangle at each index = NSR[i] - NSL[i] - 1
- Area = height[i] * width
- Keep track of the maximum area.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
