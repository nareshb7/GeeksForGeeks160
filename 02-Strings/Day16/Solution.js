class Solution {
  missingNum(arr) {
    // code here
    let xor1 = 0;
    let xor2 = 0;
    let n = arr.length;

    for (let i = 1; i <= n + 1; i++) {
      xor1 ^= i;
    }

    for (let i = 0; i < n; i++) {
      xor2 ^= arr[i];
    }

    return xor1 ^ xor2;
  }
}

// Missing in Array

// You are given an array arr[] of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

// Examples:

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.
