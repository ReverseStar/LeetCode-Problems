/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let mx = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            cnt++;
            mx = Math.max(mx,cnt);
        } else{
            cnt = 0;
        }
    }
    // console.log(mx);
    return mx;
};