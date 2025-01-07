# Notes for Day 54: Pair with given sum in a sorted array

## Approach: (Two Pointers)

- Use two pointers (left and right) to find the pairs,
- Use while loop to traverse the array,
- count the sum using two pointer indexes
- If sum is equal to the target add count
- If left and right values are equal calculate the combinations of indices where they appear
- If left and right values differ, count all possible pairs of these values
- Count caluclation: use c1 and c2 to track the frequencey of left and right elements
- return the count;

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
