// Finish the function. It should accept two parameters and return the larger one.
function returnLarger (parameterFirst, parameterSecond) {
    if (parameterFirst > parameterSecond){
        return parameterFirst
    } else {
        return parameterSecond
    }
};

const result = returnLarger(30,20);
console.log(result);

console.log(returnLarger(5, 1))
console.log(returnLarger(23, 51))
