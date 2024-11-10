// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.

function removeSpecificElement(array, param) {
  let result = array.filter(value => value !== param);
  return result;
}
// Usage examples:
console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]
