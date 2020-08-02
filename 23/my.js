let str = 'some';
let strObj = new String(str);

console.log(str);
console.log(strObj);

const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100,
};

Object.setPrototypeOf(john, soldier);

console.log(john);