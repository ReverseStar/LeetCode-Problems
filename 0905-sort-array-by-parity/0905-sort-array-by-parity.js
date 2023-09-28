/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let odds = nums.filter(num => num%2 !== 0);
    // console.log(odds);
    let evens = nums.filter(num => num%2 === 0);
    // console.log(evens);
    
    return [...evens, ...odds];
};