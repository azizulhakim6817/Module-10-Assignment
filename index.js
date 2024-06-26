/* (1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum. */
function calculateSum(x, y) {
  let sum = x + y;
  return sum;
}
let result = calculateSum(10, 20);
console.log(result);

/* (2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise. */
const isEven = (num) => {
  if (num == 0 || num % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
};
console.log(isEven(21));

/* (3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array. */ const findMax =
  (nums) => nums.reduce((acc, num) => (num > acc ? num : acc, nums[5]));
console.log(findMax([11, 10, 40, 23, 21, 60]));

/* (4) Write a function named ‘reverseString’ that takes a string and returns the string reversed. */
let reverseString = (stri) => stri.split("").reverse().join("");
console.log(reverseString("Mern Stack Development"));

/* (5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers. */
const filterOddNumber = (nums) =>
  nums.filter((num) => (num % 2 === 0 ? true : false));
console.log(filterOddNumber([1, 2, 3, 4, 33, 45, 50]));

/* (6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements. */
const sumArray = (nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(sumArray([3, 5, 7, 35, 35, 77, 3, 35, 67]));

/* (7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order. */
const sortArray = (nums) => nums.sort((a, b) => a - b);
console.log(sortArray([4, 8, 1, 2, 7, 8]));

/* (8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello" */

const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetter("hello"));
