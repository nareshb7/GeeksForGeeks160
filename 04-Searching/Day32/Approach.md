# Notes for Day 32: K-th element of two Arrays (Searching)

## Approach: Binary Search

- Use two pointers to represent ranges in the arrays.
- At each step, decide how many elements to take from each array by comparing middle elements.
- Reduce the search space iteratively until K-th element is determined.

## Complexity

- Time complexity: O(log(min(n,m)))
- Space complexity: O(1)
