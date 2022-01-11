/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const maps = {}
    for (let i = 0; i < nums.length; i++) {
        if (maps[target - nums[i]] !== undefined) {
            return [maps[target - nums[i]], i]
        }
        maps[nums[i]] = i
    }
};
// @lc code=end


/**
 * 思路
 * 使用一个map对象来储存遍历过的数字以及对应的索引值
 */