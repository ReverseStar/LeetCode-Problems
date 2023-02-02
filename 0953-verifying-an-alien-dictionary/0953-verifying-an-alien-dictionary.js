/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    
    let alien = words.map( word => word.split('').map( ch => alpha[order.indexOf(ch)]).join(''));
    
    return alien.toString() == alien.sort().toString();
};