class Solution {
  pushZerosToEnd(arr) {
    // code here
    let left = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0 && left === -1) {
        left = i;
      } else if (left !== -1 && arr[i] !== 0) {
        arr[left] = arr[i];
        arr[i] = 0;
        while (left < i) {
          if (arr[left] === 0) {
            break;
          }
          left++;
        }
      }
    }
  }
}

// Move All Zeroes to End

// Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements.
// Do the mentioned change in the array in place.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
