/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let arr = [];
    
    let elem = nums.reduce((acc,curr) => acc+curr, 0);
    
    nums.forEach(num => {
        if(num < 10) {
            arr.push(num);
        } else {
            let n = Array.from(String(num), Number);
            arr.push(n);
        }
    })
    let digits = arr.flat().reduce((acc,curr) => acc+curr, 0);
    
    return Math.abs(elem - digits);
};