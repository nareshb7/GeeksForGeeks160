# Notes for Day 36: Spirally traversing a matrix (Matrix)

## Approach:

- Compute the minimum repetitions required to make the length of repeated s1 at least as large as s2.
- Append one more repetition and check again to handle overlaps.
- Use the indexOf function to check if s2 is a substring of the repeated s1.

## Complexity

- Time Complexity: O(m⋅n) — Each element is visited exactly once.
- Space Complexity: O(1) — No additional space other than the result array.
