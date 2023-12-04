/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = "";

  // Loop over the string in groups of 3 characters
  for (let i = 0; i < num.length - 2; i++) {
    const currentNum = num.slice(i, i + 3);

    // Check if the substring is good (unique digit)
    if (new Set(currentNum).size === 1) {
      // Compare the current good integer with the largest so far
      if (currentNum > res) {
        res = currentNum;
      }
    }
  }

  return res;
}