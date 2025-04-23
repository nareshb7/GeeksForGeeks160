# Notes for Day 160: Unique Number II

## Approach:

- XOR all the elements of the array.
- This gives xor = x ^ y (since all paired elements cancel out).
- Find any set bit in xor:
- This set bit tells us that x and y differ at that position.
- Let’s isolate the rightmost set bit (can be done using xor & -xor).
- Divide the array into two groups based on that bit:
- One group has numbers with that bit set.
- One group has numbers with that bit unset.
- Since x and y differ at that bit, they will be in different groups.
- XOR each group separately to find x and y.

## Complexity

- Time: O(n)
- Space: O(1)
