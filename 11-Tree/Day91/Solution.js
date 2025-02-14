class Solution {
  findTarget(root, target) {
      // code here
      const hashSet = new Set();
      let hasPair = false
      const dfs = node => {
          if (!node) return 
          
          dfs(node.left)
          const comp = target - node.data
          if (hashSet.has(comp)) {
              hasPair = true
              return true
          } else {
              hashSet.add(node.data );
          }
          dfs(node.right)
          
      }
      dfs(root)
      
      return hasPair
  }
}

// Pair Sum in BST

// Given a Binary Search Tree(BST) and a target. Check whether there's a pair of Nodes in the BST with value summing up to the target. 

// Examples:

// Input: root = [7, 3, 8, 2, 4, N, 9], target = 12
// Output: True
// Explanation: In the binary tree above, there are two nodes (8 and 4) that add up to 12.