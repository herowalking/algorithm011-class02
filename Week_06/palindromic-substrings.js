/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let dp = new Array(s.length).fill('').map(() => new Array(s.length).fill(false));
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
        num++;
      }
    }
  }
  return num;
};