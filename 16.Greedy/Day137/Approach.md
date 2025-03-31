# Notes for Day 137: Maximize partitions in a String

## Approach:

- Step 1: First, we create an array last of size 26 (for lowercase letters) and store the last index of each character in the string.
- Step 2: We iterate through the string and track the rightmost index (curr) of the characters we’ve seen in the current partition.
- Step 3: If the current index matches curr, it means we have found a valid partition, so we increase the partition count and reset curr.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
