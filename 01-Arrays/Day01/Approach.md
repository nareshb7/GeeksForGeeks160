# Notes for Day 01: Nearly Sorted (Array)

## Approach

- We use `two pointers` to maintain `largest` and `second largest`
- By traversing the array we update the pointers if `curr` val is `larger` than large value we `update large element` to second large element and curr val to large element;
- If val is `larger` than `second large` ele we `update` `second large` element to current val
- After the completion of loop `return` the `second largest` value

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
