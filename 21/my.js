const arr = [1, 2, 3, 6, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} Внутри массива ${arr}`);
});

const str = prompt('', '');
const products = str.split(', '); // разделяет строку на массив
products.sort(); //сортирует строчные элементы
console.log(products.join('; ')); //объеденяет элеиенты массива в строку