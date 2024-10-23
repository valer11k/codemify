// Create the function. It should accept two string parameters and return the longer one
function longerString (parameterFirst, parameterSecond) {
    if (parameterFirst.length > parameterSecond.length){
        return parameterFirst
    } else {
        return parameterSecond
    }
};

const result = longerString('Hello', 'Worlds');
console.log(result);

console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify