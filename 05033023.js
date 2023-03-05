// ---1---
// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = [
//   'car.png',
//   'grass.png',
//   'avatar.png',
//   'user.png',
//   'sea.png',
//   'water.png',
//   'bird.png',
// ];
// const baseUrl = { domain: 'domain-name.com' };
// let uploadedFiles = [];

// const resultUploadedFiles = [
//   'domain-name.com/upload/car.png',
//   'domain-name.com/upload/grass.png',
//   'domain-name.com/upload/avatar.png',
//   'domain-name.com/upload/user.png',
//   'domain-name.com/upload/sea.png',
//   'domain-name.com/upload/water.png',
//   'domain-name.com/upload/bird.png',
// ];

// ---2---
// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// const tShirt = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }

// const jeans = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// }

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   }
// ];

// const tShirt = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// };

// const jeans = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// };

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
// ];

// function addItemToBasket(product) {
//   const currentProduct = basketItems.find(item => item.id === product.id);
//   console.log(currentProduct);

//   if (currentProduct) {
//     return basketItems.map(item => {
//       if (item.id === product.id) {
//         console.log(item);
//         return {
//           ...item,
//           count: item.count + 1,
//         };
//       }
//       return item;
//     });
//   } else {
//     return [...basketItems, product];
//   }
// }

// console.table(basketItems);
// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(jeans);

// console.table(basketItems);

// ---4---
// Маючи набір усіх елементів вашого списку бажань, обчисліть, скільки коштуватиме, щоб просто купити все одразу

// function shoppingSpree(arr) {
//   // your code here
// }
//
// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "World tour", price: 25000 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
//
// console.log(shoppingSpree(wishlist)); // 227005

// ----
// Напишіть функцію, яка повертає об'єкт, що складається зі значень вкладених масивів. Перше значення – ключ, друге – зачення.
// Очікуваний результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

// function makeObj(arr) {
//   return arr.reduce((acc, [key, value]) => {
//     acc[key] = value;
//     return acc;
//   }, {});
// }

// console.log(
//   makeObj([
//     ['a', 1],
//     ['b', 2],
//   ])
// );

// ---5---
// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const link = 'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';
const url = new URL(link);
console.log(url);
const { search } = url;
console.log(search);

// ===6===
// Напишіть функцію для видалення елементів із корзини

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
//   {
//     id: 33,
//     title: 'T-shirt',
//     price: 99,
//     count: 1,
//   }
// ];

// ==============
// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]

// ==============
// Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

// function totalVotes(arr) {
//   // your code here
// }
//
// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// console.log(totalVotes(voters)); // 7

// ==============
// Сортувати у порядку за зменшенням і за збільшенням
//
// let arr = [5, 2, 1, -10, 8];
//
// // ... ваш код для сортування за спаданням
//
// console.log(arr); // 8, 5, 2, 1, -10

// ==============
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = {name: "Bruce", age: 25};
// let jhon = { name: "Jhon", age: 30};
// let maria = { name: "Maria", age: 28};
//
// let arr = [ bruce, jhon, maria ];
//
// sortByAge(arr);

// ==============
// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

// const input = 'Every developer likes to mix kubernetes and javascript';
// Result
// 'E3y d7r l3s to mix k8s and j8t'

// ==============

// Задачка. кому цікаво.
// я довго длубався у самому початку. не дуже розумів з чого почати - як щось повернути.
// але методом тику вийшло. в неті не знайшов відповідь.
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// ==============
// Напишіть функцію додавання необмежених чисел
// Функція addNumber() повертає суму всіх чисел, переданих як аргументи функції.
//
// console.log(addNumber(2,4,5)) // 11
// console.log(addNumber(10,45,34,130)) // 219

String.prototype.toAlternatingCase = function () {
  console.log(this);
};

// ==============
// Порахувати суму кожного додятнього елемента
// Якщо дані вхідні дані є масивом чисел, повернути суму всіх додатніх. Якщо масив порожній або в ньому немає додатних чисел, поверніть 0.
//

// const input = [ 1, -4, 12, 0, -3, 29, -150];
// Result
// 42

// Маючи масив потенційних виборців, поверніть об’єкт, що представляє результати голосування
// Включіть, скільки потенційних виборців було у віці 18-25 років, скільки від 26-35 років, скільки від 36-55 років, і скільки з кожного з цих вікових діапазонів фактично проголосували.
//   Отриманий об’єкт, що містить ці дані, повинен мати 6 властивостей. Дивіться приклад виведення внизу.

// ==============
const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

function voterResults(arr) {
  arr.sort((a, b) => a.age - b.age);

  // your code here
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// / Маючи масив потенційних виборців, поверніть об’єкт, що представляє результати голосування
// Включіть, скільки потенційних виборців було у віці 18-25 років, скільки від 26-35 років, скільки від 36-55 років, 
// і скільки з кожного з цих вікових діапазонів фактично проголосували.
//   Отриманий об’єкт, що містить ці дані, повинен мати 6 властивостей. Дивіться приклад виведення внизу.



const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
  const young = [];
  const middle = [];
  const old = [];

  arr.forEach(element => {
    if(element.age <= 25) {
        young.push(element);
    }
    if(element.age > 25 && element.age <= 35) {
        middle.push(element);
    }
    if(element.age > 35 && element.age <= 55) {
        old.push(element);
    }
  });

  console.log(young);
    console.log(middle);
    console.log(old);

    return { numYoungVotes: young.filter(el => el.voted).length,
        numYoungPeople: young.length,
        numMidVotesPeople:middle.filter(el => el.voted).length,
        numMidsPeople: middle.length,
        numOldVotesPeople: old.filter(el => el.voted).length,
        numOldsPeople: old.length,
      }
}



console.log(voterResults(voters));