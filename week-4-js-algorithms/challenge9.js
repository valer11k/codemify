// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.

function findLongestWord (string) {
   let word = string.split(' ');
   let lengthOfWord = 0

   for (i = 0; i < word.length; i ++){
      if (word[i].length > lengthOfWord)
         lengthOfWord = word[i].length
   } return lengthOfWord
}
   

   




   // Usage examples:
console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7