/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for(let i=0;i<s.length;i++){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
        if(s.indexOf(s[i], i+1) !== t.indexOf(t[i],i+1)){
            return false;
        }
    }
    return true;
};