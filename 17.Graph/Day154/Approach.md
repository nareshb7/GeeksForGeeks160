# Notes for Day 154: Minimum Weight Cycle

## Approach:

- Initialize: Create two 2D arrays of size V x V:
- graph[i][j]: stores direct edge weights (set to INF initially).
- dist[i][j]: stores shortest path distances (initialized same as graph).
- Build the Graph: For each edge [u, v, w]:
- Update graph[u][v] and graph[v][u] to the minimum weight.
- Set the same value in dist[u][v] and dist[v][u].
- Loop through each node k (as intermediate node)
- For every k = 0 to V-1:
- Check for possible cycles involving node k
- For all pairs of nodes i, j where i < j < k:
- If: A shortest path exists between i and j → dist[i][j] !== INF
- Edge from i to k exists → graph[i][k] !== INF
- Edge from j to k exists → graph[k][j] !== INF
- Then: A cycle is found: i → j (existing path) → j → k → k → i
- Update ans = min(ans, cycleWeight)
- Update shortest paths using Floyd-Warshall
- For all pairs i, j: Update: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
- Final Result: If ans is still INF, return -1 (no cycle exists)

## Complexity

- Time Complexity: O(V\*\* 3);
- Space Complexity: O(v \*\* 2);
