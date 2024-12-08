# Notes for Day 23: Overlapping Intervals (Sorting)

## Approach

- Sort the intervals based on their starting points. This helps in simplifying the merging process.
- Start with an empty list to store the merged intervals.
- Iterate Over Intervals:
- If the result array is empty or the current interval does not overlap with the last interval in the result array, append the current interval to the result.
- Otherwise, merge the current interval with the last interval in the result by updating the end time of the last interval.
- Return the Result Array.

## Complexity

- Time complexity: O(n logn)
- Space complexity: O(n)
