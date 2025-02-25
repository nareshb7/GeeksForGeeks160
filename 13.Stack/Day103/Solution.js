class Solution {
  getMaxArea(arr) {
    // code here
    let n = arr.length;

    let stack = [];
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);

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

    let maxArea = 0;

    for (let i = 0; i < n; i++) {
      let width = right[i] - left[i] - 1;
      maxArea = Math.max(maxArea, arr[i] * width);
    }

    return maxArea;
  }
}

// Histogram Max Rectangular Area

// You are given a histogram represented by an array arr, where each element of the array denotes the height of the bars in the histogram.
// All bars have the same width of 1 unit.

// Your task is to find the largest rectangular area possible in the given histogram, where the rectangle can be formed using a number of contiguous bars.

// Examples:

// Input: arr[] = [60, 20, 50, 40, 10, 50, 60]
// Largest-Rectangular-Area-in-a-Histogram
// Output: 100
// Explanation: We get the maximum by picking bars highlighted above in green (50, and 60).
// The area is computed (smallest height) * (no. of the picked bars) = 50 * 2 = 100
