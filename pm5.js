// ---1---
// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize("background-color", callback) == 'backgroundColor';
// camelize("list-style-image", callback) == 'listStyleImage';
// camelize("-webkit-transition", callback) == 'WebkitTransition';

// const camelize = (str, callback) => {
//   return str
//     .split('-')
//     .map((item, index) => (index === 0 ? item : callback(item)))
//     .join('');
// };

// const toUpper = str => {
//   str[0].toUpperCase() + str.slice(1);
// };

// console.log(camelize('background-color', toUpper));

// ---2---
// function abbrevName(name) {
//   return name
//     .split('')
//     .map(letter => letter[0])
//     .join('.');
// }
// console.log(abbrevName('Sam Harris'));

// ---3---
// var summation = function (num) {
//   let number = 0;
//   let total = 0;
//   while (number <= num) {
//     number += 1;
//     total += number;
//     console.log('number', number);
//     console.log('total', total);
//   }
//   return total;
// };

// console.log(summation(1));
// console.log(summation(8));

// ---4---
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2
// const numbers = [2, 5, 8, 8, 6, 4, 7, 8];

// const each = (array, callback) => {
//   const newNumbers = [];
//   array.forEach(item => {
//     newNumbers.push(callback(item));
//   });
//   return newNumbers;
// };
// const multiplyNumber = number => number * 2;

// console.log(each(numbers, multiplyNumber));

// ---5---
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// const makeShef = shefName => {
//   return function (dish) {
//     console.log('${shefName} is cooking ${dish}');
//   };
// };

// // const makeDish = function (shefName, dish) {
// //   console.log(`${shefName} is cooking ${dish}`);
// // };

// const mango = makeShef('Mango');
// mango('apple lie');
// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// ---6---
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається
// const savePassword = password => {
//   return function (userPassword) {
//     return userPassword === password;
//   };
// };

// const checkPassword = savePassword('12324');
// console.log(checkPassword('12324'));
// console.log(checkPassword('112345'));
// ---7---

// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter

// ---8---
// ---9---
// ---10---
