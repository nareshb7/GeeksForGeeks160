# Notes for Day 133: Minimum Platforms

## Approach:

- Sort both arrival (arr[]) and departure (dep[]) times.
- Use two pointers:
- One pointer traverses the arr[] (arrivals).
- Another pointer traverses the dep[] (departures).
- Use a counter to track the number of trains at the station at any given time:
- If a train arrives before the earliest departure, increment platform count.
- If a train departs, decrement platform count.
- The maximum value of the platform count at any moment gives the answer.

## Complexity

- Time Complexity: O(nlogn)
- Space Complexity: O(1)
