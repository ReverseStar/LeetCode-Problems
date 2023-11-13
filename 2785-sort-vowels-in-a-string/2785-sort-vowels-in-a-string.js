/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let arr = [];
    let str = s.split``;
    
    for(let ch in str){
        if( /[aeiouAEIOU]/.test(str[ch])){
            arr.push(str[ch]);
        }
    }
    // console.log(arr)
    
    arr.sort();
    
    for(let ch in str){
        if( /[aeiouAEIOU]/.test(str[ch])){
            str[ch] = arr.shift(); // if s[ch] is a vowel, shift the first value out of arr & set s[ch] equal to it.
        }
    }
    
    return str.join``;
};