# Notes for Day 108: K Sized Subarray Maximum

## Approach:

- Using a Deque (Optimized Sliding Window Approach)
- Maintain a Deque to store indices of useful elements in the current window.
- Traverse the array:
- Remove elements from the back that are smaller than the current element (since they will never be the max).
- Add the current index to the deque.
- Remove the front element if it is out of the current window.
- Once the window size reaches k, add the front of the deque (max element) to the result.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(k)
