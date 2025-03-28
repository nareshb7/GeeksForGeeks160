class Solution {
  activitySelection(start, finish) {
    // code here.
    let n = start.length;

    let activities = [];

    for (let i = 0; i < n; i++) {
      activities.push([start[i], finish[i]]);
    }

    activities.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastFinishTime = -1;

    for (let i = 0; i < n; i++) {
      if (activities[i][0] > lastFinishTime) {
        count++;
        lastFinishTime = activities[i][1];
      }
    }

    return count;
  }
}

// Activity Selection

// You are given a set of activities, each with a start time and a finish time, represented by the arrays start[] and finish[], respectively. A single person can perform only one activity at a time, meaning no two activities can overlap. Your task is to determine the maximum number of activities that a person can complete in a day.

// Examples:

// Input: start[] = [1, 3, 0, 5, 8, 5], finish[] = [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: A person can perform at most four activities. The maximum set of activities that can be executed is {0, 1, 3, 4}
