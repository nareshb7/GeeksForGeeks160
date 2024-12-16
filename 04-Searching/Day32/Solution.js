
class Solution {
    kthElement(a, b, k) {
        // code here
         let n = a.length;
    let m =b.length;
    
    // Ensure arr1 is the smaller array
    if (n > m) return this.kthElement(b, a, k);
    
    let low = Math.max(0, k - m);
    let high = Math.min(k, n);
    
    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = k - cut1;
        
        let left1 = cut1 === 0 ? -Infinity : a[cut1 - 1];
        let left2 = cut2 === 0 ? -Infinity : b[cut2 - 1];
        
        let right1 = cut1 === n ? Infinity : a[cut1];
        let right2 = cut2 === m ? Infinity : b[cut2];
        
        if (left1 <= right2 && left2 <= right1) {
            return Math.max(left1, left2);
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    
    return -1; // If no valid k-th element found (should not occur for valid input)
    }
}

// K-th element of two Arrays

// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

// Examples :

// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.