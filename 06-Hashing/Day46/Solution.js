class Solution {
  // Function to return the count of number of elements in the union of two arrays.
  findUnion(a, b) {
    // code here
    const set = new Set(a);

    for (const num of b) {
      if (!set.has(num)) {
        set.add(num);
      }
    }
    return set.size;
  }
}

// Union of Arrays with Duplicates

// Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays.

// The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.

// Note: Elements of a[] and b[] are not necessarily distinct.

// Examples

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3]
// Output: 5
// Explanation: Union set of both the arrays will be 1, 2, 3, 4 and 5. So count is 5.
