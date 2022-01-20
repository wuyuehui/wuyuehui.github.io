/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const len = nums.length
    let k = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};
// @lc code=end

