// ---#1---
// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Admin",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так:
// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

// let login = prompt('Введіть логін');
// console.log(login);

// if (login === 'Admin') {
//   const password = prompt('Введіть пароль');
//   if (password === 'I am admin') {
//     console.log('HELLO');
//   } else {
//     console.log('wrong pass');
//   }
// } else if (login === null || login === '') {
//   console.log('cancel');
// } else {
//   console.log('I dont know you');
// }

// ---#2---
// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у prompt і в консоль отримуємо
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const lang = prompt('Введіть мову програмування') ?? '';
// console.log(lang);

//1 const lang = prompt('Введіть мову програмування');
//1 console.log(lang);
//1 switch (lang?.toLowerCase())
// switch (lang.toLowerCase()) {
//   case 'php':
//     console.log('PHP Расмус Лердорф');
//     break;
//   case 'c#':
//     console.log(
//       'C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота'
//     );
//     break;
//   case 'swift':
//     console.log('Swift Кріс Латтнер');
//     break;
//   case 'js':
//     console.log('JS Брендан Ейх');
//     break;
//   case 'java':
//     console.log('Java Джеймс Гослінг');
//     break;
//   case 'python':
//     console.log('Python Гвідо ван Россум');
//     break;
//   default:
//     console.log('Not found');
// }

// ---#3---
// Напишіть через світч калькулятор
// Потрібно ввести перше число в prompt, потім математичну операцію
// Тоді ввести наступне число

// const firstNumber = prompt('Enter first number:');
// const secondNumber = prompt('Enter second number:');
// const operation = prompt('Enter +,-,*,/');

// let result = 0;

// switch (operation) {
//   case '+':
//     result = firstNumber + secondNumber;
//     break;
//   case '-':
//     result = firstNumber - secondNumber;
//     break;
//   case '*':
//     result = firstNumber * secondNumber;
//     break;
//   case '/':
//     result = firstNumber / secondNumber;
//     break;

//   default:
//     console.log('Error');
// }
// console.log(result);

// ---#4---
//Напишіть цикл, який виводить у консоль
//1. числа від max до min за спаданням
//2. Виведіть у консоль усіх парні числа від min до max
//3. За допомогою циклу for додайте всі парні числа від min до max
//const max = 90;
//const min = 33;

// const max = 90;
// const min = 33;
// // 1.
// // for (let i = max; i >= min; i -= 1) {
// //   console.log(i);
// // }
// // 2.
// // for (let i = min; i <= max; i -= 1) {
// //   if (i % 2 === 0) {
// //     console.log(i);
// //   }
// // }
// // 3.
// for (let i = min; i <= max; i -= 1) {
//   if (i % 2 === 0) {
//     total += 1;
//   }

// ---#5---
// Напишіть програму, щоб обертати рядок введений в propmt у зворотньому напрямку
// При цьому потрібно залишити першу літеру на своєму місці

// const string = prompt('Введіть рядок:');
// console.log(string);
// let reversString = '';
// for (let i = string.length - 1; i > 0; i -= 1) {
//   const letter = string[i];
//   reversString += letter;
// }
// console.log(string[0] + reversString);

// const string = prompt('Введіть рядок:');
// console.log(string);
// let reversString = '';
// for (let i = string.length - 1; i > 0; i -= 1) {
//   const letter = string[i];
//   reversString += letter;
// }
// console.log(reversString);
// console.log(string.split('').reverse().join(''));

// ---#6---
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.

// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."

// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// let number = prompt('Enter number:');
// let total = 0;
// while (number !== null) {
//   const num = Number(number);
//   if (!isNaN(num)) {
//     total += num;
//   }
//   number = prompt('Enter number:');
// }
// console.log(total);

// ---#7---
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// do {
//   let number = prompt('Enter number:');
//   if (number > 100 || number === 'null') {
//     break;
//   }
// } while (true);

// ---#8---
