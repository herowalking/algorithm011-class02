## 算法训练营Week09 (2020/08/17 ~ 2020/08/23)

### 高级动态规划
递归、分治、回溯、动态规划没有本质区别，关键看有无最优子结构。
避免人肉递归，找到最近最简方法，将其拆成可重复解决的问题。多运用数学归纳法思维。
本质就是寻找重复性，转化为计算机的指令集。

63. 不同路径 II
https://leetcode-cn.com/problems/unique-paths-ii/  
```
// 状态转移方程
dp[i][j] = dp[i−1][j] + dp[i][j−1]

// 完整代码：
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0]) return 0;
  let m = obstacleGrid.length, n = obstacleGrid[0].length;
  let dp = new Array(m);

  for (let i = 0; i < m; i++) dp[i] = new Array(n);

  dp[0][0] = 1;

  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 || dp[0][j -1] === 0 ? 0 : 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m -1][n -1];
};
```

### 字符串
Java, C#, JavaScript, Python and Go 语言中， 字符串是不可变的，而Ruby, PHP, C, C++中，字符串是可变的。
在Java中，比较两个字符串，比较的是引用的地址，而不是实际存储的值。