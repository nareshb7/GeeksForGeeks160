# Notes for Day 135: Job Sequencing Problem

## Approach:

- Pair Jobs: Create an array of jobs with their deadline and profit.
- Sort Jobs: Sort jobs in descending order of profit (higher profit jobs first).
- Find Maximum Deadline: Determine the maximum deadline from the given jobs.
- Use a Disjoint Set:
- Instead of iterating over all slots, use Find operation to get the latest available slot.
- If a job is placed at time t, update parent[t] = t - 1 to reflect the next available slot.
- Return the maximum jobs completed and the total profit.

## Complexity

- Time Complexity: O(nlogn)
- Space Complexity: O(n)
