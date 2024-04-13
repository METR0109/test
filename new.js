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

