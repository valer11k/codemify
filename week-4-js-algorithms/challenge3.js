// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.

function findDollarStrings(array) {
  let dollar = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("$")) {
      dollar.push(array[i]);
    }
  }
  return dollar;
}

// Usage examples:
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []
