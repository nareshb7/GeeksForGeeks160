# Notes for Day 43: Count pairs with given sum (Hashing)

## Approach: Hashing

- Iterate through the array while maintaining a hash table to store elements.
- For each element `num`, calculate the complement: `complement = target - num  `
- Check if the complement `exists` in the hash table:
- If yes, `increment the count` variable with the complement value.
- `Add current variable` to the `hashMap` by incrementing the prev value or set to 1 if not exists,
- return the count;

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
