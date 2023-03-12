/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let cnt = 0;
    
    for(let i=2; i<arr.length; i++){
        if(arr[i-1] % 2 !== 0 && arr[i-2] % 2 !== 0 && arr[i] % 2 !== 0) return true;
    }
    return false;
};