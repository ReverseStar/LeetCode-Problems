/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    if(word1.join('').toString() === word2.join('').toString()){
        return true;
    } else{
        return false;
    }
    // console.log(word1.join('').toString());
    // console.log(word2.join('').toString());
};