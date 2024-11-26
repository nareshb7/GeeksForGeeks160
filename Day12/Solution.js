class Solution {
  // Function to find maximum circular subarray sum.
  circularSubarraySum(arr) {
    // Helper function to find subarray sum using Kadane's algorithm
    const kadaneVal = (array, type) => {
      let end = array[0];
      let value = array[0];
      for (let i = 1; i < array.length; i++) {
        end =
          type == "MAX"
            ? Math.max(array[i], end + array[i])
            : Math.min(array[i], end + array[i]);
        value = type == "MAX" ? Math.max(value, end) : Math.min(value, end);
      }
      return value;
    };

    // Find the total sum of the array
    const totalSum = arr.reduce((sum, num) => sum + num, 0);

    // Find maximum and minimum subarray sums
    const maxSubarraySum = kadaneVal(arr, "MAX");
    const minSubarraySum = kadaneVal(arr, "MIN");

    // Handle the edge case where all elements are negative
    if (maxSubarraySum < 0) {
      return maxSubarraySum;
    }

    // Maximum circular subarray sum is the maximum of the two cases
    return Math.max(maxSubarraySum, totalSum - minSubarraySum);
  }
}

// Max Circular Subarray Sum

// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.

// Examples:

// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
