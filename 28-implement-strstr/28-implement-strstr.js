/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let cnt = 0;
    let arr = haystack.split('');
    let arr2 = needle.split('');
    //console.log(arr,arr2);
    
    return haystack.search(needle);

    if(needle === ''){
        return 0;
    } else{
        return -1;
    }
};