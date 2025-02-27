class Solution {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /* The method push to push element into the stack */
  push(x) {
    // code here
    this.stack.push(x);
    if (
      this.minStack.length == 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  /* The method pop which pop out the top element of the stack*/
  pop() {
    // code here
    if (this.stack.length === 0) return -1;

    let removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return removed;
  }

  // The method peek() which Returns top element of Stack
  peek() {
    // code here

    if (this.stack.length == 0) return -1;

    return this.stack[this.stack.length - 1];
  }

  /*The method getMin() which return the minimum element of the stack*/
  getMin() {
    // code here
    if (this.minStack.length === 0) return -1;

    return this.minStack[this.minStack.length - 1];
  }
}

// Get Min from Stack

// Given q queries, You task is to implement the following four functions for a stack:

// push(x) – Insert an integer x onto the stack.
// pop() – Remove the top element from the stack.
// peek() - Return the top element from the stack. If the stack is empty, return -1.
// getMin() – Retrieve the minimum element from the stack in O(1) time. If the stack is empty, return -1.
// Each query can be one of the following:

// 1 x : Push x onto the stack.
// 2 : Pop the top element from the stack.
// 3: Return the top element from the stack. If the stack is empty, return -1.
// 4: Return the minimum element from the stack.
// Examples:

// Input: q = 7, queries = [[1, 2], [1, 3], [3], [2], [4], [1, 1], [4]]
// Output: [3, 2, 1]
// Explanation:
// push(2): Stack is [2]
// push(3): Stack is [2, 3]
// peek(): Top element is 3
// pop(): Removes 3, stack is [2]
// getMin(): Minimum element is 2
// push(1): Stack is [2, 1]
// getMin(): Minimum element is 1
