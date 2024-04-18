// console.log(typeof Number('5'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number('25px'));
// console.log(typeof Number('kate'));
// console.log('2' / 2);
// console.log(5 + true);
// console.log(Number(false));
// console.log(2 != '2');
// console.log('Kate' < 'kate');
// const width = '25px';
// console.log(Number.parseInt(width));
// const height = '200.42px';
// console.log(Number.parseFloat(height));

// const value = 27.6;
// console.log(Math.floor(value)); // в меньшую
// console.log(Math.ceil(value)); // в большую
// console.log(Math.round(value));

// function add(x, y) {
//   const dayTotal = x * 8 * 1.25;
//   return dayTotal * y;
// }
// const petya = add(20, 20);
// const kate = add(20, 17);
// const yura = add(17, 21);

// console.log('petya:', petya);
// console.log('kate:', kate);
// console.log('yura :', yura);

// function foo() {
//   return 5;
// }
// const a = foo();
// console.log(a);

// if (null) {
//   console.log('Block if');
// } else {
//   console.log('Block else');
// }

// if (0) {
//   console.log('Block if');
// } else {
//   console.log('Block else');
// }

// if ('') {
//   console.log('Block if');
// } else {
//   console.log('Block else');
// }

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//     let numWeight = weight.replace(",", ".");
//     numWeight = Number.parseFloat(numWeight);
//     const numHeight = Number.parseFloat(height);
//     const bmi = numWeight / (numHeight ** 2);
//     return bmi.toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
// ExamplescountBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// const ExamplescountBy = (a, b) => {
//   const result = [];
//   for (let i = 0; i <= b; i++) {
//     result.push(a * i);
//   }
//   return result;
// };
// console.log(ExamplescountBy(2, 5));

// ?const countBy = (arr) => {
// ?    const result = []
//  ?   arr.reduce
// ? }

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// const num = (n, x, y) => {
//   return n % x === 0 && n % y === 0;
// };

// console.log(num(100, 5, 3)); // false

// const num = (n, x, y) => {
//   return n % x === 0 && n % y === 0
//     ? `${n} is divisible by ${x} and ${y}`
//     : `${n} is not divisible by ${x} or ${y}`;
// };

// console.log(num(100, 5, 3));

// TODO ==========

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rockScissorsPaper = (pOne, pTwo) => {
  pOne.toLowerCase();
    pTwo.toLowerCase();
    if (pOne === "scissors" && pTwo === "paper"
        || pOne === "paper" && pTwo === "rock"
        || pOne === "rock" && pTwo === "scissors") {
       return console.log("Player 1 won!");
    } else if {
            
        }
        
            
        }
};
