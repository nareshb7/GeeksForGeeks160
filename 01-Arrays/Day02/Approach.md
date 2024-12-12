# Notes for Day 02: Move All Zeroes to End (Array's)

## Approach

- We use `two pointers` to maintain `left` and `ith value`
- traverse the array to update the values in place
- Mainly we have `two` conditions
- `One` is if `curr val is 0 and left val is -1`, it means this is the first zero so we update left pointer to the zero value position;
- `Another` one is if `val is not equal to -1 and val not equal to zero` , it means we already found zero somewhere
- So, We have to swap the curr position value with left position and have to move left pointer to the next zero positon
- that we are doing by using `while` loop until the left pointer reaches the ith position, if `next zero found` we will `break` the loop,
- If `left` reaches ith pointer means it `reaches` the `current position` value , and curr is `zero` only

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
