/*
*********************************************************************************************

Given an array of integers of size N.
Find the size of smallest subarray containing both min and max elements of the given array

Example: 
  I/P: A = [1, 2, 3, 1, 4, 5, 6, 1, 3, 6]
  O/P: 3 ([1, 3, 6])
 
*********************************************************************************************
*/

"use strict";

function getMinSubArraySize(arr) {
  // First find the min and max of given array
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
    if(arr[i] < min) min = arr[i]
  }
  // Iterate over the array and find the size using the index of min and max elements
  let ans = Infinity;
  let minIdx = -1; let maxIdx = -1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === min) {
      minIdx = i;
      if(maxIdx !== -1) {
        ans = Math.min(ans, minIdx - maxIdx + 1);
      }
    }

    if(arr[i] === max) {
      maxIdx = i;
      if(minIdx !== -1) {
        ans = Math.min(ans, maxIdx - minIdx + 1);
      }
    }
  }
  return ans;
}

getMinSubArraySize([1, 2, 3, 1, 4, 5, 5, 1, 3, 6])