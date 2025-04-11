class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }
  pop() {
    if (this.heap.length == 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return top;
  }

  _heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);

      if (this.heap[parent][1] > this.heap[i][1]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else break;
    }
  }

  _heapifyDown() {
    let i = 0;
    let n = this.heap.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left][1] < this.heap[smallest][1])
        smallest = left;

      if (right < n && this.heap[right][1] < this.heap[smallest][1])
        smallest = right;

      if (smallest !== i) {
        [this.heap[smallest], this.heap[i]] = [
          this.heap[i],
          this.heap[smallest],
        ];
        i = smallest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// User function Template for javascript
class Solution {
  // Returns shortest distances from src to all other vertices
  dijkstra(V, edges, src) {
    // code here
    const adj = Array.from({ length: V }, () => []);

    for (const [u, v, w] of edges) {
      adj[u].push([v, w]);
      adj[v].push([u, w]);
    }

    const dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    const pq = new MinHeap();

    pq.push([src, 0]);

    while (!pq.isEmpty()) {
      const [node, curDist] = pq.pop();

      for (const [neighbour, weight] of adj[node]) {
        if (curDist + weight < dist[neighbour]) {
          dist[neighbour] = curDist + weight;
          pq.push([neighbour, dist[neighbour]]);
        }
      }
    }

    return dist;
  }
}

// Dijkstra Algorithm

// Given an undirected, weighted graph with V vertices numbered from 0 to V-1 and E edges, represented by 2d array edges[][], where edges[i]=[u, v, w] represents the edge between the nodes u and v having w edge weight.
// You have to find the shortest distance of all the vertices from the source vertex src, and return an array of integers where the ith element denotes the shortest distance between ith node and source vertex src.

// Note: The Graph is connected and doesn't contain any negative weight edge.

// Examples:

// Input: V = 3, edges[][] = [[0, 1, 1], [1, 2, 3], [0, 2, 6]], src = 2
// Output: [4, 3, 0]
// Explanation:

// Shortest Paths:
// For 2 to 0 minimum distance will be 4. By following path 2 -> 1 -> 0
// For 2 to 1 minimum distance will be 3. By following path 2 -> 1
// For 2 to 2 minimum distance will be 0. By following path 2 -> 2
