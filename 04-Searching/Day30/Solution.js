class Solution {
  search(arr, key) {
      // code here
      let low = 0, high = arr.length - 1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === key) return mid;

      // Check if the left half is sorted
      if (arr[low] <= arr[mid]) {
          if (arr[low] <= key && key < arr[mid]) {
              high = mid - 1; // Search in the left half
          } else {
              low = mid + 1; // Search in the right half
          }
      }
      // Right half is sorted
      else {
          if (arr[mid] < key && key <= arr[high]) {
              low = mid + 1; // Search in the right half
          } else {
              high = mid - 1; // Search in the left half
          }
      }
  }

  return -1; // Target not found
  }
}

// Search in Rotated Sorted Array

// Given a sorted and rotated array arr[] of distinct elements, the task is to find the index of a target key. Return -1 if the key is not found.

// Examples :

// Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
// Output: 8
// Explanation: 3 is found at index 8.