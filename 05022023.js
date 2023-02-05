// debugger;

// ---1---
// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };

// const checkKey = (key) => {
//   const keys = Object.keys(obj);
//   for (const el of keys) {
//     if (el === key) {
//       return true;
//     }
//   }
//     return false;

//     return Object.keys(obj).includes(key)

//     return obj.hasOwnProperty(key)

//     return key
// };

// console.log(checkKey('Jhon'));
// console.log(checkKey('name'));

// ---2---
// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.

// const checkTypes = (value) => {
//   return typeof value;
// };

// const checkTypes = (value) => {
//   if (Array.isArray(value)) {
//     return 'Array';
//   }
//   return typeof value;
// };

// const checkTypes = (value) => {
//   if (Array.isArray(value)) {
//     return 'Array';
//   } else if (value === null) {
//     return 'null';
//   }
//   return typeof value;
// };

// console.log(checkTypes(12));
// console.log(checkTypes('hello'));
// console.log(checkTypes(true));
// console.log(checkTypes(undefined));
// console.log(checkTypes({}));
// console.log(checkTypes([]));
// console.log(checkTypes(null));

// ---3---
// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   const copyObj = { ...obj };
//   for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   return copyObj;
// }
// // console.log(menu);
// // multiplyNumeric(menu);
// console.log(multiplyNumeric(menu));
// console.log(menu);
// // після виклику функції

// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: 'My menu',
// // };

// --- 4---
//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

// const calcSalarySum = (obj) => {
//   //   let sum = 0;
//   //   for (const value of Object.values(obj)) {
//   //     sum += value;
//   //   }
//   //   return sum;

// };
// const calcSalarySum = (obj) => {
//   return Object.values(obj).reduce((acc, number) => acc + number, 0);
// };
// console.log(calcSalarySum(salaries));

// --- 5---
//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 6 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (array, stoneName) => {
//   for (const { name, price, quantity } of array) {
//     // console.log(stone);
//     if (stoneName === name) {
//       return price * quantity;
//     }
//   }
//   return 'Not found';
// };
// const calcTotalPrice = (array, stoneName) => {
//   const currentStone = array.find(({ name }) => name === stoneName);
//   if (currentStone) {
//     const { price, quantity } = currentStone;
//     return price * quantity;
//   }
//   return 'Not found';
// };

// // calcTotalPrice(stones, 'Emerald');
// console.log(calcTotalPrice(stones, 'Emerald'));
// console.log(calcTotalPrice(stones, 'Ruby'));

// ---5---
// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// const sumInput = () => {
//   let resultArr = [];
//   let total = 0;
//   while (true) {
//     const input = prompt('Enter Number');
//     const number = Number(input);
//     if (input === null || isNaN(number) || input === '') {
//       break;
//     }
//     resultArr.push(number);
//   }
//   for (let number of resultArr) {
//     total += number;
//   }
//   console.log(total);
// };

// sumInput();

// ---6---
// Напишіть код, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// // arr = deleteElement(arr, 56);
// // console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

// const deleteElement = (arr, removeItem) => {
//   const resultArray = [...arr];
//   arr.forEach((element, index) => {
//     if (element === removeItem) {
//       removeArray.splice(index, 1);
//     }
//   });
//   return resultArray;
// };
// console.table(arr);
// arr = deleteElement(arr, 56);
// console.table(arr); //[23, 4, 78, 5, 63, 45, 210]

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// const deleteElement = (arr, removeItem) => {
//   return arr.filter((element) => element !== removeItem);
// };
// console.table(arr);
// arr = deleteElement(arr, 56);
// console.table(arr); //[23, 4, 78, 5, 63, 45, 210]

// ---7---
// Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunkArray = (data, value) => {
//   const resultArey = [];
//   for (let i = 0; i < data.length; i += value) {
//     const chang = data.slice(i, value + i);
//     resultArey.push(chang);
//   }
//   return resultArey;
// };

// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// ---8---
// Залишити унікальні елементи масиву
// Нехай arr – масив рядків.
// Напишіть функцію unique(arr), яка повертає масив, що містить лише унікальні елементи arr.

// function unique(arr) {
//   const resultArr = [];
//   for (let item of arr) {
//     if (!resultArr.includes(item)) {
//       resultArr.push(item);
//     }
//   }
//   return resultArr;
// }

function unique(arr) {
  return [...new Set(arr)];
}
let strings = [
  'торт',
  'тортик',
  'кекс',
  'сир',
  'бутерброд',
  'сир',
  'шоколад',
  'кекс',
  'масло',
  'олія',
  'торт',
];
console.log(strings);
console.log(unique(strings));
