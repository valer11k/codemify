// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.

function findLargestNumber(array) {
  let number = array[0];

  for (i = 0; i < array.length; i++) {
    if (array[i] > number) {
      number = array[i];
    }
  }
  return number;
}

// Usage examples:
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1
