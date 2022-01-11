/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length
    if (len === 0) return 0
    let fast = 1
    let slow = 1
    while (fast < len) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
// @lc code=end


/**
 * 思路
 * 快慢指针
 * 当数组nums的长度为0，数组没有元素，返回0
 * 当数组nums的长度大于 0 时，数组中至少包含一个元素，在删除重复元素之后也至少剩下一个元素，
 * 因此 nums[0] 保持原状即可，从下标 1 开始删除重复元素。
 * 
 */