/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');

    return arr.map(item => {
        return item.split('').reverse().join('');
    }).join(' ');
};
