/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let freq = {};
    for(let char of arr){
        if(freq[char] === undefined){
            freq[char] = 0;
        }
        freq[char]++;
    }
    
    // console.log(freq);
    
    let res = Object.entries(freq);
    // console.log(res);
    
     let s = res.sort((a,b) => b[1] - a[1]);
    // console.log(s);
    
    let arr2 = [];
    for(let i=0; i<s.length; i++){
        arr2.push(s[i][0]);
    }
    // console.log(arr2)
    return arr2[0]
};