/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let cnt = 0;
    let len = strs[0].length;
    
    for(let i=0; i<len; i++){
        let isSorted = true;
        for(let j=0; j<strs.length - 1; j++){
            if(strs[j][i] > strs[j+1][i]){
                isSorted = false;
                break;
            }
        }
        if(!isSorted) {
            cnt++;
        }
    }
    
    // console.log(cnt);
    return cnt;
};

// const isSorted = (str) => {
//     if((str === str.split('').sort().join('')) || (str === str.split('').sort().reverse().join(''))){
//         return true;
//     } else {
//         return false;
//     }
// }