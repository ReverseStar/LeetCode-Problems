/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = [];
    let rev = s.trim(' ').split(' ').reverse();
    rev.forEach(word => {
        if(word){
            arr.push(word);
        }
    })
    // console.log(arr.reverse());
    return arr.toString().replaceAll(','," ");
};