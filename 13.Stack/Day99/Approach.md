# Notes for Day 99: Parenthesis Checker

## Approach:

 🔹 Using a Stack:
- Store bracket pairs in an object {  '(': ')', '[': ']' , '{': '}'  }.
- Traverse the string character by character.
- If the character is an opening bracket, push it onto the stack.
- If it’s a closing bracket:
- Stack should not be empty.
- Pop from the stack and check if it matches the corresponding opening bracket.
- If not, return false.
- Final Check: If the stack is empty at the end, the expression is balanced.
- Otherwise, return false.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
