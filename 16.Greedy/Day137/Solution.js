class Solution {
    maxPartitions(s) {
        // code here
        const n  = s.length;
        let last =  new Array(26).fill(-1);
        
        for (let i=0; i<n ; i++) {
            last[s.charCodeAt(i) - "a".charCodeAt(0)] =i;
        }
        
        let count =0, curr =-1;
        
        for (let i=0; i<n ;i++) {
            curr = Math.max(curr,last[s.charCodeAt(i) - "a".charCodeAt(0)] );
            if (curr ==i) {
                count++;
                curr = -1;
            }
        }
        
        return count;
    }
}

// Maximize partitions in a String

// Given a string s of lowercase English alphabets, your task is to return the maximum number of substrings formed, after possible partitions (probably zero) of s such that no two substrings have a common character.

// Examples:

// Input: s = "acbbcc"
// Output: 2
// Explanation: "a" and "cbbcc" are two substrings that do not share any characters between them