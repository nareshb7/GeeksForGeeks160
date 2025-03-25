class Solution {
  countWays(s) {
    // code here
    let n = s.length;
    let dp = new Map();

    const solve = (i, j, isTrue) => {
      if (i > j) return 0;
      if (i === j) {
        if (isTrue) return s[i] == "T" ? 1 : 0;
        else return s[i] === "F" ? 1 : 0;
      }

      let key = `${i}-${j}-${isTrue}`;

      if (dp.has(key)) return dp.get(key);

      let ways = 0;

      for (let k = i+1; k<j; k+=2) {
        let leftTrue = solve(i, k-1, true);
        let leftFalse = solve(i, k-1, false);
        let rightTrue = solve(k+1, j, true);
        let rightFalse = solve(k+1, j, false);
        
        if (s[k] === "&") {
            if (isTrue) ways+= leftTrue * rightTrue;
            else ways += (leftTrue * rightFalse) + (leftFalse * rightTrue)+ (leftFalse * rightFalse)
        } else if(s[k] === "|") {
            if (isTrue) ways+= (leftTrue * rightTrue) + (leftTrue * rightFalse) + (leftFalse * rightTrue);
            else ways+= leftFalse * rightFalse
        } else if (s[k] === "^") {
            if(isTrue) ways+= (leftTrue * rightFalse) + (leftFalse * rightTrue);
            else ways += (leftTrue * rightTrue) + (leftFalse * rightFalse)
        }
      }

      dp.set(key, ways);
      return ways;
    };

    return solve(0, n - 1, true);
  }
}

// Boolean Parenthesization

// You are given a boolean expression s containing
//     'T' ---> true
//     'F' ---> false 
// and following operators between symbols
//    &   ---> boolean AND
//     |   ---> boolean OR
//    ^   ---> boolean XOR
// Count the number of ways we can parenthesize the expression so that the value of expression evaluates to true.

// Note: The answer is guaranteed to fit within a 32-bit integer.

// Examples:

// Input: s = "T|T&F^T"
// Output: 4
// Explaination: The expression evaluates to true in 4 ways: ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T) and (T|((T&F)^T)).
