/*
*********************************************************************************************

# Simplify Directory Path:
Given a string A representing an absolute path for a file (Unix-style).
Return the string A after simplifying the absolute path.

# Note:
Absolute path always begin with '/' ( root directory ).
Path will not have whitespace characters.

Example: 
  Input 1:
    A = "/home/"
  Output 1:
      "/home"

  Input 2:
      A = "/a/./b/../../c/"
  Output 2:
      "/c"
 
*********************************************************************************************
*/

function simplifyDirectoryPath(A) {
  const arr = A.split("/").filter((x) => x !== "");
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") {
      continue;
    } else if (arr[i] === "..") {
      ans.pop();
    } else {
      ans.push(arr[i]);
    }
  }
  return "/" + ans.join("/");
}

var result = simplifyDirectoryPath("/a/./b/../../c/");
console.log("Result: ", result);
