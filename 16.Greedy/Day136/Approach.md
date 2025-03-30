# Notes for Day 136: Gas Station

## Approach:

- Check if a solution exists:
- If the total amount of gas available (sum(gas)) is less than the total cost required (sum(cost)), then it is impossible to complete the circuit, and we return -1.
- Finding the starting index: Initialize total_tank = 0 and current_tank = 0 to track the gas balance.
- Traverse each station and compute the difference gas[i] - cost[i].
- If at any station current_tank becomes negative, it means that this station and any station before it cannot be the starting point.
- Reset current_tank to 0 and set the next station as a potential starting station.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
