# Notes for Day 06: Majority Element II (Array's)

## Approach

- We need to find a candidate's list who got n/3 votes, so normally the possibility is 2 elements only
- For that we need to find those candidates who got more than 1/3 votes,
- Traverse the for loop and store the most voted 2 candidates
- Now, we need to check the most voted candidates got n/3 votes are not, if they get we will store in the res array
- return the array using sort because we need to return in an increasing order

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
