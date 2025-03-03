# Notes for Day 109: Longest Bounded-Difference Subarray

## Approach:

- Use two deques:
- minDeque: To maintain the smallest element in the window.
- maxDeque: To maintain the largest element in the window.
- Maintain a sliding window with left and right pointers.

- Expand right:

- Push arr[right] into minDeque (maintaining non-decreasing order).
- Push arr[right] into maxDeque (maintaining non-increasing order).
- Check validity:

- If maxDeque.front() - minDeque.front() > x, shrink the window from left.
- Update the maximum valid window length.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
