class Solution {
  insertInterval(intervals, newInterval) {
    // Your code here
    const result = [];
    let i = 0;
    const n = intervals.length;

    // Step 1: Add all intervals that end before the new interval starts
    while (i < n && intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      i++;
    }

    // Step 2: Merge all overlapping intervals with the new interval
    while (i < n && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
    }
    result.push(newInterval);

    // Step 3: Add all intervals that start after the new interval ends
    while (i < n) {
      result.push(intervals[i]);
      i++;
    }

    return result;
  }
}


// Insert Interval

// Geek has an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the
// ith event and intervals is sorted in ascending order by starti. He wants to add a new interval newInterval= [newStart, newEnd] where
// newStart and newEnd represent the start and end of this interval.

// Help Geek to insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does
// not have any overlapping intervals (merge overlapping intervals if necessary).

// Examples:

// Input: intervals = [[1,3], [4,5], [6,7], [8,10]], newInterval = [5,6]
// Output: [[1,3], [4,7], [8,10]]
// Explanation: The newInterval [5,6] overlaps with [4,5] and [6,7].
