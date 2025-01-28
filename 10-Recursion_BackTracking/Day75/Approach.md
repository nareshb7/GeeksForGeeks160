# Notes for Day 75: Permutations of a String

## Approach:

- Sort the characters: Sorting helps identify duplicates. It ensures that duplicate characters are adjacent, simplifying the check to avoid repeated permutations.
- Backtracking:
- The algorithm explores all possibilities by recursively building the string one character at a time.
- Each character is added to the current path (path), and its used state is marked as true to avoid reusing it in the current permutation.
- After exploring, the character is removed (backtracking), and its state is reset.
- Skip duplicates: If two characters are the same and the earlier one hasn't been used in the current recursion, skip the current iteration.
- Store results in a Set: Using a Set ensures only unique permutations are added.

## Complexity

- Time Complexity: O(n \* n!)
- Space Complexity: O(n!)
