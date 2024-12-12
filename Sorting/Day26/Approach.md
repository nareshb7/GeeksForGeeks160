# Notes for Day 26: Non-Overlapping Intervals (Sorting)

## Approach

- Sort the intervals by their ending times. This ensures that the earliest finishing interval is prioritized for overlap checking.
- Iterate Through the Intervals:
- Keep track of the end of the last non-overlapping interval.
- If the current interval starts before the last interval's end, it overlaps. Increment the removal count.
- Otherwise, update the end to the current interval's end.
- Return the Removal Count: The count will indicate the minimum number of intervals to remove.

## Complexity

- Time complexity: O(n log n)
- Space complexity: O(1)
