//Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you.
function compareAge(name,age) {
    if (age > 23) {
        return `${name} is older than me`
    } else if (age === 23) {
        return `${name} is the same age as me`
    }  else {
        return `${name} is younger than me`
    }
}


console.log(compareAge("Joel", 23)) // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 22)) // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28)) // ➞ "Lily is oder than me."