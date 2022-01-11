/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > target) {
            right = mid - 1 // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1 // 去右面闭区间寻找
        } else {
            return mid
        }
    }
    return -1
};
// @lc code=end

