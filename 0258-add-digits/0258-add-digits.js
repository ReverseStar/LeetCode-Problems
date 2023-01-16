/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let remain = 1;
    while(num > 9){
        let last = num % 10;
        num = Math.floor(num / 10) + last;
    }
    // console.log(num);
    return num;
};