/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     s.split('').forEach(ch => {
         t = t.replace(ch, '')
    })
    return t;
};