// Move Zeros To End
// Given a static-sized array of integers arr, move all zeroes in the array to the end of the array. You should preserve the relative order of items in the array.

// We should implement a solution that is more efficient than a naive brute force.

// Examples:

// input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
// output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

function moveZerosToEnd(arr) {
  /**
	@param arr: integer[]
	@return: integer[]

  0 5 1
  counter = 0
  newArray = []
  loop through the array
  condition(if the element does not equal 0) push the element into the newArray
  else counter++

  loop i = 0; i <= counter; i++
  newArray.push(0)
  return newArray




  looping through the array
  if(currentNum = 0){
 [4,6,0,0,1,2]


  }
   0 0 1

	*/
  // your code goes here
  let counter = 0;
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum !== 0) {
      newArray.push(currentNum);
    } else {
      counter++;
    }
  }

  for (let j = 0; j < counter; j++) {
    newArray.push(0);
  }
  return newArray;
}
