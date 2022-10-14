/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    let str = s.trim(' ').split(' ');
    if(str.length >= 1 && isNaN(Number.parseInt(str[0]))){
        return 0;
    }
        // s = s.replace(/[^0-9+-]/g, '').trim(' ');
    let parsed = Number.parseInt(str[0]);
    // console.log(parsed);
    return parsed < 0 ? Math.max(parsed, -(2 ** 31)) : Math.min(parsed, (2 ** 31) - 1);
};
