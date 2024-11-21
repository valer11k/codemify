// // Strings
// let name = 'Valeriia';
// console.log(`Hello, ${name}`);
// console.log(`the result is ${1+2}`);

// // Objects
// apple = {
// color:'yellow and green',
// weight: 0.22,
// ripeness: 'ripe',
// 'contains worm': 'no'
// };
// console.log(apple['contains worm']);

// //Arrays
// let fruits = ['Apple', 'Mango', 'Banana'];
// fruits [0] = 'Peach'; // replace an element
// fruits[3] = 'Kiwi'; // add an element
// console.log(fruits[3]);
// console.log(fruits.length);

// //An array can store elements of any type
// let arr = ['Mango', {name:'Valeriia'}, true, function() {
// console.log('hello');
// return 'returned hello'
// }];
// console.log(arr[1].name);
// console.log(arr[3]()); // Since the function doesn't have a return statement, it returns undefined by default.
// console.log(arr[3]());

// //Methods pop/push, shift/unshift
// let arrFruits = ['Apple', 'Orange', 'Mango'];
// console.log(arrFruits.pop()); // Pop extracts the last element of the array and returns it
// console.log(arrFruits);

// let arrFruits2 = ['Apple', 'Orange', 'Mango'];
// // The .at() method allows for positive and negative integer indices. When using a negative index like -1, it starts counting from the end of the array.*/console.log(arrFruits2.at(-1));
// console.log(arrFruits2.at(-1));

// // Push Append the element to the end of the array (can add multiple elements at once)
// let veggies = ['Tomato', 'Cucucmber'];
// veggies.push('Asparagus');
// console.log(veggies);

// // Shift Extracts the first element of the array and returns it
// let cars = ['Toyota', 'BMW', 'Lanos']
// console.log(cars.shift());
// console.log(cars);

// // Unshift Add the element to the beginning of the array
// let colors = ['blue', 'yellow', 'red']
// console.log(colors.unshift('purple', 'green'));
// console.log(colors);

// /*Loops

// For loop (classic way)
// The traditional for loop lets me iterate over an array using indexes. i have full control over the loop, can access both the index and the element, and it's great when i need to know the index
// Use when i need access to both the index and the value */
// let mood = ['happy', 'upset', 'excited']
// for (let i = 0; i < mood.length; i++){
//     console.log(mood[i])
// }

// /*More about loops
// The While loop
// The condition is checked before the loop body is executed
// If the condition is initially false, the loop may never run
// A single execution of the loop body is called an iteration
// The loop in the example above makes three iterations*/
// let i = 0;
// while (i < 3) {
// console.log( i );
// i++;
// }

// // let b = 3;
// // while (b) { // when i becomes 0, the condition becomes falsy, and the loop stops
// // console.log( b );
// // b--;
// // }

// // The do...while loop is not used often
// // The condition is checked after the loop body is executed.
// // The loop body will always execute at least once, even if the condition is false initially

// // let c = 5;
// // do {
// //   alert(c);  // This will run once, even though the condition is false
// // } while (c < 3);

// // The For loop
// // It allows me to repeat a block of code a specific number of times and provides a compact way to manage the starting point, the stopping condition, and how the loop progresses
// for (let i = 0; i < 3; i++) {
//     console.log(i);  // Displays the current value of `i`
//   }

// // For..of loop (modern approach)
// // It doesn’t give me access to the index, just the values
// // when i only need the values and don’t care about the index
// // let positiveMood = ['happy', 'optimistic', 'excited']
// // for (positiveMood of positiveMood){
// //     console.log(positiveMood)
// // }

// //For..in loop (not recommended for arrays)
// //it is generally used for objects, not arrays. It iterates over all properties, including non-numeric properties in objects. For arrays, it will give you indexes instead of values
// // Avoid for..in for arrays, and use it only for objects.
// // let negativeMood = ['upset', 'sad', 'angry']
// // for (key in negativeMood){
// //     console.log(negativeMood[key])
// // }

// // Internals
// // let beans = ['black']
// // let arrBeans = beans;
// // console.log(arrBeans === beans);
// // arrBeans.push('pinto');
// // console.log(arrBeans);

// /* What is a callback in JavaScript?
// A callback is a function passed as an argument of another function.

// Challenge 1: Find the Second Largest Number
// Write a function to find the second largest number in the array.

function findSecondLargestNumber(arr) {
  let largestArray = arr[0];
  let secondLargest= -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestArray) {
      largestArray = arr[i];
    }
  } for (let i = 0; i < arr.length; i++) {
    if(arr[i] > secondLargest && arr[i] < largestArray){
      secondLargest = arr[i]
    }
  }    return secondLargest

}

// Usage examples:
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2

// Challenge 2: Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.


function isPalindrome(words) {
  return words.filter(function (word) {
      let palindrome = word.toLowerCase(); 
      let reverseWord = palindrome.split('').reverse().join(''); 
      return palindrome === reverseWord; 
  });
}


// Usage examples:
console.log(isPalindrome(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
console.log(isPalindrome(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
console.log(isPalindrome(["apple", "banana", "cherry"])); // []
//Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.
// Usage examples:
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
// console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]
// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.
// Usage examples:
// console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
// console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
// console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []
// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.
// Usage examples:
// console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
// console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
// console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]
// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Usage examples:
// console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
// console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
// console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")
// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.
// Usage examples:
// console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
// console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
// console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true
// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an array.
// Usage examples:
// console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
// console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
// console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5
// Challenge 9: Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.
// Usage examples:
// console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
// console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
// console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []
// Challenge 10: Merge Two Arrays
// Write a function that takes two arrays and merges them into one.
// Usage examples:
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]
// console.log(mergeArrays([10, 20, 30], [40, 50, 60])); // [10, 20, 30, 40, 50, 60]
