
// let i = 0;
// let j = 0;
// let n = 5;

// while (i < n) {
//   let space = "";
//   let star = "";
//   for (j = 0; j < n - i; j++) {
//     space += ".";
//   }
//   for (j = 0; j < 2 * i + 1; j++) {
//     star += "*";
//   }
//   console.log(space + star);
//   i++;
// }

// let n = 5;
// let e = '';
// for (let i = 1; i <=n; i++) {
//   for (let j = i; j <= n; j++) {
//     e += " ";
//   }
//   for (let j = 1; j < i; j++) {
//     e += "*"
//   }
//   for (let j = 1; j <= i; j++) {
//     e += "*"
//   }
//   e += '\n'
// }
// console.log(e)

// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая).
// Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары

// //  let arr = [")", "{", "(", "(", ")", ")", "}", "[", "]", "("];
 let arr = ['{', '(', '(', ')', ')', '}', '[', ']'];
// // let arr = ['{', '(', '(', ')', ')', '}', '[', '[', ')'];
// let sum1 = 0;
// let sum2 = 0;
// let a = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
//     sum1 = sum1 + 1;
//   }
//   if ((sum1 > 0) && (arr[i] == ")" || arr[i] == "]" || arr[i] == "}")) {
//   sum2 = sum2 + 1;
// }
// }
// if (sum1 == sum2) {console.log('yes')}
// else (console.log('no'))

//v.2
let countOpen = 0;
let countClose = 0;
let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "(") countOpen += 1;
//     else if (arr[i] == "(") countClose +=1;
//     result = countOpen - countClose;
//     console.log(result);
//     if (result < 0) {
//         console.log('Wrong sequence');
//         break;
//     }
    
// };
// if (countOpen == countClose) {
//     console.log('equal');
// }
// else console.log('not equal');

//v.3
for (let i in arr) {

    if (arr[i] == '(') result++;
    else if (arr[i] == '(') result--;
    if (result < 0) {
        console.log("Wrong sequence");
        break;
    }
}
if (result == 0) console.log("Equal");
else if (result > 0) console.log('Not equal');

// 2. Нарисуйте елочку
//      *
//    ***
//   *****
//  *******
// *********

// let elka = "";
// let space = " ";
// let x = 5;
// let sum = 1;
// for (let i = 1; i <= x; i++) {
//   elka += space.repeat(x - i) + "*".repeat(sum) + '\n';
//   sum += 2;
// }
// console.log(elka);




// 3. Нарисуйте треугольник
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

// let str = '';
// let space = " ";
// let x = 5;
// for (let i = 1; i <= x; i++) {
//     let num = i;
//     for (let j = 1; j <= i; j++) {
//         str += num + space;
//         num = num + (x - j);
//     }
//     str += '\n'
// }
// console.log(str)







// 1
// let str1 = "";
// let x = 5;
// for (let i = 1; i <= x; i++ ) {
//   for (let j = 1; j <= i; j++) {
//     str1 += j;
//   }
//   str1 += ('\n');
// }
// console.log(str1);


// Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1
// let romb = "";
// let x = 10;
// let space = " ";
// for (let i = 1; i <= x; i++) {
//     romb += space.repeat(x-i);
//     for (let j = 1; j <= i; j++) {
//         if (j == 10) {
//             romb += 0;
//         } else {romb += j}
//     }
//     for (let j = i - 1; j >= 1; j--) {
//         romb += j;
//     }
//     romb += "\n";
// }
// for (let i = 1; i<= x; i++) {

//     romb += space.repeat(i);
//     for (let j= 1; j <= x+ 1 - i; j++) {
//        if (j == 10) {
//             romb += 0;
//         } else {romb += j}
//     }
//     for (let j = x - i; j >= 1; j--) {
//         romb +=j;
//     }
//     romb += "\n";
// }
// console.log(romb);

// //4
// let dayDistance = 3;
// let nightDown = -2;
// let distance = 0;
// let days = 0;
// let wall = 5;
// while ((distance += dayDistance) <= wall) {
//     days++;
//     console.log( `Current distance at the end of the day for day ${days} is ${distance}`);
//     // if (distance == wall) console.log('Ok');
//     // else console.log('Go forward!');
//     distance += nightDown;
// }