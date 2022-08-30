/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if(!word.includes(ch)){
        return word;
    } 
    let idx = word.indexOf(ch);
    let rev = word.substring(0,idx+1).split('').reverse().join('');
    let rest = word.slice(idx+1)
    return rev + rest;
};