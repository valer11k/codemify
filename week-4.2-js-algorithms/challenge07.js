// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.

function areAllElementsUnique(array) {
  let newArray = [...new Set(array)];
  return newArray.length === array.length;
}

// Usage examples:
console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true
