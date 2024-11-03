// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.

function findLongestWord(string) {
  let word = 0;
  let str = string.split(" ");

  for (i = 0; i < str.length; i++) {
    if (str[i].length > word) {
      word = str[i].length;
    }
  }
  return word;
}

// Usage examples:
console.log(findLongestWord("The quick brown fox")); // 5
console.log(findLongestWord("Hello world")); // 5
console.log(findLongestWord("")); // 0
console.log(findLongestWord("OneWord")); // 7
