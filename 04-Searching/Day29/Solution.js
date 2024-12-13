class Solution {
  // Function to find the minimum element in a sorted and rotated array.
  findMin(arr) {
    // your code here
    const len = arr.length;
    let lo = 0, hi = len - 1;
    if (hi === 0) {
      return arr[lo];
    }
    if (arr[lo] < arr[hi]) {
      return arr[lo];
    }
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] > arr[mid + 1]) {
        return arr[mid + 1];
      }
      if (arr[mid - 1] > arr[mid]) {
        return arr[mid];
      }

      if (arr[mid] >= arr[lo]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return -1;
  }
}

// Sorted and Rotated Minimum

// A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it.

// Examples:

// Input: arr[] = [5, 6, 1, 2, 3, 4]
// Output: 1
// Explanation: 1 is the minimum element in the array.
