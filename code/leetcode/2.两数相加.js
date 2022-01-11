/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    // 进位
    let carry = 0

    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        let sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)
        p3.next = new ListNode(sum % 10)
        p3 = p3.next
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
    }
    // 最后的进位
    if (carry === 1) {
        p3.next = new ListNode(carry)
    }
    return l3.next
};
// @lc code=end

/**
 * 思路
 * 遍历两个链表，将每个节点依次相加。
 * 得到相加的结果之后，将个位数作为当前位的结果，如有十位，就将十位进到下一次进行相加，就得出的最后的结果。
 */