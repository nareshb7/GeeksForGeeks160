class Solution {
    cloneLinkedList(head) {
        let curr = head;
        // Insert clone node between nodes
        while (curr != null) {
            let copy = new Node(curr.data);
            copy.next = curr.next;
            curr.next = copy
            curr = copy.next
        }
        
        curr = head;
        // Update random pointer to the next node
        while (curr != null) {
            if (curr.random!= null) {
                curr.next.random = curr.random.next
            }
            curr = curr.next.next
        }
        
        curr = head;
        let copyH = head.next;
        // remove the old nodes
        while (curr != null) {
            let copy = curr.next;
            curr.next = copy.next;
            
            if (copy.next != null) {
                copy.next = copy.next.next
            }
            curr = curr.next
        }
        
        return copyH
    }
}

// Clone List with Next and Random

// You are given a special linked list with n nodes where each node has two pointers a next pointer that points to the next node of the singly linked list, and a random pointer that points to the random node of the linked list.

// Construct a copy of this linked list. The copy should consist of the same number of new nodes, where each new node has the value corresponding to its original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list, such that it also represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// Return the head of the copied linked list.

// NOTE : Original linked list should remain unchanged.

// Examples:

// Input: head = [[1, 3], [3, 3], [5, NULL], [9, 3]] 
      
// Output: head = [[1, 3], [3, 3], [5, NULL], [9, 3]] 
// Explanation: 
// Node 1 points to Node 2 as its NEXT and Node 3 as its RANDOM.
// Node 2 points to Node 3 as its NEXT and Node 3 as its RANDOM.
// Node 3 points to Node 4 as its NEXT and NULL as its RANDOM.
// Node 4 points to NULL as its NEXT and Node 3 as its RANDOM.