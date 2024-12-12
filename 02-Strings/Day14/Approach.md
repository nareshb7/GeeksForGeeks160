# Notes for Day 14: Implement Atoi (String's)

## Approach

- First remove the whitespaces;
- Take a variable's for min and max;
- Now check is it a positive val or negative if they mentioned particularly;
- Loop through the string if curr char is in the range of 0 to 9 add it to the num
- If char is not number break the loop;
- Now add the sign to num;
- If the val is larger than the max num return max;
- If the val is smaller than the min el return min;
- If not return the num;

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
