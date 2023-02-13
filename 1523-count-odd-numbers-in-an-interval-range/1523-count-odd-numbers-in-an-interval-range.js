/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    return Math.floor((high+1) / 2) - Math.floor(low / 2);
};


/* Explanation: for the case "low = 3" and "high = 7"
        if low = 3 and high = 7, then
          Math.floor((high + 1) / 2) 
        = Math.floor(8 / 2) = 4 and 
          Math.floor(low / 2) 
        = Math.floor(3 / 2) = 1. 
        So, the number of odd numbers between low and high is 
        4 - 1 = 3.
*/