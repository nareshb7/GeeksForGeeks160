# Notes for Day 57: Count distinct elements in every window

## Approach:

- Initialize a hash map for frequencies.
- Iterate through the first k elements of the array and populate the hash map.
- Record the size of the hash map for the first window.
- Slide the window: Remove the frequency of the element going out of the window. If its count becomes zero, remove it from the map.
- Add the frequency of the element coming into the window.
- Record the size of the hash map for the current window.
- Continue until the end of the array.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(k)
