/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = [...new Set(nums)];
    
    let sorted = arr.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    
    let ans = sorted.reverse();
    // console.log('this is sorted',ans);
    
    if(ans.length >= 3){
        return ans[2];
    } else{
        return ans[0];
    }
};