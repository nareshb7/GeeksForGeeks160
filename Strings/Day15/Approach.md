# Notes for Day 15: Add Binary String (String's)

## Approach

- Addition using Carry:Start from the end of both strings and add digits one by one.
- Maintain a carry for sums greater than or equal to 2.
- Append the result to a string (or use a list for efficiency).
- Handling Different Lengths:
- If one string is shorter, pad it with zeros on the left.
- If there's a leftover carry after processing all digits, add it to the result.
- Reverse the Result: Since the addition starts from the least significant bit, reverse the final string to get the correct answer.

## Complexity

- Time complexity: O(n)
- Space complexity: O(n)
