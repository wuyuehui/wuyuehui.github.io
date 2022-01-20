/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length
    const dp = []
    dp[0] = nums[0]

    for (let i = 1; i < len; i++) {
        if (dp[i - 1] <= 0) {
            dp[i] = nums[i]
        } else {
            dp[i] = dp[i - 1] + nums[i]
        }
    }

    let res = dp[0]
    for (let i = 1; i < len; i++) {
        res = Math.max(res, dp[i])
    }
    return res
};
// @lc code=end

// 思路：
// 动态规划
// 子问题：求解编号为 i 时的连续数组和最大是多少
// 如果编号为 i 的子问题的结果是负数或者 0，那么编号为 i + 1 的子问题就可以把编号为 i 的子问题的结果舍弃掉，
// 这是因为：一个数 a 加上负数的结果比 a 更小； 一个数 a 加上 0 的结果不会比 a 更大；
// 而子问题的定义必须以一个数结尾，因此如果子问题 i 的结果是负数或者 0，那么子问题 i + 1 的答案就是以 nums[i] 结尾的那个数。
// 即：
// 如果 dp[i - 1] <= 0，那么 nums[i] 加上前面的数 dp[i - 1] 以后值不会变大。于是 dp[i] 的值就是 nums[i]。
// 如果 dp[i - 1] > 0，那么可以把 nums[i] 直接接在 dp[i - 1] 表示的那个数组的后面，得到和更大的连续子数组；