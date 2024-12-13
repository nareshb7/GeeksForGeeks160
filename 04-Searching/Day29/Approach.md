# Notes for Day 29: Sorted and Rotated Minimum (Searching)

## Approach (binary search)

- As it is a rotated sorted array so we can use binary search;
- first find the mid index and check, Is it less than the previous value?
- If it is return mid value, because in rotated sorted array previous val is greater than curr val, then curr val is the min value;
- and adjust the boundaries by updating the hi, low pointers to find rotating part
- If mid value is greater than the low element then update low to mid +1, we can think stil mid is in increasing side;
- other wise update hi to mid-1;

## Complexity

- Time complexity: O(log n)
- Space complexity: O(1)
