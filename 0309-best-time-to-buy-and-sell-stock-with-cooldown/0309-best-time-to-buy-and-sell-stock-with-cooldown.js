/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = {}
    
    const dfs = (i, buying) => {
        if(i >= prices.length) return 0;
        
        let key = `${i}${buying}`;
        
        if(dp.hasOwnProperty(key)){
            return dp[key];
        }
        
        let cooldown = dfs(i+1, buying);
        if(buying){
            let buy = dfs(i+1, !buying) - prices[i];
            dp[key] = Math.max(buy,cooldown);
        } else {
            let sell = dfs(i+2, !buying) + prices[i];
            dp[key] = Math.max(sell, cooldown);
        }
        return dp[key];
    }
    return dfs(0, true);
};