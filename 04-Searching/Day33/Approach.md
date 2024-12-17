# Notes for Day 33: Aggressive Cows (Searching)

## Approach: Binary Search

- Sort the stalls array (if not already sorted).
- Use Binary Search on the distance (range of possible answers):
- Start with low = 1 and high = max(stalls) - min(stalls).
- For each candidate distance (mid):
- Check if it is possible to place all k cows such that the minimum distance between cows is at least mid.
- If possible, move to larger distances (low = mid + 1).
- Otherwise, reduce the distance (high = mid - 1).
- The largest valid distance is the answer.

## Complexity

- Time complexity: O(nlogn+nlog(max_dist))
- Space complexity: O(1)
