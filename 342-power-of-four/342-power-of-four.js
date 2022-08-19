/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false;
    else if(n === 1) return true;
    
    while(n !== 1){
        if(n % 4 !== 0){
            return 0;
        } else {
            n = n/4;
        }
    }
    return 1;
};