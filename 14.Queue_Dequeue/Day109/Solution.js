class Solution {
  longestSubarray(arr, x) {
    // code here
    let left = 0,
      right = 0;
    let minQueue = [],
      maxQueue = [];
    let maxLength = 0,
      startIdx = 0;

    while (right < arr.length) {
      while (
        minQueue.length > 0 &&
        arr[minQueue[minQueue.length - 1]] > arr[right]
      ) {
        minQueue.pop();
      }
      minQueue.push(right);

      while (
        maxQueue.length > 0 &&
        arr[maxQueue[maxQueue.length - 1]] < arr[right]
      ) {
        maxQueue.pop();
      }
      maxQueue.push(right);

      while (arr[maxQueue[0]] - arr[minQueue[0]] > x) {
        left++;

        if (minQueue[0] < left) minQueue.shift();

        if (maxQueue[0] < left) maxQueue.shift();
      }

      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        startIdx = left;
      }
      right++;
    }
    return arr.slice(startIdx, startIdx + maxLength);
  }
}

// Longest Bounded-Difference Subarray

// Given an array of positive integers arr[] and a non-negative integer x, the task is to find the longest sub-array where the absolute difference between any two elements is not greater than x.
// If multiple such subarrays exist, return the one that starts at the smallest index.

// Examples:

// Input: arr[] = [8, 4, 2, 6, 7], x = 4
// Output: [4, 2, 6]
// Explanation: The sub-array described by index [1..3], i.e. [4, 2, 6] contains no such difference of two elements which is greater than 4.
