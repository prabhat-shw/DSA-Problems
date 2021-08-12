/*
*********************************************************************************************

Given a binary string A. It is allowed to do at most one swap between any 0 and 1.
Find and return the length of the longest consecutive 1’s that can be achieved.

Constraints:
  1 <= length of string <= 1000000
  A contains only characters 0 and 1.

Example: 
  Input 1:
    A = "111000"
  Output 1:
      3

  Input 2:
      A = "111011101"
  Output 2:
      7
 
*********************************************************************************************
*/

function getMaxConsecutive1s(A) {
  let one_count = 0;
  let maxlen = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === "1") one_count++;
  }
  let leftOneSum = Array(A.length).fill(0);
  let rightOneSum = Array(A.length).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      leftOneSum[i] = Number(A[i]);
    } else {
      A[i] !== "0"
        ? (leftOneSum[i] = leftOneSum[i - 1] + Number(A[i]))
        : (leftOneSum[i] = 0);
    }
  }

  for (let j = A.length - 1; j >= 0; j--) {
    if (j === A.length - 1) {
      rightOneSum[j] = Number(A[j]);
    } else {
      A[j] !== "0"
        ? (rightOneSum[j] = rightOneSum[j + 1] + Number(A[j]))
        : (rightOneSum[j] = 0);
    }
  }

  for (let i = 0; i < leftOneSum.length; i++) {
    if (leftOneSum[i] > maxlen) maxlen = leftOneSum[i];
  }

  for (let i = 0; i <= A.length; i++) {
    if (A[i] === "0") {
      let l = leftOneSum[i - 1] || 0;
      let r = rightOneSum[i + 1] || 0;
      if (l + r < one_count) {
        maxlen = Math.max(maxlen, l + r + 1);
      } else {
        maxlen = Math.max(maxlen, l + r);
      }
    }
  }
  return maxlen;
}

const result = getMaxConsecutive1s("10000111");

console.log("Longest Consecutive 1s: ", result);
