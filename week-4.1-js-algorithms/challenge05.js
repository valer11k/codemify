// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements removed.

function removeDuplicates (array){
    let result = [...new Set(array)];
    return result;
} 
// Usage examples:
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]