class Solution {
  /**
  * @param number n
  * @param string[][] accounts

  * @returns string[][]
  */
  accountsMerge(accounts) {
    // code here
    const emailGraph = new Map();
    const emailToName = new Map();

    for (const [name, ...emails] of accounts) {
      for (let i = 1; i < emails.length; i++) {
        const email1 = emails[0];
        const email2 = emails[i];

        if (!emailGraph.has(email1)) emailGraph.set(email1, []);
        if (!emailGraph.has(email2)) emailGraph.set(email2, []);

        emailGraph.get(email1).push(email2);
        emailGraph.get(email2).push(email1);
      }
      for (const email of emails) {
        emailToName.set(email, name);
      }
    }

    const visited = new Set();
    const result = [];

    const dfs = (email, component) => {
      visited.add(email);
      component.push(email);

      for (const neighbour of emailGraph.get(email) || []) {
        if (!visited.has(neighbour)) {
          dfs(neighbour, component);
        }
      }
    };

    for (const email of emailToName.keys()) {
      if (!visited.has(email)) {
        const comp = [];
        dfs(email, comp);
        comp.sort();
        result.push([emailToName.get(email), ...comp]);
      }
    }

    return result;
  }
}

// Account Merge

// Given a list of accounts of size n where each element accounts [ i ] is a list of strings, where the first element account [ i ][ 0 ]  is a name, and the rest of the elements are emails representing emails of the account.
// Geek wants you to merge these accounts. Two accounts belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts have the same name.
// After merging the accounts, return the accounts in the following format: The first element of each account is the name, and the rest of the elements are emails in sorted order.

// Note: Accounts themselves can be returned in any order.

// Example 1:

// Input:
// n = 4
// accounts [ ] =
// [["John","johnsmith@mail.com","john_newyork@mail.com"],
// ["John","johnsmith@mail.com","john00@mail.com"],
// ["Mary","mary@mail.com"],
// ["John","johnnybravo@mail.com"]]

// Output:
// [["John","john00@mail.com","john_newyork@mail.com", "johnsmith@mail.com"],
// ["Mary","mary@mail.com"],
// ["John","johnnybravo@mail.com"]]

// Explanation:
// The first and second John's are the same person as they have the common email "johnsmith@mail.com". The third John and Mary are different people as none of their email addresses are used by other accounts.We could return these arrays in any order, for example, the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
