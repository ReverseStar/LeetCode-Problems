/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let arr = s.split('');
    let unq = arr.filter(isUnique);
    for(let i=0;i<arr.length;i++){
        if(arr[i] === unq[0]){
            return i;
        }
    }
    return -1;
};

function isUnique(value, index, array) {
  return array.indexOf(value) === array.lastIndexOf(value);
}