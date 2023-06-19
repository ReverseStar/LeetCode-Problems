/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0;
    let arr = [];
    
    for(let i=0; i<gain.length ; i++){
        alt += gain[i];
        arr.push(alt);
    }
    // console.log(arr,Math.max(...arr));
    let ans = Math.max(...arr);
    return ans < 0 ? 0 : ans;
};
