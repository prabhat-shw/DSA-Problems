/*
*********************************************************************************************

# Rain Water Trapped:
  Given an array A of non-negative integers representing an elevation map where the 
  width of each bar is 1, compute how much water it is able to trap after raining.

# Constraints:
  1 <= |A| <= 100000

Example: 
  Input 1:
    A = [0, 1, 0, 2]
  Output 1:
      1

  Input 2:
      [1, 2]
  Output 2:
      0
 
*********************************************************************************************
*/

function trappedRainWater(A) {
  const LA = Array(A.length).fill(0);
  const RA = Array(A.length).fill(0);
  let sum = 0;
  for (let i = 1; i < A.length; i++) {
    LA[i] = Math.max(LA[i - 1], A[i - 1]);
  }
  for (let j = A.length - 2; j >= 0; j--) {
    RA[j] = Math.max(RA[j + 1], A[j + 1]);
  }

  for (let k = 0; k < A.length; k++) {
    // Taking max as we can get -ve values while calculating water trapped for a particular element
    sum += Math.max(0, Math.min(LA[k], RA[k]) - A[k]);
  }
  return sum;
}

const result = trappedRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// const result = trappedRainWater([3, 1, 2, 4, 0, 1, 3, 2]);

console.log("Result: ", result);
