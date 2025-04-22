# Notes for Day 159: Unique Number I

## Approach:

- Initialize a variable:unique = 0
- Start with 0 because XOR with 0 gives the number itself.
- Loop through each number in the array
- XOR each number with unique.
- If a number appears twice, it cancels itself (num ^ num = 0).
- The number that appears once will not get canceled.
- Return the result

## Complexity

- Time: O(n)
- Space: O(1)
