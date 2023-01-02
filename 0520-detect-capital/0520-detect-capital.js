/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let w = word[0].toUpperCase() + word.slice(1,word.length).toLowerCase();
    
    return w === word || word === word.toUpperCase() || word === word.toLowerCase();
};