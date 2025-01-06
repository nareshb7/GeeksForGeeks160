# Notes for Day 53: Sum Pair closest to target

## Approach: (Two Pointers)

- Sort the array: Start by sorting the array to make the two-pointer approach applicable.
- Use two pointers (left and right) starting at the beginning and end of the array.
- Calculate the sum of the elements at the two pointers and check how close it is to the target.
- If the sum is closer to the target than the previous closest, update the closest pair.
- If the sum equals the target, check the absolute difference condition to decide on the pair.
- If the sum is less than the target, increment the left pointer.
- If the sum is greater, decrement the right pointer.
- Edge case: If the array length is less than 2,return an empty array.

## Complexity

- Time Complexity: O(n log n)
- Space Complexity: O(1)
