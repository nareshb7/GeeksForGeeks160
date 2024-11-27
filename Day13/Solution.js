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

// Smallest Positive Missing Number

// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.
// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3
