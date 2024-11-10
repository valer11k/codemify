// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

function findLongestSubstringWithoutRepeats(str) {
  return str
    .split("")
    .filter((char, index, arr) => arr.indexOf(char) === index)
    .join("").length;
}

// Usage examples:
console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")
