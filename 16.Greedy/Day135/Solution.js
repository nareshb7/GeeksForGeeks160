class Solution {
  jobSequencing(deadline, profit) {
      // code here
      let n = deadline.length;
      
      const find =(parent, x)=> {
          if (parent[x] === x) return x;
          return parent[x] = find(parent, parent[x]);
      }
      let jobs  =[];
      
      for (let i=0; i<n; i++) {
          jobs.push({deadline: deadline[i], profit : profit[i]})
      }
      
      jobs.sort((a, b)  => b.profit - a.profit);
      
      let maxDeadline = Math.max(...deadline);
      
      let parent = new Array(maxDeadline+1);
      
      for  (let i=0; i<= maxDeadline; i++) {
          parent[i] =  i;
      }
      
      let jobCount =0, totalProfit = 0;
      
      for (let job of jobs) {
          let availableSpot = find(parent, job.deadline);
          if (availableSpot > 0) {
              totalProfit +=job.profit;
              jobCount++;
              parent[availableSpot] = find(parent, availableSpot -1);
          }
      }
      
      return [jobCount, totalProfit]
  }
}

// Job Sequencing Problem

// You are given two arrays: deadline[], and profit[], which represent a set of jobs, where each job is associated with a deadline, and a profit. Each job takes 1 unit of time to complete, and only one job can be scheduled at a time. You will earn the profit associated with a job only if it is completed by its deadline.

// Your task is to find:

// The maximum number of jobs that can be completed within their deadlines.
// The total maximum profit earned by completing those jobs.
// Examples :

// Input: deadline[] = [4, 1, 1, 1], profit[] = [20, 10, 40, 30]
// Output: [2, 60]
// Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).