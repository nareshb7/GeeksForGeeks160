# Notes for Day 88: K Sum Paths

## Approach:

- Use a Hash Map (Prefix Sum Approach)
- Maintain a hashmap (prefixSum) to store the frequency of prefix sums encountered so far.
- At each node, calculate the current prefix sum.
- Check if there exists a previous prefix sum such that (currentSum - k) exists in the hashmap, which means a valid path exists.
- Recursively explore left and right subtrees.
- Backtrack after returning from a recursive call to avoid affecting other paths.
- Recursive Depth-First Search (DFS)
- Start from the root node.
- Update the prefix sum map.
- Explore left and right subtrees.
- Remove the current sum from the map when backtracking

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
