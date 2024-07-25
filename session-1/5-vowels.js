// 5. Write a function that returns only vowels with a given input string. Name this function convertToVowels. Name this file 5-vowels.js.

// ------------ START OF ACTUAL CODE ------------

function convertToVowels(word) {
    var vowelWord = ""      // create an empty var where the word with only vowels will be placed
    // use for loop to check each character of the word
    for (var i = 0; i < word.length; i++) {
        // checks if current character is any of the vowels; if yes, they will be appended to the var
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            vowelWord += word[i]
        }
    }
    return vowelWord
}
  
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo

// ------------ START OF ACTUAL CODE ------------