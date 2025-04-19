# Notes for Day 156: Maximum XOR of two numbers in an array

## Approach:

- Use a Trie to store binary bits of numbers.
- Each number is stored as a 32-bit binary.
- Each Trie node has only 2 children: one for bit 0 and one for bit 1.
- Create a Trie class with:
- insert(num) → to insert number bit-by-bit into the Trie.
- getMaxXOR(num) → to find the number in the Trie that gives maximum XOR with num.
- Insert the first number into the Trie.
- For every next number in the array:
- Use getMaxXOR(num) to find the maximum XOR it can form with an already inserted number.
- Update the result if this XOR is greater than current max.
- Insert the number into the Trie for future comparisons.
- Return the maximum XOR found.

## Complexity

- Time: O(32 \* N) → 32 for each bit, N for numbers.
- Space: O(32 \* N) → worst case if all numbers have unique prefixes.
