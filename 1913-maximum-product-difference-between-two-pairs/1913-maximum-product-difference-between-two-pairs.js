/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1 = 0;
    let max2 = 0;
    let min1 = Infinity;
    let min2 = Infinity;
    
    for(let n of nums){
        if(n > max1){
            max2 = max1;
            max1 = n;
        } else {
            max2 = Math.max(max2, n);
        }
        
        if(n < min1){
            min2 = min1;
            min1 = n;
        } else {
            min2 = Math.min(min2, n);
        }
    }
    // console.log(max1, max2, min1, min2);
    return ((max1 * max2) - (min1 * min2));
}
    
