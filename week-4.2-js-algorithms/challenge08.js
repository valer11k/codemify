// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an array.

function findMostFrequentElement(array) {
  let mostFrequent = null;
  let maxCount = 0;

  array.forEach((element) => {
    // Count how many times `element` appears in the array using filter
    const count = array.filter((item) => item === element).length;

    // If this count is higher than the current maxCount, update mostFrequent and maxCount
    if (count > maxCount) {
      mostFrequent = element;
      maxCount = count;
    }
  });

  return mostFrequent;
}

// Usage examples:
// console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
// console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
// console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5
