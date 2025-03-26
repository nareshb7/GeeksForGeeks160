# Notes for Day 132: Word Break

## Approach: DP T.C - O(n^2)

- Define a DP Array:
- Let dp[i] represent whether the substring s[0...i-1] can be formed using words from the dictionary.
- dp[0] = true (empty string is always breakable).
- State Transition: For each index i in s, check all possible partitions s[j...i-1] where j < i.
- If dp[j] is true (meaning s[0...j-1] can be segmented) and s[j...i-1] is in the dictionary, set dp[i] = true.
- Return dp[n]: If dp[n] (where n = s.length) is true, then s can be broken into words from the dictionary.

## Approach: (Trie) T.C - O(n)

- Insert all dictionary words into a Trie.
- Use BFS, but instead of checking wordSet.has(substring), traverse the Trie for faster word lookup.
- This avoids redundant substring operations.

## Complexity

- Time Complexity: O(n),
- Space Complexity: O(n)
