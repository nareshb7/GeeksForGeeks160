# Notes for Day 153: Floyd Warshall

## Approach:

- Step 1: Understand the input
- You’re given a graph in the form of a matrix (dist[][]), where:
- dist[i][j] is the direct distance from node i to node j.
- If there is no direct path, it is set to a large value (like 10⁸, which means "infinity").
- Step 2: You want to find the shortest distance from every node to every other node.
- Step 3: Use every node as a middle point
- For every node k (like 0, 1, 2...),
- Try to go from i to j through k.
- Check if going i ➡️ k ➡️ j is shorter than the current known distance from i ➡️ j.
- Step 4: If the new path (i ➡️ k ➡️ j) is shorter than the current one (i ➡️ j), then update it.
- Step 5: Repeat this check for every pair of nodes (i, j) and for every middle node (k).
- Step 6: After trying all possibilities, the matrix will have the shortest distances between every pair of nodes.

## Complexity

- Time Complexity: O(n\*\* 3);
- Space Complexity: O(n);
