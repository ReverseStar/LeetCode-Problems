/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1;
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])){
            let temp = s.substring(s.indexOf(s[i]), s.lastIndexOf(s[i])).length - 1;
            res = res < temp ? temp : res;
        }
    }
    return res;
};