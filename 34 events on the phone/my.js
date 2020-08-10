//touchstart при прикосновеннии к эелементу
//touchmove при движении касания
//touchend при прекращении нажатия
//touchenter при попадании пальца в пределы
//touchleave палец ушел за пределы объекта
//touchcancel палец потерянс экрана

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

// .touches список нажатий на всем экране
// .targetTouches список нажатий на обЪекте
// .changedTouches