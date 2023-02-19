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

// const makeCounter = () => {
//   let counter = 0;
//   return {
//     increment() {
//       counter += 1;
//     },
//     decrement() {
//       counter -= 1;
//     },
//     getValue() {
//       return counter;
//     },
//   };
// };

// const mainCounter = makeCounter();
// mainCounter.increment();
// mainCounter.increment();
// mainCounter.increment();
// mainCounter.decrement();
// console.log(mainCounter.getValue());
// ---8---
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function makeDiscount(discount) {
//   return function (summ) {
//     return summ - summ * (discount / 100);
//   };
// }

// const premiumDiscount = makeDiscount(50);
// const seasoneDiscount = makeDiscount(30);
// const clientDiscount = makeDiscount(5);

// console.log(premiumDiscount(10000));
// console.log(seasoneDiscount(10000));
// console.log(clientDiscount(10000));

// ---9---
// Виправте помилки, щоб код працював
// const jeans = {
//   price: 500,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// jeans.showPrice();

// const phone = {
//   price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();
// ---10---
// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(123));
// ---11---
// Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice() {
//   console.log(this.price);
// }

// const laptop = {
//   price: 1500,
// };
// showPrice.call(laptop);
// showPrice.apply(laptop);
// ---12---
// Даний об'єкт counter. Напишіть до нього getter та setter
// const counter = {
//   _count: 3,
//   get value() {
//     return this._count;
//   },
//   set value(newCount) {
//     this._count = newCount;
//   },
// };
// ---13---
//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   min() {},
//   mult() {},
//   div() {},
// };
// const calculator = {
//   read(a, b) {
//     (this.a = a), (this.b = b);
//   },
//   sum() {return this.a + this.b},
//   min() {return this.a - this.b;},
//   mult() {return this.a * this.b;},
//   div() {return this.a / this.b;},
// };
// parseString() {

//     const [firstOperand, operator, secondOperand ] = originalString.replaceAll(" ", "").split(/(\D)/);

//     this.a = Number(firstOperand);
//     this.b = Number(secondOperand);
// }

// calculator.read(3, 4);

// ---14---

// // Напиши скрипт управління особистим кабінетом інтернет банку
// //Є об'єкт account у якому необхідно реалізувати
// //методи для роботи з балансом та історією транзакцій

// // Типів транзакцій лише два.
// // Можна покласти або зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },

//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {},

//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {},

//   //Метод повертає поточний баланс
//   getBalance() {},

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {},

//   //Метод повертає кількість засобів певного типу
//   //транзакції з історії транзакцій
//   getTransactionType(type) {},
// };

// ------------------------------------------

// Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти або зняти гроші з рахунку
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 23000,

  // Історія транзакцій
  transactions: [
    {
      type: 'deposit',
      amount: 23000,
      id: 1676803548235,
      date: 'Sun Feb 19 2023 12:45:48 GMT+0200 (Восточная Европа, стандартное время)',
    },
  ],

  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
      id: Date.now(),
      date: new Date(),
    };
  },

  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const newOparation = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(newOparation);
  },

  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Error! You heve no enough money');
      return;
    }
    this.balance -= amount;
    const newOparation = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push(newOparation);
  },

  //Метод повертає поточний баланс
  getBalance() {
    return this.balance;
  },

  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {
    return this.transactions.find(el => el.type === type);
  },

  //Метод повертає кількість засобів певного типу
  //транзакції з історії транзакцій
  getTransactionType(type) {
    return this.transactions.filter(el => el.type === type);
  },
};

account.deposit(23000);
account.withdraw(10000);
account.withdraw(15000);
console.log(account);
console.log(account.getTransactionDetails(1788743784));
console.log(account.getTransactionType(1788743784));
console.log(account.getTransactionType(1788743784));

// ---15---
// ---16---
// ---17---
// ---18---
// ---14---
// ---14---
