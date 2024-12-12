# Notes for Day 18: Search Pattern (KMP-Algorithm) (String's)

## Approach

- Build the LPS Array:
- This array helps to determine the next position to start matching after a mismatch.
- For example, if a mismatch occurs after a partial match, the algorithm uses the LPS array to know where in the pattern to resume matching.

- Search the Pattern in Text:
- Traverse the text and use the pattern for matching.
- When characters match, continue comparing.
- When characters do not match, use the LPS array to shift the pattern, instead of starting over from the next character in the text.

## Complexity

- Time complexity: O(n+m)
- Space complexity: O(n)
