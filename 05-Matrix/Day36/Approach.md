# Notes for Day 36: Spirally traversing a matrix (Matrix)

## Approach:

- Compute the minimum repetitions required to make the length of repeated s1 at least as large as s2.
- Append one more repetition and check again to handle overlaps.
- Use the indexOf function to check if s2 is a substring of the repeated s1.

## Complexity

- Time Complexity: Constructing the repeated string and checking for substrings takes `O(k⋅n)`, where k is the number of repetitions and n is the length of s1.
- Space Complexity: The space used for the repeated string is `O(k⋅n)`
