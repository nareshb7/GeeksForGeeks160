class Solution {
  // Function to find the smallest positive number missing from the array.
  missingNumber(arr) {
    let res = [];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
        res.push(arr[i]);
      }
    }
    if (res.length == 0) {
      return 1;
    }

    res.sort((a, b) => a - b);
    let curr = 1;
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== curr) {
        return curr;
      } else if (res[i + 1] !== curr) {
        // If next val is same we are not increasing our curr value;
        curr++;
      }
    }
    return curr;
  }
}

// T.C - O(n), S.C - O(1)
// function missingNumber(arr) {
//   // your code here
//   const n = arr.length;

//   // Step 1: Replace all negative numbers and zeros with a placeholder (n + 1)
//   for (let i = 0; i < n; i++) {
//       if (arr[i] <= 0) {
//           arr[i] = n + 1;
//       }
//   }

//   // Step 2: Mark indices corresponding to present numbers
//   for (let i = 0; i < n; i++) {
//       const val = Math.abs(arr[i]);
//       if (val <= n) {
//           arr[val - 1] = -Math.abs(arr[val - 1]); // Mark as negative
//       }
//   }

//   // Step 3: Find the first positive index
//   for (let i = 0; i < n; i++) {
//       if (arr[i] > 0) {
//           return i + 1; // Missing number
//       }
//   }

//   // If no missing number found, return n + 1
//   return n + 1;
// }

// Smallest Positive Missing Number

// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.
// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3
