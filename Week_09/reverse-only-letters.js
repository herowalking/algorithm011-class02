/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let arr = S.split('');
  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (!isLetter(arr[l].charCodeAt())) {
      l++;
    } else if (!isLetter(arr[r].charCodeAt())) {
      r--;
    } else {
      swap(arr, l++, r--);
    }
  }
  return arr.join('');
};

var isLetter = function(c) {
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}

var swap = function(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}