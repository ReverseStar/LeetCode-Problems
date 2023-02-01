/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let s1 = str1.length;
    let s2 = str2.length;
    
    if(str1 + str2 !== str2 + str1) return "";
    
    const GCD = (x , y) => {
        if(!y) return x;
        return GCD(y, x % y);
    }
    console.log(GCD(s1,s2));
    let divider = GCD(s1, s2);
    
    return str1.slice(0, divider);
};