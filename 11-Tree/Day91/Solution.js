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