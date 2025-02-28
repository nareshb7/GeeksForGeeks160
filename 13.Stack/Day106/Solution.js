class Solution {
  evaluate(arr) {
      // code here
      let n = arr.length;
      let stack =[];
      
      const calculate =(n1, n2, operator)=> {
          switch (operator) {
              case "+": return n2 + n1;
              case "-": return n2 - n1;
              case "*": return n2 * n1;
              case "/": return Math.trunc(n2/n1);
          }
      }
      
      for (let i=0; i<n ; i++) {
          
          if (isNaN(arr[i])) {
              const frst = stack.pop();
              const second = stack.pop()
              
              stack.push(calculate(frst, second, arr[i]))
              
          } else {
              stack.push(Number(arr[i]))
          }
      }
      
      return stack.pop()
      
  }
}

// Evaluation of Postfix Expression

// You are given an array of strings arr that represents a valid arithmetic expression written in Reverse Polish Notation (Postfix Notation). Your task is to evaluate the expression and return an integer representing its value.

// Key Details:

// The valid operators are '+', '-', '*', and '/'.
// Each operand is guaranteed to be a valid integer or another expression.
// The division operation between two integers always rounds the result towards zero, discarding any fractional part.
// No division by zero will occur in the input.
// The input is a valid arithmetic expression in Reverse Polish Notation.
// The result of the expression and all intermediate calculations will fit in a 32-bit signed integer.
// Examples:

// Input: arr = ["2", "3", "1", "*", "+", "9", "-"]
// Output: -4
// Explanation: If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.