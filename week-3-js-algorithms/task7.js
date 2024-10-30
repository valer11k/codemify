// Create the function. It should accept two string parameters and return the longer one
function longerString(str1, str2){
    //Using const  is better for maintance
    const stringOne = str1.length;
    const stringTwo = str2.length;
    if (stringOne > stringTwo) {
        return str1
    } else {
        return str2
    }
}


console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify

