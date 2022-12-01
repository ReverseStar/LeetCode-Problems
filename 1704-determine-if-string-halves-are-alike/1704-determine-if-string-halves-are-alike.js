/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    // let dict = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let dict = 'aeiouAEIOU';
    let Fcnt = 0;
    let Lcnt = 0;
    let first = s.substring(0, s.length/2);
    let last = s.substring(s.length/2);
    console.log(first, last);
    
    for(i of first){
        if(dict.includes(i)){
            Fcnt++;
        }
    }
    for(i of last){
        if(dict.includes(i)){
            Lcnt++;
        }
    }
    return Fcnt === Lcnt;
};