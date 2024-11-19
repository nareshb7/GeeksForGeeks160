class Solution {
  // Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d) {
    const n = arr.length;
    d = d % n;

    const reverse = (l, r) => {
      while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
      }
    };

    reverse(0, d - 1); // first part
    reverse(d, n - 1); // remainPart
    reverse(0, n - 1); // total arr

    // const frstPart = arr.slice(0, d);
    // const remainPart = arr.slice(d);
    // const result = [...remainPart, ...frstPart];
    // for (let i = 0; i < n; i++) {
    //   arr[i] = result[i];
    // }
  }
}

// Juggling Algorithm;
// class Solution {
//   // Function to rotate an array by d elements in counter-clockwise direction.
//   rotateArr(arr, d) {
//       // code here
//       const gcd =(a,b) => {
//           while (b != 0) {
//               let temp = b;
//               b = a%b;
//               a = temp;
//           }
//           return a
//       }
//       const n = arr.length;
//       d = d%n;
//       const cycles = gcd(n, d)
      
//       for (let i=0;  i<cycles; i++) {
//           let currentEl = arr[i];
//           let current = i;
          
//           while (true) {
//               let next = (current +d) %n;
//               if (next === i) {
//                   break;
//               }
//               arr[current] = arr[next];
//               current = next;
//           }
//           arr[current] = currentEl
//       }
//   }
// }

// Rotate Array

// Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer.
// Do the mentioned change in the array in place.

// Note: Consider the array as circular.

// Example:
// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
