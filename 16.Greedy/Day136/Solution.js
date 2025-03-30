class Solution {
    startStation(gas, cost) {
        // Your code here
        let n = gas.length;
        let totalTank =0, currentTank=0, startIndex=0;
        
        for (let i=0; i<n ; i++ ) {
            let present = gas[i] -cost[i];
            totalTank+= present;
            currentTank+= present;
            
            
            if(currentTank <0) {
                startIndex =i+1;
                currentTank =0;
            }
        }
        
        return totalTank >=0 ? startIndex :  -1;
    }
}

// Gas Station

// There are some gas stations along a circular route. You are given two integer arrays gas[] denoted as the amount of gas present at each station and cost[] denoted as the cost of travelling to the next station. You have a car with an unlimited gas tank. You begin the journey with an empty tank from one of the gas stations. Return the index of the starting gas station if it's possible to travel around the circuit without running out of gas at any station in a clockwise direction. If there is no such starting station exists, return -1.
// Note: If a solution exists, it is guaranteed to be unique.

// Examples:

// Input: gas[] = [4, 5, 7, 4], cost[]= [6, 6, 3, 5]
// Output: 2
// Explanation: It is possible to travel around the circuit from station at index 2. Amount of gas at station 2 is (0 + 7) = 7.
// Travel to station 3. Available gas = (7 – 3 + 4) = 8.
// Travel to station 0. Available gas = (8 – 5 + 4) = 7.
// Travel to station 1. Available gas = (7 – 6 + 5) = 6.
// Return to station 2. Available gas = (6 – 6) = 0.