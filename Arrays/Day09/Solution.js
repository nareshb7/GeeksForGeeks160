class Solution {
  // Function to get the minimum difference between the heights.
  getMinDiff(arr, k) {
    // your code here
    const n = arr.length;
    if (n === 1) return 0;

    arr.sort((a, b) => a - b);

    let minDiff = arr[n - 1] - arr[0];

    for (let i = 0; i < n - 1; i++) {
      const currentMax = Math.max(arr[i] + k, arr[n - 1] - k);
      const currentMin = Math.min(arr[0] + k, arr[i + 1] - k);

      if (currentMin < 0) continue;

      minDiff = Math.min(minDiff, currentMax - currentMin);
    }

    return minDiff;
  }
}

// Minimize the Heights II

// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not
// contain any negative integers.

// Examples :

// Input: k = 2, arr[] = {1, 5, 8, 10}
// Output: 5
// Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.
