// Merge two sorted arrays a[] and b[] with O(1) extra space.
// using Gap method of Shell sort
function mergeArrays(a, b) {
  let n = a.length;
  let m = b.length;
  let gap = Math.floor((n + m + 1) / 2);

  while (gap > 0) {
    let i = 0;
    let j = gap;

    while (j < n + m) {
      // If both pointers are in the first array a[]
      if (j < n && a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }

      // If first pointer is in a[] and
      // the second pointer is in b[]
      else if (i < n && j >= n && a[i] > b[j - n]) {
        [a[i], b[j - n]] = [b[j - n], a[i]];
      }

      // Both pointers are in the second array b
      else if (i >= n && b[i - n] > b[j - n]) {
        [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
      }
      i++;
      j++;
    }

    // After operating for gap of 1 break the loop
    if (gap === 1) break;

    // Calculate the next gap
    gap = Math.floor((gap + 1) / 2);
  }
}

// Merge Two Sorted Arrays Without Extra Space

// Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge both the arrays and rearrange the elements such that the smallest n
// elements are in a[] and the remaining m elements are in b[]. All elements in a[] and b[] should be in sorted order.

// Examples:

// Input: a[] = [2, 4, 7, 10], b[] = [2, 3]
// Output: a[] = [2, 2, 3, 4], b[] = [7, 10]
// Explanation: Combined sorted array = [2, 2, 3, 4, 7, 10], array a[] contains smallest 4 elements: 2, 2, 3 and 4, and array b[] contains remaining 2 elements: 7, 10.
