//Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you.
function compareAge(name,age) {
    const myAge = 23
    if (age == myAge)  {
        return `${name} is the same age as me`
    } else if (age > myAge) {
        return `${name} is older than me`
    } else  {
       return `${name} is younger than me`
    }
}


console.log(compareAge("Joel", 25)) // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 22)) // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 23)) // ➞ "Lily is oder than me."