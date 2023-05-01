// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
// // let arr2 = [];
// let fruits = ['apple', 'grape', 9, 7, 'pear']

// let greeting = function show() {
//     console.log('Hello')
// }

// function createArrayOfNumbers(array) {
//     let arr2 = [];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "number") {
//         if (array[i] == 88) {
//             continue;
//         }
//         arr2.push(array[i])
//     }
    
// }
// greeting()
// return arr2;


// }
//  console.log(createArrayOfNumbers(arr))
// // console.log(createArrayOfNumbers(fruits))

// let addNum = function sumNumber(a, b, c = 0) {
//     //let result = a + b + c;
//     return a + b + c;
// }
// //console.log(sumNumber(2, 4, 5));
// console.log(addNum(2, 3, 4));

// let sumNum = (number1, number2, number3) => number1 + number2 + number3;
// let result = sumNum(1,2,3);
// console.log(sumNum(1,2,3));
// console.log(result);

// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 88, 'red', 1];
// // function indexOfNumber(array, n) {
// //     for (let i = 0; i< array.length; i++) {
// //         if (array[i] === n) {
// //             return i;
// //         } else {
// //             return -1;
// //         }
// //     }
// // }
// // console.log(indexOfNumber(arr,44));
// console.log(arr.indexOf(88));

// let bmi = (weight, height) =>  +(weight/height**2).toFixed(2)
// console.log(bmi(55, 1.62))

// let C = F => +((F -32) * 5/9).toFixed(1);
// console.log(C(100))

let a = -10;
console.log(Math.abs(a))