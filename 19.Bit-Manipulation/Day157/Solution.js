class Solution {
  findDuplicate(arr) {
    // code here
    let xorArr = 0;
    let xorNatural = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      xorArr ^= arr[i];
    }

    for (let i = 1; i <= n - 1; i++) {
      xorNatural ^= i;
    }

    return xorArr ^ xorNatural;
  }
}

// Find Only Repetitive Element from 1 to n-1

// Given an array arr[] of size n, filled with numbers from 1 to n-1 in random order. The array has only one repetitive element. Your task is to find the repetitive element.

// Note: It is guaranteed that there is a repeating element present in the array.

// Examples:

// Input: arr[] = [1, 3, 2, 3, 4]
// Output: 3
// Explanation: The number 3 is the only repeating element.
