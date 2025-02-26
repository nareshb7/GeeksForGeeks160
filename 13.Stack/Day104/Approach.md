# Notes for Day 104: Maximum of minimum for every window size

## Approach:

- Compute the Previous and Next Smaller Elements:
- Use monotonic stack to compute the index of the previous smaller element (left[]).
- Use monotonic stack again to compute the index of the next smaller element (right[]).
- The difference between these indices gives the window size where the current element is the minimum.
- Fill the Result Using Maximum of Minimums:
- Create an array res[] initialized with -inf values.
- Place each element at its valid window size index.
- Propagate the values backward to ensure the maximum of minimums.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
