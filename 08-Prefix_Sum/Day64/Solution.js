class Solution {
  productExceptSelf(arr) {
    // code here
    const n = arr.length;
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);
    let result = new Array(n);

    for (let i = 1; i < n; i++) {
      prefix[i] = prefix[i - 1] * arr[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * arr[i + 1];
    }

    for (let i = 0; i < n; i++) {
      result[i] = prefix[i] * suffix[i];
    }
    return result;
  }
}

// Product array puzzle

// Given an array, arr[] construct a product array, res[] where each element in res[i] is the product of all elements in arr[] except arr[i]. Return this resultant array, res[].
// Note: Each element is res[] lies inside the 32-bit integer range.

// Examples:

// Input: arr[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]
// Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
// For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
// For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
// For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
// For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.
