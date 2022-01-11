/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return true
    let stack = []
    let len = s.length
    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (let i = 0; i < len; i++) {
        let char = s[i]
        if (brackets[char]) {
            stack.push(brackets[char])
        } else {
            if (stack.pop() !== char) {
                return false
            }
        }
    }
    
    return !stack.length
};
// @lc code=end


/**
 * 思路
 * 使用栈来解决
 * 用一个map来存储三种括号的对应关系
 * 对字符串进行遍历，遇到左括号一律入栈
 * 如果不是左括号，判断是和栈顶相匹配的右括号，则出栈
 * 最后遍历完，栈中应该为空
 */
