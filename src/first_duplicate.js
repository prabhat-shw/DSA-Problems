/*
*********************************************************************************************

Given an array a that contains only numbers in the range from 1 to a.length,
find the first duplicate number for which the second occurrence has the minimal index.
In other words, if there are more than 1 duplicated numbers,return the number for which the
second occurrence has a smaller index than the second occurrence of the other number does.
If there are no such elements, return -1.

Example: 
  I/P: A = [2, 1, 3, 5, 3, 2]
  O/P: 3 
 
*********************************************************************************************
*/

function firstDuplicate(a) {
  const hash = {};
  for (let i = 0; i < a.length; i++) {
    if (hash[a[i]] !== undefined) {
      return a[i];
    } else {
      hash[a[i]] = true;
    }
  }
  return -1;
}

firstDuplicate([2, 2]);
