// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.

function findLongestString(array) {
  let string = array[0];

  for (i = 0; i < array.length; i++) {
    if (array[i].length > string.length) {
      string = array[i];
    }
  }
  return string;
}

// Usage examples:
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
