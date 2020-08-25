'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basics = 2) {
    //basics = basics || 2; //может вызвать ошибку
    console.log(number * basics);
}

calcOrDouble(3, 5);