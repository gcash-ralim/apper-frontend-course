// 4. Write a function called isPalindrome, that when given a string input, returns True if the string input is a palindrome, else False. A palindrome is a word that, when reversed, is the same word. Examples include racecar, deified, civic, radar, uwu, et al. Name this file 4-palindrome.js.

// ------------ START OF ACTUAL CODE ------------

function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase()      // convert first all characters into palindrome
    const reverseWord = lowerCaseWord.split('').reverse().join('')     // Just like in previous exercise, we will be using split, reverse, and join functions. Split first the word (now converted into lowercase characters) into characters as elements stored in array, reverse the array, and then join all elements.
    return reverseWord === lowerCaseWord     // check if it is palindrome by comparison
}

const words = ['racecar', 'Deified', 'CivIc', 'rAdar', 'UwU', 'eyyyy']      // store all sample words in array
// check all strings in array by using for loop
for (var i = 0; i < words.length; i++) {
    // if word is reversed, outputs it is a palindrome
    if (isPalindrome(words[i])) {
        console.log(`${words[i]} is a palindrome!`)
    }
    // if not, outputs it is not a palindrome
    else {
        console.log(`${words[i]} is not a palindrome!`)
    }
}

// ------------ END OF ACTUAL CODE ------------

// Note: If we have special characters, we can resort to the use of regex and replace() function.