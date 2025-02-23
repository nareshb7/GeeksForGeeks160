# Notes for Day 101: Next Greater Element

## Approach:

- Initialize an empty stack and an output array nge[] with the same size as arr, filled with -1.
- Traverse the array from right to left.
- For each element arr[i]:
- Pop elements from the stack while the top of the stack is less than or equal to arr[i] (since they can't be the next greater element).
- If the stack is not empty, the top of the stack is the next greater element.
- Push arr[i] onto the stack.
- Return the output array.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
