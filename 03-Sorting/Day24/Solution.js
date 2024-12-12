class Solution {
  // Function to Merge overlapping arr.
  mergeOverlap(arr) {
    // your code here
    // Step 1: Sort intervals based on the starting point
    arr.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize result array
    const result = [];

    for (let interval of arr) {
      // Step 3: Check for overlap with the last interval in the result
      if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
        // No overlap, add the interval to the result
        result.push(interval);
      } else {
        // Overlap, merge the intervals
        result[result.length - 1][1] = Math.max(
          result[result.length - 1][1],
          interval[1]
        );
      }
    }

    return result;
  }
}

// Overlapping Intervals

// Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

// Examples:

// Input: arr[][] = [[1,3],[2,4],[6,8],[9,10]]
// Output: [[1,4], [6,8], [9,10]]
// Explanation: In the given intervals we have only two overlapping intervals here, [1,3] and [2,4] which on merging
// will become [1,4]. Therefore we will return [[1,4], [6,8], [9,10]].
