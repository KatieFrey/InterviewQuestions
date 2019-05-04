/*
Array Index & Element Equality
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

Examples:

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.
*/

function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let i = Math.round((start + end) / 2);
    console.log(i);
    if (arr[i] - i < 0) {
      //If negative, we need to move i up
      start = i + 1;
    } else if (arr[i] - i === 0 && (i == 0 || arr[i - 1] - (i - 1) < 0)) {
      return i;
    } else {
      end = i - 1;
    }
  }
  return -1;
}

//Naive Approach
/*
function indexEqualsValueSearch(arr) {
  // your code goes here
  let index = -1;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === i) {
      index = i
      return index;
    }
  }
  return index;
}
*/
