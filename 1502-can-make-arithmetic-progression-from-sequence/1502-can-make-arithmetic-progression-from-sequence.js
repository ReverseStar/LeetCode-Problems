/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length <= 2) return true;
    
    let sorted = arr.sort((a,b) => b - a);
    
    let diff = sorted[1] - sorted[0];
    
    for(let i=2; i<sorted.length; i++){
        if(sorted[i] - sorted[i - 1] !== diff) return false;
    }
    return true;
};