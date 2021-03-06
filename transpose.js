/**
 https://leetcode.com/problems/transpose-matrix/
 
 Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.


Example 1:
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

 * @param {number[][]} A
 * @return {number[][]}
 */
 
var transpose = function (arr) {
  let result = [];

  for (let y = 0; y < arr.length; y++) {
    let newArr = [];
    for (let x = 0; x < arr.length; x++) {
      newArr.push(arr[x][y]);
    }

    result.push(newArr);
  }

  return result;
};
