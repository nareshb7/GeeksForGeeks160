# Notes for Day 80: Level order traversal

## Approach:

- Initialize a Queue: Add the root node to the queue, intitalize a empty result array.
- While the queue is not empty:
- take an empty array to store the current level nodes
- take the queue length and iterate over it and store current node value in array
- Dequeue the front node and process it (print/store its value).
- Enqueue the left child of the dequeued node (if exists).
- Enqueue the right child of the dequeued node (if exists).
- after the loop push the current level array in to the result loop
- return the result array;

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
