/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let hashSet = new Set(nums)
    // console.log(hashSet);
    let res = -1;
    
    for(let i of hashSet){
        if(hashSet.has(-i)){
            res = Math.max(res, i);
        }
    }
    return res;
};