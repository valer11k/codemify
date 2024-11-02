// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.

function findLargestNumber(array) {
  let largestNumber = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > largestNumber) {
      largestNumber = array[index];
    }
  }
  return largestNumber;
}
// Usage examples:
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1
