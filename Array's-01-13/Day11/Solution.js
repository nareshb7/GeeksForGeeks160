class Solution {
  maxProduct(arr) {
    // code here
    if (arr.length === 0) return 0;

    let maxProd = arr[0];
    let minProd = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];

      if (current < 0) {
        [maxProd, minProd] = [minProd, maxProd];
      }

      maxProd = Math.max(current, maxProd * current);
      minProd = Math.min(current, minProd * current);

      result = Math.max(result, maxProd);
    }

    return result;
  }
}

// Maximum Product Subarray

// Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr.

// Note: It is guaranteed that the output fits in a 32-bit integer.

// Examples

// Input: arr[] = [-2, 6, -3, -10, 0, 2]
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
