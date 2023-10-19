'use strict'

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = (x) => {
    var numStr = x + ''
    var res = parseInt(numStr.split('').reverse().join(''))
    if (res > 0x7FFFFFFF) return 0
    return (x < 0) ? -res : res
}

var reverse2 = (x) => {
    var res = 0
    var xabs = Math.abs(x)
    while (xabs) {
        var num = xabs % 10
        res = res * 10 + num
        xabs = Math.floor(xabs / 10)
    }
    if (res > 0x7FFFFFFF) return 0
    return (x > 0) ? res : -res
};

var res = reverse(123)
console.log('INPUT:', 123)
console.log('EXPECTED: ', 321)
console.log('ACTUAL: ', res)


var res = reverse(-123)
console.log('INPUT:', -123)
console.log('EXPECTED: ', -321)
console.log('ACTUAL: ', res)


