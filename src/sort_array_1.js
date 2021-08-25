/**
 * Given an array of size N, first N-1 elements are sorted. Sort the whole array
 *
 * Time complexity : O(n)
 * Space complexity: O(1)
 */

const A = [1, 2, 3, 6, 8, 15, 20, 14];

function sortArray(arr) {
  const length = arr.length;
  const lastElem = arr[length - 1];
  for (let i = length - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      arr[i] = arr[i - 1];
      arr[i - 1] = lastElem;
    }
  }
  return arr;
}

console.log(sortArray(A));
