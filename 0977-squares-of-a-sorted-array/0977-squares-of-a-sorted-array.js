/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [];
    
    for(let num of nums){
        res.push(num * num);
    }
    
    return res.sort((a,b) => a - b);
};