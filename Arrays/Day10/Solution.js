function maxSubArraySum(arr) {
  let maxSoFar = arr[0]; // To store the maximum sum found so far
  let maxEndingHere = arr[0]; // To store the maximum sum ending at the current position

  for (let i = 1; i < arr.length; i++) {
      // Update maxEndingHere to include the current element or start fresh from the current element
      maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

      // Update maxSoFar if maxEndingHere is greater
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Kadane's algorithm

// Given an integer array arr[]. You need to find the maximum sum of a subarray.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.