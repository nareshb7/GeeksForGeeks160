# Notes for Day 69: Add Number Linked Lists

## Approach:

- Reverse both linked lists (num1 and num2) to facilitate addition from the least significant digit (i.e., rightmost).
- Use a helper function reverseList(head) to reverse a linked list.
- Initialize variables: Set up pointers for traversing the reversed linked lists.
- Maintain a carry variable initialized to 0.
- Create a curr pointer to store the result list.
- Traverse the reversed lists and perform addition:
- Iterate through both linked lists and the carry until all are processed.
- At each step, retrieve values from both lists (v1 from l1 and v2 from l2). If a list is exhausted, use 0 as the value.
- Compute the sum: sum=v1+v2+carry
- Update the carry for the next digit calculation: carry=sum/10
- Create a new node with the value sum % 10 and add it to the result list.
- Move to the next nodes: Advance the pointers of both linked lists if they are not null.
- Remove leading zeros: After constructing the sum linked list, check for leading zeros and remove them to ensure the result does not start with zero unless it's a single zero.
- Return the final result: Return the curr pointer, which holds the head of the result list

## Complexity

- Time Complexity: O(n+ m)
- Space Complexity: O(n+m)
