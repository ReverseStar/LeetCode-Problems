/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let freq = {};
  let maxCount = 0;
  let res;

  for (const char of arr) {
    if (!freq[char]) {
      freq[char] = 0;
    }
    freq[char]++;

    if (freq[char] > maxCount) {
      maxCount = freq[char];
      res = char;
    }
  }

    return res
};