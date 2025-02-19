class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];

    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex].data <= this.heap[index].data) break;

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
      let smallest = index;

      if (
        leftChild < length &&
        this.heap[leftChild].data < this.heap[smallest].data
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < length &&
        this.heap[rightChild].data < this.heap[smallest].data
      ) {
        smallest = rightChild;
      }

      if (index === smallest) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }
}

class Solution {
  // Function to merge K sorted linked list.
  mergeKLists(arr) {
    let minHeap = new MinHeap();

    for (const list of arr) {
      if (list) minHeap.push(list);
    }

    let dummy = new Node(-1);
    let current = dummy;

    while (!minHeap.isEmpty()) {
      let smallestNode = minHeap.pop();

      current.next = smallestNode;
      current = current.next;

      if (smallestNode.next) {
        minHeap.push(smallestNode.next);
      }
    }
    return dummy.next;
  }
}

// Merge K sorted linked lists

// Given an array arr[] of n sorted linked lists of different sizes. The task is to merge them in such a way that after merging they will be a single sorted linked list, then return the head of the merged linked list.

// Examples:

// Input: arr[] = [1 -> 2 -> 3, 4 -> 5, 5 -> 6, 7 -> 8]
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 5 -> 6 -> 7 -> 8
// Explanation:
// The arr[] has 4 sorted linked list of size 3, 2, 2, 2.
// 1st list: 1 -> 2-> 3
// 2nd list: 4 -> 5
// 3rd list: 5 -> 6
// 4th list: 7 -> 8