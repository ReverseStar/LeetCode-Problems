/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 1) return true;
    else if(n === 0) return false;
    
    while(n !== 1){
        if(n % 2 !== 0){
            return 0;
        } else {
            n = n/2;
        }
    }
    return 1;
};