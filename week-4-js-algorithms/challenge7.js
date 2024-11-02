// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.

function convertNumbersToStrings (array) {

    let numbers = [];

    for(i = 0; i < array.length; i ++) {
            numbers.push(array[i].toString())
    } return numbers
}

// Usage examples:
console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]
