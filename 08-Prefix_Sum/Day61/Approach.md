# Notes for Day 61: Equilibrium Point

## Approach:

- Calculate the total sum of the array.
- Initialize a variable leftSum to 0. This variable will keep track of the sum of elements to the left of the current index.
- Iterate through the array. At each index:
- Subtract the current element from the total sum to get the rightSum (sum of elements to the right of the current index).
- Check if leftSum equals rightSum. If they are equal, return the current index as the equilibrium point.
- Add the current element to leftSum.
- If no equilibrium point is found during the iteration, return -1.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
