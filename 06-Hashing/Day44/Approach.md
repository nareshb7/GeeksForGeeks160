# Notes for Day 44: Find All Triplets with Zero Sum (Hashing)

## Approach: Hashing

- Understand the Problem: Find all triplets (i, j, k) where the sum of elements at those indices is 0 (arr[i] + arr[j] + arr[k] = 0).
- Ensure i < j < k and no duplicate triplets.
- Create a Map of Indices: Use a Map to store each value of the array as a key and all its indices as the value.
- Use Nested Loops for Two Elements (i and j):
- Iterate through the array for the first two elements of the triplet (i and j).
- For every pair, calculate the required third value (target = -(arr[i] + arr[j])).
- Check for the Third Element (k):
- Look up target in the map:
- If it exists, retrieve all indices where target appears.
- Ensure k > j to maintain the condition i < j < k.
- Store Triplets Without Duplicates:
- Convert the triplet [i, j, k] to a string (e.g., "0,1,2") and store it in a Set to avoid duplicates.
- Return the Result: Convert the Set of triplet strings back to an array of arrays.

## Complexity

- Time Complexity: O(n^2)
- Space Complexity: O(n^2)
