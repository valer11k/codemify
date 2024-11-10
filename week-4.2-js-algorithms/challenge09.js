// Challenge 9: Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.

function findIntersection(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

// Usage examples:
console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []
