/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(kids, cookies) {
  kids.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);
  let count = 0, k = kids.length - 1, c = cookies.length -1;
  while (k >= 0) {
    let kid = kids[k], cookie = cookies[c];
    if (cookie >= kid) {
      count++;
      k--;
      c--;
    } else {
      k--;
    }
  }
  return count;
};