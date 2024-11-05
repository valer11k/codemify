// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.

function sumNumbers(array) {
  let sum = array[0];

  for (i = 1; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

// Usage examples:
console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15
