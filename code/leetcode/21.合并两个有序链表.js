/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let list3 = new ListNode()
    let p3 = list3
    while (list1 && list2) {
        const v1 = list1.val
        const v2 = list2.val
        if (v1 <= v2) {
            p3.next = list1
            list1 = list1.next
        } else {
            p3.next = list2
            list2 = list2.next
        }
        p3 = p3.next
    }
    p3.next = list1 !== null ? list1 : list2
    return list3.next
};
// @lc code=end

