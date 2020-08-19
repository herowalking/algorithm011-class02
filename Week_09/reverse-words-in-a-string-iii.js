/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let res = '';
  let word = '';

  for (let c of s) {
    if (c === ' ') {
      res += word + c;
      word = '';
    } else {
      word = c + word;
    }
  }

  return res + word;
};

// one line code
var reverseWords2 = function(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}