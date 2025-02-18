class Solution {
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number}
   */
  kClosest(points, k) {
    // Your code here
    const maxHeap = new MaxHeap();

    for (let [x, y] of points) {
      let dist = x * x + y * y;

      maxHeap.push([x, y], dist);

      if (maxHeap.size() > k) {
        maxHeap.pop();
      }
    }

    return maxHeap.getHeap().map((entry) => entry.point);
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(point, dist) {
    this.heap.push({ point, dist });
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();

    return root;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  getHeap() {
    return this.heap;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex].dist >= this.heap[index].dist) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;

      if (
        leftChild < length &&
        this.heap[leftChild].dist > this.heap[largest].dist
      ) {
        largest = leftChild;
      }

      if (
        rightChild < length &&
        this.heap[rightChild].dist > this.heap[largest].dist
      ) {
        largest = rightChild;
      }

      if (index === largest) break;

      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];

      index = largest;
    }
  }
}

// K Closest Points to Origin

// Given an array of points where each point is represented as points[i] = [xi, yi] on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance, defined as:

// sqrt( (x2 - x1)2 + (y2 - y1)2 )

// Note: You can return the k closest points in any order, driver code will sort them before printing.

// Examples:

// Input: k = 2, points[] = [[1, 3], [-2, 2], [5, 8], [0, 1]]
// Output: [[-2, 2], [0, 1]]
// Explanation: The Euclidean distances from the origin are:
// Point (1, 3) = sqrt(10)
// Point (-2, 2) = sqrt(8)
// Point (5, 8) = sqrt(89)
// Point (0, 1) = sqrt(1)
// The two closest points to the origin are [-2, 2] and [0, 1]
