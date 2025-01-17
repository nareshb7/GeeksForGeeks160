# Notes for Day 64: Product array puzzle

## Approach:

- Prefix Product: Compute a prefix product array where prefix[i] is the product of all elements in the array from the start up to i-1.
- Suffix Product: Compute a suffix product array where suffix[i] is the product of all elements in the array from i+1 to the end.
- Result Array: For each index i, the product of all elements except arr[i] is prefix[i] * suffix[i].

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
