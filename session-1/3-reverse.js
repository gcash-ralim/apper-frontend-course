// 3. Write a function named reverse that, when given an input string, returns the reversed version of that string. Use traditional for loop. Name this file 3-reverse.js.

// ------------ START OF ACTUAL CODE ------------

// First method: Using for loop by decrementation
function reverse1(word) {
    var newWord = ""                                // create an empty var first. we will place the reversed word here
    for (var i = word.length-1; i >= 0; i--) {      // with 'i = word.length-1,' our starting point will be the last character of string
        newWord += word[i]                          // for each iteration (decrement), we will be adding the character in the var until the first character of string
    }
    return newWord
}

// Second method: Using different built-in functions
function reverse2(word) {
    const wordArray = word.split("")              // split each character and store them in an array
    const reverseArray = wordArray.reverse()      // reverse the array
    const combineArray = reverseArray.join("")    // join all elements of the array
    return combineArray
}

const word = 'hello'
const reversedWord1 = reverse1(word)    // using first method
const reversedWord2 = reverse2(word)    // using second method
console.log(reversedWord1) // 'olleh'
console.log(reversedWord2) // 'olleh'

// ------------ END OF ACTUAL CODE ------------