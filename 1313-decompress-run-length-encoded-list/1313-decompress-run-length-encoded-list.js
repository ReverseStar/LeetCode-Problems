/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    
    for(let i=0;i<nums.length;i+=2){
        let freq = nums[i];
        let val = nums[i+1];
        
        arr.push(...new Array(freq).fill(val));
    }
    
    return arr;
};