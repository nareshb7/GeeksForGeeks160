class Solution {
  getLength(head) {
    let len = 0;
    while (head != null) {
      len++;
      head = head.next;
    }
    return len;
  }
  reverseKGroup(head, k) {
    let len = this.getLength(head);
    let orgH = null, orgT = null;
    let tmpH = null, tmpT = null;
    let curr = head;

    while (len > 0) {
      let i = k;
      i = Math.min(i, len);
      while (i > 0) {
        let next = curr.next;
        if (tmpH === null) {
          tmpH = curr;
          tmpT = curr;
        } else {
          curr.next = tmpH;
          tmpH = curr;
        }
        curr = next;
        i--;
        len--;
      }

      if (orgH == null) {
        orgH = tmpH;
        orgT = tmpT;
      } else {
        orgT.next = tmpH;
        orgT = tmpT;
      }
      tmpH = null;
      tmpT = null;
    }
    orgT.next = null;
    return orgH;
  }
}

// Linked List Group Reverse

// Given the head a linked list, the task is to reverse every k node in the linked list. 
// If the number of nodes is not a multiple of k then the left-out nodes in the end, should be considered as a group and must be reversed.

// Examples:

// Input: head = 1 -> 2 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8, k = 4
// Output: 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5