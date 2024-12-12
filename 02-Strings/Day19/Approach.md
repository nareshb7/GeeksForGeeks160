# Notes for Day 19: Min Chars to Add for Palindrome (KMP-Algorithm) (String's)

## Approach

- Concatenate the string s, a separator #, and the reverse of s.
- Example: s = "abc" → concat = "abc#cba".
- Build LPS Array, LPS helps find the longest prefix of concat that matches its suffix. This prefix corresponds to the longest palindromic suffix in the original string s.
- Result: Subtract the length of the LPS (longest palindromic suffix) from the original string length to determine how many characters to add at the front.

## Complexity

- Time complexity: O(n)
- Space complexity: O(n)
