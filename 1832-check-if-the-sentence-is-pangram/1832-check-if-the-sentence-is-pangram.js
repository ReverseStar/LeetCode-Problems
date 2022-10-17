/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr = [...new Set(sentence)];
    if(arr.length >= 26) {
        return true;
    } else {
        return false;
    }
};