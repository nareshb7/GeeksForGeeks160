class Solution {
  // Function to count inversions in the array.
  merge(arr, l, m, r) {
    let j = m + 1;
    let cnt = 0;
    for (let i = l; i <= m; i++) {
      while (j <= r && arr[i] > arr[j]) {
        j++;
      }
      cnt += j - (m + 1);
    }
    const needsSort = arr.slice(l, r + 1);
    needsSort.sort((a, b) => a - b);
    arr.splice(l, needsSort.length, ...needsSort);
    return cnt;
  }

  mergeSort(arr, left, right) {
    if (left >= right) {
      return 0;
    }
    let mid = Math.floor((left + right) / 2);

    let leftConversions = this.mergeSort(arr, left, mid);
    let rightConversions = this.mergeSort(arr, mid + 1, right);
    let m = this.merge(arr, left, mid, right);
    return leftConversions + rightConversions + m;
  }

  inversionCount(arr) { //
    // your code here
    return this.mergeSort(arr, 0, arr.length - 1);
  }
}

// Count Inversions

// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum.

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3)
