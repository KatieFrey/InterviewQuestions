// Smallest Substring of All Characters
// Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

// Come up with an asymptotically optimal solution and analyze the time and space complexities.

// Example:

// input:  arr = ['x','y','z'], str = "xyyzyzyx"

// output: "zyx"

function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  const arrLen = arr.length;
  // The minimum length of substring should be given array's length.
  let lenOfSubStr = arrLen;
  const strLen = str.length;

  let startIdx = 0;
  let subStr;
  let match; // check if the substring have all characters of the given array
  let i;
  let val;

  // The maximum length of substring should not be bigger than the given str's length.
  // loop while increasing the length of substring
  // because it is to find the smallest one
  while (lenOfSubStr <= strLen) {
    subStr = str.substr(startIdx, lenOfSubStr);
    // if substring's length isn't the same with lenOfSubStr,
    // it means it can't get the length of the substring from startIdx for lenOfSubStr
    // so to check the next length of substring, set startIdx = 0 and increase lenOfSubStr
    if (subStr.length === lenOfSubStr) {
      match = true;
      // check if subStr have all characters of the given array
      for (i = 0; i < arrLen; i++) {
        val = arr[i];
        if (subStr.indexOf(val) === -1) {
          match = false;
          break;
        }
      }
      if (match) {
        return subStr;
      }
      startIdx++;
    } else {
      startIdx = 0;
      lenOfSubStr++;
    }
  }
  return "";
}
