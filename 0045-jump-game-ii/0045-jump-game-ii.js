/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length;
    let left = 0;
    let right = 0;
    let jump = 0;
    
    while(right < len - 1){
        let mx = 0;
        for(let i=0; i<=right; i++){
            mx = Math.max(mx, i + nums[i]);
        }
        left = right+1;
        right = mx;
        jump++;
    }
    return jump;
};