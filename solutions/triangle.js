'use strict'

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. 
// More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.


// Example:
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).


/**
 * @param {number[][]} triangle
 * @return {number}
 */

function minimumTotal(triangle) {
    triangle = JSON.parse(JSON.stringify(triangle))
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
        }
    }
    return triangle[0][0]
}



var triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]

console.log('INPUT:', triangle)
console.log('EXPECTED: ', 11)
var res = minimumTotal(triangle)
console.log('ACTUAL: ', res)




triangle = [
    [2],
    [3, 1],
    [6, 5, 1],
    [4, 1, 8, 3]
]

console.log('INPUT:', triangle)
console.log('EXPECTED: ', 7)
res = minimumTotal(triangle)
console.log('ACTUAL: ', res)



