class Solution {
  maxLength(s) {
    // code here

    let stack = [-1];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push(i);
      } else {
        stack.pop();

        if (stack.length === 0) {
          stack.push(i);
        } else {
          maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
        }
      }
    }

    return maxLength;
  }
}

// Longest valid Parentheses

// Given a string s consisting of opening and closing parenthesis '(' and ')'. Find the length of the longest valid parenthesis substring.

// A parenthesis string is valid if:

// For every opening parenthesis, there is a closing parenthesis.
// The closing parenthesis must be after its opening parenthesis.
// Examples :

// Input: s = "((()"
// Output: 2
// Explanation: The longest valid parenthesis substring is "()".
