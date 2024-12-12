// JavaScript program to minimum number of intervals required
// to be removed to make remaining intervals non-overlapping
// Using sorting by ending value

function minRemoval(intervals) {
  let cnt = 0;

  // Sort by minimum ending point
  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    // if there is an overlap increase the count
    if (intervals[i][0] < end) cnt++;
    // else increment the ending point
    else end = intervals[i][1];
  }

  // return the count
  return cnt;
}

const intervals = [[1, 2],[2, 3],[3, 5],[1, 4]];
console.log(minRemoval(intervals));

// Non-Overlapping Intervals

// Given a list of intervals with starting and ending values, the task is to find the minimum number of intervals that are required to be
// removed to make remaining intervals non-overlapping.

// Examples:

// Input: intervals[][] = [[1, 2], [2, 3], [3, 4], [1, 3]]
// Output: 1
// Explanation: Removal of [1, 3] makes the ranges non-overlapping.
