# Notes for Day 49: Subarrays with sum K (Hashing)

## Approach: Hashing

- Maintain a prefix_sum that stores the cumulative sum while traversing the array.
- Use a hashmap freq to store the frequency of each prefix sum encountered so far.
- For every element in the array:
- Update prefix_sum by adding the current element.
- Check if prefix_sum - k exists in the hashmap. If yes, it means there are subarrays ending at the current index with sum 𝑘
- k. Add the frequency of prefix_sum - k to the result.
- Increment the frequency of prefix_sum in the hashmap.
- Return the total count of subarrays.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
