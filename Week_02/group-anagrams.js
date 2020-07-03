/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const mapping = {};
  for (let str of strs) {
      const sorted = str.split('').sort().join('');
      if (mapping[sorted] !== undefined) {
          mapping[sorted].push(str);
      } else {
          mapping[sorted] = [str];
      }
  }
  return Object.values(mapping);
};