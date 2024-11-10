// Challenge 2: Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.

function findPalindromes(array) {
  let result = [];
  let word = "";

  for (let i = 0; i < array.length; i++) {
    word = array[i];
    let reverseWord = word.split("").reverse().join("");

    if (word === reverseWord) {
      result.push(word);
    }
  }

  return result;
}

// Usage examples:
console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
console.log(findPalindromes(["apple", "banana", "cherry"])); // []
