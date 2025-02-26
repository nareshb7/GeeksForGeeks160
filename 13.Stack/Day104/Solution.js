class Solution {
  maxOfMins(arr) {
    // code here
    let n = arr.length;
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);
    let stack = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }

      if (stack.length > 0) left[i] = stack[stack.length - 1];

      stack.push(i);
    }

    stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }

      if (stack.length > 0) right[i] = stack[stack.length - 1];

      stack.push(i);
    }

    let res = new Array(n + 1).fill(-Infinity);

    for (let i = 0; i < n; i++) {
      let windowSize = right[i] - left[i] - 1;
      res[windowSize] = Math.max(res[windowSize], arr[i]);
    }

    for (let i = n - 1; i >= 1; i--) {
      res[i] = Math.max(res[i], res[i + 1]);
    }

    return res.slice(1);
  }
}

// Maximum of minimum for every window size

// Given an array of integers arr[], the task is to find the maximum of the minimum values for every possible window size in the array, where the window size ranges from 1 to arr.size().

// More formally, for each window size k, determine the smallest element in all windows of size k, and then find the largest value among these minimums where 1<=k<=arr.size().

// Examples :

// Input: arr[] = [10, 20, 30, 50, 10, 70, 30]
// Output: [70, 30, 20, 10, 10, 10, 10]
// Explanation:
// 1. First element in output indicates maximum of minimums of all windows of size 1. Minimums of windows of size 1 are [10], [20], [30], [50], [10], [70] and [30]. Maximum of these minimums is 70.
// 2. Second element in output indicates maximum of minimums of all windows of size 2. Minimums of windows of size 2 are [10], [20], [30], [10], [10], and [30]. Maximum of these minimums is 30.
// 3. Third element in output indicates maximum of minimums of all windows of size 3. Minimums of windows of size 3 are [10], [20], [10], [10] and [10]. Maximum of these minimums is 20.
// Similarly other elements of output are computed.
