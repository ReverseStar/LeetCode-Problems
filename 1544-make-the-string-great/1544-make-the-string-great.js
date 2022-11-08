/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    for(let i=0;i<s.length - 1;i++){
        if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32){
            s = s.slice(0,i) + s.slice(i+2);
            return makeGood(s);
        }
    }
    return s;
};