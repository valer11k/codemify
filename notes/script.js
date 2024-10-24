// Strings

let name = 'Valeriia';
console.log(`Hello, ${name}`);

console.log(`the result is ${1+2}`);

// Objects

apple = {
    color:'yellow and green',
    weight: 0.22,
    ripeness: 'ripe',
    'contains worm': 'no'
}; 
console.log(apple['contains worm']);



//Arrays 

let fruits = ['Apple', 'Mango', 'Banana'];
fruits [0] = 'Peach'; // replace an element
fruits[3] = 'Kiwi'; // add an element 
console.log(fruits[3]);
console.log(fruits.length);

// An array can store elements of any type

let arr = ['Mango', {name:'Valeriia'}, true, function() {
    console.log('hello');
    return 'returned hello'
}];
console.log(arr[1].name);
console.log(arr[3]()); // Since the function doesn't have a return statement, it returns undefined by default.
console.log(arr[3]());

// Methods pop/push, shift/unshift

let arrFruits = ['Apple', 'Orange', 'Mango']; 
console.log(arrFruits.pop()); // Pop extracts the last element of the array and returns it
console.log(arrFruits);

let arrFruits2 = ['Apple', 'Orange', 'Mango']; 
/* The .at() method allows for positive and negative integer indices. When using a negative index like -1, it starts counting from the end of the array.*/console.log(arrFruits2.at(-1)); 
console.log(arrFruits2);

// Push Append the element to the end of the array (can add multiple elements at once)
let veggies = ['Tomato', 'Cucucmber'];
veggies.push('Asparagus');
console.log(veggies);

// Shift Extracts the first element of the array and returns it
let cars = ['Toyota', 'BMW', 'Lanos']
console.log(cars.shift());
console.log(cars);

// Unshift Add the element to the beginning of the array
let colors = ['blue', 'yellow', 'red']
console.log(colors.unshift('purple', 'green'));
console.log(colors);

// Loops 

// For loop (classic way)
//The traditional for loop lets me iterate over an array using indexes. i have full control over the loop, can access both the index and the element, and it's great when i need to know the index*/
// Use when i need access to both the index and the value
let mood = ['happy', 'upset', 'excited']
for (let i = 0; i < mood.length; i++){
    console.log(mood[i])
}

// For..of loop (modern approach)
// It doesn’t give me access to the index, just the values
// when i only need the values and don’t care about the index
let positiveMood = ['happy', 'optimistic', 'excited']
for (positiveMood of positiveMood){
    console.log(positiveMood)
}

//For..in loop (not recommended for arrays)
//it is generally used for objects, not arrays. It iterates over all properties, including non-numeric properties in objects. For arrays, it will give you indexes instead of values
// Avoid for..in for arrays, and use it only for objects.
let negativeMood = ['upset', 'sad', 'angry']
for (key in negativeMood){
    console.log(negativeMood[key])
}

// Internals
let beans = ['black']
let arrBeans = beans;
console.log(arrBeans === beans);
arrBeans.push('pinto');
console.log(arrBeans);




