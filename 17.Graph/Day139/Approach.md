# Notes for Day 139: BFS of graph

## Approach:

- Initialize a queue: Use a queue to process nodes in a FIFO manner.
- Mark nodes as visited: Maintain a visited array to avoid reprocessing the same node.
- Start from node 0:
- Push 0 to the queue.
- Mark 0 as visited.
- Process the queue:
- Pop a node from the queue.
- Add it to the result list.
- Push all its unvisited neighbors (in the given adjacency order) into the queue and mark them as visited.
- Continue until the queue is empty.
-  return the result

## Complexity

- Time Complexity: O(V+E), where V is the number of vertices and E is the number of edges.
- Space Complexity: O(V) for the visited array and recursion stack.
