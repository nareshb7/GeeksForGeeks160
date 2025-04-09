# Notes for Day 146: Articulation Point - II

## Approach: (DFS):

- Build the Graph: Convert the edges[][] into an adjacency list adj[].
- Initialize Arrays:
- disc[]: Stores the discovery time of each node.
- low[]: The lowest discovery time reachable from the subtree.
- visited[]: Marks visited nodes.
- parent[]: Stores the parent of each node in DFS.
- ap[]: Boolean array to mark articulation points.
- Start DFS from Unvisited Nodes:
- For every unvisited node, start a DFS.
- Maintain a time counter to assign discovery times.
- During DFS Traversal:
- Mark the current node as visited.
- Set disc[u] = low[u] = time++.
- For each neighbor v of u:
- If v is not visited:
- Set parent[v] = u.
- Call DFS on v.
- After recursion, update low[u] = min(low[u], low[v]).
- Check two conditions for articulation:
- If u is not root and low[v] >= disc[u], then u is an articulation point.
- If u is root and has more than 1 child, it's an articulation point.
- If v is already visited and v != parent[u], then update low[u] = min(low[u], disc[v]).
- Collect Articulation Points:
- After DFS, collect all nodes where ap[i] == true.
- If none found, return [-1]

## Complexity

- Time Complexity: O(V + E)
- Space Complexity: O(V + E)
