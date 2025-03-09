# Notes for Day 115: Palindrome SubStrings

## Approach:

- A palindrome is a string that reads the same forward and backward.
- We can use the Expand Around Center method to count palindromic substrings efficiently.
- Iterate over each character in the string and treat it as a potential center.
- Expand outward from each center to check for valid palindromes of length ≥ 2.

## Complexity

- Time Complexity: O(n2),
- Space Complexity: O(1)
