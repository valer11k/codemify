// Challenge 2: Concatenate Array Elements
// Write a function that takes an array of strings and concatenates all the elements into one string.

function concatenateElements(array) {
  let result = "";
  for (i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
}

// Usage examples:
console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"
