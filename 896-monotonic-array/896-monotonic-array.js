/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let arr = nums.join('');
    let asc = nums.slice().sort((a,b) => a - b).join('');
    let desc = nums.slice().sort((a,b) => b - a).join('');
    // console.log(nums,asc, desc)
    
    if((arr === asc) || (arr === desc)){
        return true;
    } else {
        return false;
    }
};
