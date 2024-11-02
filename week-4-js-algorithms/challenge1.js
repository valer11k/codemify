// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.

function findLongestString(array) {
  longestString = "";
  for (let index = 0; index < array.length; index++) {
    if (array[index].length > longestString.length) {
      longestString = array[index];
    }
  }
  return longestString;
}

// Usage examples:
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
