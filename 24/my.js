/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. 
Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую 
строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '12');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '12');

        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat == false) {
            this.privat = true;
        } else if (this.privat == true) {
            this.privat = false;
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов.');
        } else if (10 <= this.count && this.count < 30) {
            alert('Вы класический зритель.');
        } else {
            alert('Вы киноман.');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из поселдних просмотренных фильмов?', 'logan'),
                b = prompt('На сколько его оцените?', '8.1');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    showMyDB: function () {
        if (this.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            const a = prompt('Введите ваши любимые жанры через запятую',
                'фантастика,фантастика,фантастика').toLocaleLowerCase();

            if (a != null && a != "") {
                this.genres = a.split(',');
                this.genres.sort();
            } else {
                i--;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+ 1} - это ${item}`);
        });
    }
};

personalMovieDB.start();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();