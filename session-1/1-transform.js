// 1. Write a function named transform that accepts an array of integers, and returns an array in which all the elements are squared and sorted in ascending order. Name this file 1-transform.js.

// ------------ START OF ACTUAL CODE ------------

function transform(nums) {
    const newNums = nums.sort(function(a, b){return a-b}).map(num => num*num)
    // we used a sort compare function instead of the ordinary sort function since we are dealing with numbers (after the end of actual code shows a sample code of the other)
    return newNums
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)

// ------------ END OF ACTUAL CODE ------------

// To demonstrate why sort compare function is better for this case, an example below will shows  the use of sort() only
// function transform(nums) {
//     const newNums = nums.sort().map(num => num*num)
//     return newNums
// }

// const nums = [4,9,5,3,8,25,10] // Added 25 and 10
// const sortedSquaredNums = transform(nums)
// console.log(sortedSquaredNums)  // Outputs [100, 625, 9, 16, 25, 64, 81], which is incorrect