// Challenge 1: Find the Second Largest Number
// Write a function to find the second largest number in the array.

function findSecondLargestNumber(array) {
  let number = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      secondLargest = number;
      number = array[i];
    } else if (array[i] < number && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

// Usage examples:
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2
