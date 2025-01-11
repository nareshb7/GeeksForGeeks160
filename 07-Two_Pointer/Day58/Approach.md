# Notes for Day 58: Longest substring with distinct characters

## Approach:

- Initialize two pointers (start and end) to define the current window in the string. Also, maintain a hash map or set to store the characters in the current window.
- Expand the end pointer and check if the character at end is already in the set.
- If not, add the character to the set and update the maximum length of the substring.
- If yes, shrink the window from the start until the duplicate character is removed from the set.
- Continue expanding the end pointer until you process the entire string.
- The maximum length recorded during the process is the length of the longest substring with all distinct characters.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(k)
