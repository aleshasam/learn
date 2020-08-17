// const now = new Date('2020-06-01');
// new Date.parse('2020-06-01');

// console.log(now);

// //получение компонентов даты

// console.log(now.getFullYear());//год
// console.log(now.getMonth());//месяц
// console.log(now.getDate());//день месяца
// console.log(now.getDay());//День недели ,0-воскресенье => 6-суббота
// console.log(now.getHours());//Получение времени ,часы
// console.log(now.getUTCHours());

// //Аналогично работает 
// console.log(now.setHours(18));

// //другое

// console.log(now.getTimezoneOffset());//Разница с UTC в минутах
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл закончил за ${end - start} мс`);