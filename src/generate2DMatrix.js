/*
*********************************************************************************************

 Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order.
 Problem Constraints:
  1 <= A <= 1000

Example: 
  I/P: A = 2
  O/P: [[1, 2], [4, 3]]
 
*********************************************************************************************
*/

function generateMatrix(A) {
  if (A === 1) return [[1]];
  const result = new Array(A).fill().map(() => new Array(A).fill(0));

  let top = 0;
  let left = 0;
  let right = A - 1;
  let bottom = A - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result[top][i] = (result[top][i - 1] || 0) + 1;
    }
    top++;
    for (let j = top; j <= bottom; j++) {
      result[j][right] = result[j - 1][right] + 1;
    }
    right--;
    for (let k = right; k >= left; k--) {
      result[bottom][k] = result[bottom][k + 1] + 1;
    }
    bottom--;
    for (let l = bottom; l >= top; l--) {
      result[l][left] = (result[l + 1][left] || 0) + 1;
    }
    left++;
  }
  return result;
}

console.log(generateMatrix(3));
