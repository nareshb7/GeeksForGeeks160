class Solution {
  maxOfSubarrays(arr, k) {
    // code here
    let n = arr.length;
    let result = [];
    let deque = [];

    for (let i = 0; i < n; i++) {
      if (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }

      while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
        deque.pop();
      }
      deque.push(i);

      if (i >= k - 1) {
        result.push(arr[deque[0]]);
      }
    }
    return result;
  }
}

// K Sized Subarray Maximum

// Given an array arr[] of integers and an integer k, your task is to find the maximum value for each contiguous subarray of size k. The output should be an array of maximum values corresponding to each contiguous subarray.

// Examples:

// Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6]
// Explanation:
// 1st contiguous subarray = [1 2 3] max = 3
// 2nd contiguous subarray = [2 3 1] max = 3
// 3rd contiguous subarray = [3 1 4] max = 4
// 4th contiguous subarray = [1 4 5] max = 5
// 5th contiguous subarray = [4 5 2] max = 5
// 6th contiguous subarray = [5 2 3] max = 5
// 7th contiguous subarray = [2 3 6] max = 6
