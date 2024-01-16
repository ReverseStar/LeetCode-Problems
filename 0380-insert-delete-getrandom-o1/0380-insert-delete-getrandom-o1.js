
var RandomizedSet = function() {
    this.numSet = {};
    this.numMap = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let res = !(this.numSet.hasOwnProperty(val));
    
    if(res){
        this.numSet[val] = this.numMap.length;
        this.numMap.push(val);
    }
    
    return res
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let res = this.numSet.hasOwnProperty(val);
    
    if(res){
        let idx = this.numSet[val];
        let lastVal = this.numMap.at(-1);
        this.numMap[idx] = lastVal;
        this.numMap.pop();
        this.numSet[lastVal] = idx;
        delete this.numSet[val];
    }
    
    return res;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return _.sample(this.numMap);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */