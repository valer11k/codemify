// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.

function findCommonElements (arr1, arr2){
    let result = [];

    for (i = 0; i < arr1.length; i++){
        if (arr1.includes(arr2[i]))
            result.push(arr2[i])
    }return result;
}

// Usage examples:
console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []