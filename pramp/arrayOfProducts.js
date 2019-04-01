// Array of Array Products
// Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s time and space complexities.

// Examples:

// input:  arr = [8, 10, 2]
// output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

// input:  arr = [2, 7, 3, 4]
// output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]

function arrayOfArrayProducts(arr) {
  // your code goes here

  /*
  if(arr.length === 1) return [];
  let outputArray = []
  for(let i = 0; i < arr.length; i++) {
    let product = 1;
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        product = product * arr[j];
      }
    }
    outputArray.push(product);
  }
  return outputArray;
  */

  let n = arr.length;

  if (n === 0 || n === 1) return [];

  let outputArray = [];
  let product = 1;

  for (let i = 0; i < n.length - 1; i++) {
    outputArray[i] = product;
    product = product * arr[i];
  }
  for (let i = n.length - 1; i > 0; i--) {
    outputArray[i] = outputArray[i] * product;
    product = product * arr[i];
  }
  return outputArray;
}

//[8,8,10,2]
