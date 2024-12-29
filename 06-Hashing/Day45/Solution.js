class Solution {
  intersectionWithDuplicates(a, b) {
    // code here

    const set = new Set(a);
    const result = new Set();

    for (const num of b) {
      if (set.has(num)) {
        result.add(num);
        set.delete(num);
      }
    }
    return Array.from(result);
  }
}

// Intersection of Two arrays with Duplicate Elements

// Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not have duplicate elements and the result should contain items in any order.

// Note: The driver code will sort the resulting array in increasing order before printing.

// Examples:

// Input: a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
// Output: [1, 3]
// Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements.
