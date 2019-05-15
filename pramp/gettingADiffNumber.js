/*
Getting a Different Number
Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]

output: 4
*/

function getDifferentNumber(arr) {
  // your code goes here
  let sortedArray = arr.sort((a, b) => a - b);

  if (sortedArray[0] !== 0) return 0;

  for (let i = 0; i < sortedArray.length; i++) {
    let currentElement = sortedArray[i];
    if (currentElement != i) {
      return i;
    }
  }
  return sortedArray[sortedArray.length - 1] + 1;
}

/*
Sort the array

if zero isn't in the first element return 0;

Size of the array: if array[array.length - 1] is equal to array.length - 1

Loop through array and find

[0,1,2]


[1,3,0,2]


[1,0,3,4,5]


[1]
*/
