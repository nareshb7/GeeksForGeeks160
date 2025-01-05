class Solution {
  countTriplets(arr, target) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
      let left = i + 1, right = n - 1;

      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];

        if (sum === target) {
          const e1 = arr[left], e2 = arr[right];
          let c1 = 0, c2 = 0;

          // Count occurrences of arr[left]
          while (left <= right && arr[left] === e1) {
            left++;
            c1++;
          }

          // Count occurrences of arr[right]
          while (left <= right && arr[right] === e2) {
            right--;
            c2++;
          }

          // If e1 == e2, we need to count combinations
          if (e1 === e2) {
            count += (c1 * (c1 - 1)) / 2; // Combinations of pairs
          } else {
            count += c1 * c2; // All possible pairs
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    return count;
  }
}

// Count all triplets with given sum in sorted array

// Given a sorted array arr[] and a target value, the task is to count triplets (i, j, k) of valid indices,
// such that arr[i] + arr[j] + arr[k] = target and i < j < k.

// Examples:

// Input: arr[] = [-3, -1, -1, 0, 1, 2], target = -2
// Output: 4
// Explanation: Two triplets that add up to -2 are:
// arr[0] + arr[3] + arr[4] = (-3) + 0 + (1) = -2
// arr[0] + arr[1] + arr[5] = (-3) + (-1) + (2) = -2
// arr[0] + arr[2] + arr[5] = (-3) + (-1) + (2) = -2
// arr[1] + arr[2] + arr[3] = (-1) + (-1) + (0) = -2
