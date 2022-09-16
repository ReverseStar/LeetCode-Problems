/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];
    for(let i=left;i<=right;i++){
        let cnt = 0;
        let split = i.toString().split('');
        for(let j=0;j<split.length;j++){
            if(i % split[j] === 0){
                cnt++;
            }
        }
        if(cnt === split.length){
            ans.push(i);
        }
    }
    console.log(ans);
    return ans;
};