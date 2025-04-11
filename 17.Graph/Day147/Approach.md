# Notes for Day 147: Minimum cost to connect all houses in a city

## Approach (Prim’s Algorithm):

- Start with an arbitrary house.
- Use a min-heap (priority queue) to always pick the lowest cost edge to an unvisited house.
- Keep track of visited houses and total cost.
- Repeat until all houses are connected.

## Complexity

- Time Complexity: O(n\*\*2)
- Space Complexity: O(n)
