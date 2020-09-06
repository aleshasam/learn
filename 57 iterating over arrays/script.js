'use strict';

//1.filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(item => {
    return item.length < 5;
});

console.log(shortNames);

//2.map

const answer = ['Ivan', 'AnnA', 'Hello'];

const result = answer.map(item => item.toLowerCase());

console.log(result);

//3. every/some

const some = [4, 'qwqwq', 'adsffda'];

console.log(some.some(item => typeof (item) === 'number'));
//Если один элемент массива подходит под параметры, возвращает true

console.log(some.every(item => typeof (item) === 'number'));
//Если все элементы массива подходят под параметры то ,возвращает true

//4.reduce

const arrNum = [3, 5, 1, 3, 2, 6];

const res = arrNum.reduce((sum, current) => sum + current);

console.log(res);

const fruits = ['apple', 'pear', 'plum'];

// const fruitsString = fruits.reduce((sum, current) => sum +', '+ current);
const fruitsString = fruits.reduce((sum, current) => `${sum}, ${current}`);

console.log(fruitsString);



const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);