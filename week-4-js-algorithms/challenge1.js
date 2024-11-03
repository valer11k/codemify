// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.

function findLongestString(array) {
  let str = [];

  for (i = 0; i < array.length; i++) {
    if (array[i].length > str.length) {
      str = array[i];
    }
  }
  return str;
}

// Usage examples:
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
