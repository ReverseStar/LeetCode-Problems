/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
//     let odds = nums.filter(num => num%2 !== 0);
//     let evens = nums.filter(num => num%2 === 0);
    
//     return [...evens, ...odds];
    
    let left = 0;
    
    for(let right=0; right<nums.length; right++){
        if(nums[right] % 2 === 0){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
    return nums;
};