# Notes for Day 13: Smallest Positive Missing Number (Array's)

## Approach

- First remove the non positive numbers;
- Check remaining arr length , if it's 0 return 1;
- Otherwise, loop through the remaining array check the curr value is increasing with the array or not ,
- If it's not return the curr value.

## Complexity

- Time complexity: O(nlogn)
- Space complexity: O(n)
