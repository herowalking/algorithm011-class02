/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const visited = new Set();
  let res = 0;

  for (let i = 0; i < M.length; i++) {
    if(!visited.has(i)) {
      dfs(i);
      res++;
    }
  }
  return res;

  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  }
}