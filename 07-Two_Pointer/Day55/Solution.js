class Solution {
  // Function to count the number of possible triangles.
  countTriangles(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    let cnt = 0;
    for (let i = n - 1; i >= 2; i--) {
      let left = 0;
      let right = i - 1;
      while (k < j) {
        const sum = arr[left] + arr[right];

        if (sum > arr[i]) {
          cnt += right - left;
          right--;
        } else {
          left++;
        }
      }
    }

    return cnt;
  }
}

// Count the number of possible triangles

// Given an integer array arr[]. Find the number of triangles that can be formed with three different array elements as lengths of three sides of the triangle.

// A triangle with three given sides is only possible if sum of any two sides is always greater than the third side.

// Examples:

// Input: arr[] = [4, 6, 3, 7]
// Output: 3
// Explanation: There are three triangles possible [3, 4, 6], [4, 6, 7] and [3, 6, 7]. Note that [3, 4, 7] is not a possible triangle.
