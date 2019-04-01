// Sentence Reverse
// You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]

function reverseWords(arr) {
  // your code goes here
  let n = arr.length;
  mirrorReverse(arr, 0, n - 1); //reverses the entire array from the outter rims slowly making its way inside

  let wordStart = null;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] === " ") {
      //if you hit a space
      if (wordStart !== null) {
        mirrorReverse(arr, wordStart, i - 1);
        wordStart = null;
      }
    } else if (i === n - 1) {
      if (wordStart !== null) {
        mirrorReverse(arr, wordStart, i);
      }
    } else {
      if (wordStart === null) {
        wordStart = i;
      }
    }
  }
  return arr;
}

function mirrorReverse(arr, start, end) {
  let tmp = null;
  //while (0 < arr.length -1)
  while (start < end) {
    tmp = arr[start]; //arr[0]
    arr[start] = arr[end]; //arr[0] = arr[arr.length -1]
    arr[end] = tmp;
    start++;
    end--;
  }
  return arr;
}
