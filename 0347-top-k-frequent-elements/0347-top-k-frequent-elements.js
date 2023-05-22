/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = _.countBy(nums);
    // console.log(freq);
    
    let vals = Object.entries(freq).sort((a,b) => b[1] - a[1]);
    // console.log(vals);
    
    let s = vals.sort((a,b) => b[1] - a[1]);
    // console.log(s);
    
    let arr = [];
    for(let i=0; i<k; i++){
        arr.push(s[i][0]);
    }
    console.log(arr);
    return arr;
};