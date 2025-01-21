# Notes for Day 68: Linked List Group Reverse

## Approach:

- Calculate Length: determine the length of the linked list
- Initialize Pointers:
- orgH (original head) and orgT (original tail) to track the new linked list being formed.
- tmpH (temporary head) and tmpT (temporary tail) to store the reversed sublist of size k.
- curr pointer is used to traverse through the linked list.
- Reversing Groups:
- While len > 0, process nodes in chunks of k.
- Reverse k nodes using an inner while loop: Detach each node and insert it at the head of the tmpH linked list.
- Adjust pointers for correct reversal order.
- Decrement i and len after processing each node.
- Connect Reversed Parts: If the orgH (final list's head) is null, initialize it with the reversed sublist tmpH.
- Otherwise, link the previously reversed group (orgT.next) with the new reversed group.
- Move the orgT pointer to the end of the newly reversed sublist.
- Handling Remaining Nodes: The loop ensures that even if the number of nodes isn't a perfect multiple of k, the remaining nodes get processed as a group and reversed.
- Finalizing the List: The last group's tail (orgT.next) is set to null to mark the end of the reversed list.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
