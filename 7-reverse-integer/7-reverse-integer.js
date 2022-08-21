/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = parseInt(x.toString().split('').reverse().join(''));
    if(arr > 2**31){
        return 0;
    }
    else if(x < 0){
         return BigInt(arr) * -1n;
    }else{
        return BigInt(arr);
    }
};