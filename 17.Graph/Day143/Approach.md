# Notes for Day 143: Topological sort

## Approach: (Kahn's Algorithm - BFS based)

- Initialize indegree array: Count the number of incoming edges (indegree) for each vertex.
- Queue initialization: Push all vertices with indegree 0 to the queue.
- Process the queue:
- Pop a vertex u, add it to the result list.
- For each neighbor v of u, decrease its indegree.
- If indegree of v becomes 0, push it into the queue.
- Repeat until queue is empty.
- If the result size is not equal to V, then the graph has a cycle

## Complexity

- Time Complexity: O(V + E)
- Space Complexity: O(V + E)
