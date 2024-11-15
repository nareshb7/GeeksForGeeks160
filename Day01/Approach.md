# Notes for Day 01: Nearly Sorted (Array)

## Approach

- We use `two pointers` to maintain `largest` and `second largest`
- By traversing the array we update the pointers if val is larger than large value we update large element to second large element and curr val to large element;
- After the completion of loop `return` the `second largest` value

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
