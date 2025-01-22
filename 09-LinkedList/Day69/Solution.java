class Solution {
  static Node addTwoLists(Node num1, Node num2) {
      // code here
      Node l1 = reverseList(num1);
      Node l2 = reverseList(num2);
      Node curr = null;
      int carry =0;
      
      while (l1 != null || l2 != null || carry > 0) {
          int v1 = l1 != null ? l1.data : 0;
          int v2 = l2 != null ? l2.data : 0;
          int sum = v1+ v2+carry;
          carry = sum /10;
          Node temp  = new Node(sum %10);
          
          temp.next = curr;
          curr = temp;
          
          if (l1 != null) {
              l1 = l1.next;
          }
          if (l2 != null) {
              l2 = l2.next;
          }
      }
      while (curr != null && curr.data == 0) {
          curr = curr.next;
      }
      return curr;
  }
  
  static Node reverseList(Node head) {
      Node tempH = null;
      while (head != null) {
          Node next = head.next;
          
          if (tempH == null) {
              tempH = head;
              tempH.next = null;
          }else {
              head.next = tempH;
              tempH = head;
          }
          head = next;
      }
      return tempH;
  }
}

// Add Number Linked Lists

// Given the head of two singly linked lists num1 and num2 representing two non-negative integers. The task is to return the head of the linked list representing the sum of these two numbers.

// For example, num1 represented by the linked list : 1 -> 9 -> 0, similarly num2 represented by the linked list: 2 -> 5. Sum of these two numbers is represented by 2 -> 1 -> 5.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

// Examples:

// Input: num1 = 4 - > 5, num2 = 3 -> 4 -> 5
// Output:  3 -> 9 -> 0