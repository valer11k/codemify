// Challenge 4: Check If Array Contains Element
// Write a function that takes an array and an element, and checks if the array contains that element.

function containsElement(array, element) {
  if (array.includes(element)) {
    return true;
  } else return false;
}

// Usage examples:
console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
console.log(containsElement(["a", "b", "c", "d"], "e")); // false
