class Solution {
  reverseList(head) {
      // your code here
      let prev = null
      let curr = head
      let next = null
      
      while (curr) {
          next = curr.next
          curr.next = prev
          prev = curr
          curr =next
      }
      head = prev
      return head
  }
}

// Reverse a linked list

// Given the head of a linked list, the task is to reverse this list and return the reversed head.

// Examples:

// Input: head: 1 -> 2 -> 3 -> 4 -> NULL
// Output: head: 4 -> 3 -> 2 -> 1 -> NULL