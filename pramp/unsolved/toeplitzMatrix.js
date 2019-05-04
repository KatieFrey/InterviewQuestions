/*

Toeplitz Matrix
A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

For example,

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.


*/

function isToeplitz(arr) {
  /**
	@param arr: integer[][]
	@return: boolean
	*/

  // your code goes here

  let currentElement = arr[0];
  let nextElement = arr[1];

  while (nextElement) {
    for (let i = 0; i < currentElement.length; i++) {
      if (currentElement[i] !== nextElement[i + 1]) {
        return false;
      }

      currentElement = nextElement;
      //nextElement = nextElement.next;
    }
  }
  return true;
}
