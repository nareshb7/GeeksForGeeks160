class Solution {
  isBalanced(s) {
    // code here
    const obj = { "(": ")", "{": "}", "[": "]" };

    const stack = [];

    for (const p of s) {
      if (obj[p]) {
        stack.push(p);
      } else if (stack.length) {
        const last = stack.pop();

        if (obj[last] != p) {
          return false;
        }
      } else {
        return false;
      }
    }

    return stack.length === 0;
  }
}

// Parenthesis Checker

// Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', verify the validity of the arrangement.
// An input string is valid if:

//          1. Open brackets must be closed by the same type of brackets.
//          2. Open brackets must be closed in the correct order.

// Examples :

// Input: s = "[{()}]"
// Output: true
// Explanation: All the brackets are well-formed.
