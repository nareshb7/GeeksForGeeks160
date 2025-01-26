class Solution {
    // Function to remove a loop in the linked list.
    removeLoop(head) {
        // your code here
        let slow = head;
        let fast = head;
        
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                this.removeCycle(head, slow)
                return true
            }
        }
        return true
    }
    
    removeCycle(head, meetingPoint) {
        let start = head;
        
        while (start != meetingPoint) {
            start =start.next;
            meetingPoint = meetingPoint.next
        }
        
        let prev = meetingPoint;
        while (prev.next != meetingPoint) {
         prev =prev.next   
        }
        prev.next = null;
    }
}

// Remove loop in Linked List

// Given the head of a linked list that may contain a loop.  A loop means that the last node of the linked list is connected back to a node in the same list. The task is to remove the loop from the linked list (if it exists).

// Custom Input format:

// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

// The generated output will be true if there is no loop in list and other nodes in the list remain unchanged, otherwise, false.

// Examples:

// Input: head = 1 -> 3 -> 4, pos = 2
// Output: true