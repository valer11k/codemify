// Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.

function  flattenArray (array){
    let result = array.flat();
    return result;
} 

// Usage examples:
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]
