// Challenge 10: Merge Two Arrays
// Write a function that takes two arrays and merges them into one.

function mergeArrays(arr1, arr2) {
  let result = arr1.concat(arr2);
  return result;
}

// Usage examples:
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]
console.log(mergeArrays([10, 20, 30], [40, 50, 60])); // [10, 20, 30, 40, 50, 60]
