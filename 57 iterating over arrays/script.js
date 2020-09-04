'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(item => {
    return item.length < 5;
});

console.log(shortNames);