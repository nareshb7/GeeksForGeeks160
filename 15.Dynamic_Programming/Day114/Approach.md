# Notes for Day 114: Longest Palindrome in a String

## Approach:

- Expand Around Center:
- A palindrome can have a single character center (odd length) or two adjacent characters as the center (even length).
- The function expandAroundCenter(s, left, right) expands outward while the characters at left and right are the same.
- This function returns the longest palindrome found starting from the given center.

- Iterating through the String:
- For each character i in s, we consider:
- Odd-length palindrome: Expand around center s[i]
- Even-length palindrome: Expand around center s[i] and s[i+1]
- The longest palindrome encountered is stored.

## Complexity

- Time Complexity: O(n2),
- Space Complexity: O(1)
