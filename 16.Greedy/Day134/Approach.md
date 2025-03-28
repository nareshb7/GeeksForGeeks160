# Notes for Day 134: Activity Selection

## Approach:

- Sort activities by their finish time – This ensures that we can accommodate the maximum number of non-overlapping activities.
- Select the first activity – Always select the activity that finishes first.
- Iterate through the rest of the activities:
- If the start time of the current activity is greater than or equal to the finish time of the last selected activity, select it.
- Continue until all activities are considered.
- return the count

## Complexity

- Time Complexity: O(nlogn)
- Space Complexity: O(n)
