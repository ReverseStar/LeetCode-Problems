/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 0) return false;
    else if(n === 1) return true;
    
    while(n !== 1){
        if(n % 3 !== 0){
            return 0;
        } else {
            n = n/3;
        }
    }
    return 1;
};